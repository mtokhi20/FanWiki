import React,{useState,useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap";
import Cards from "./components/cards/cards";

function App() {
  // let [pageNumber, setPageNumber] = useState(7); 
  let [fetchedData, updateFetchedData] = useState([]); 
  let { results } = fetchedData; 
 console.log(results);
  let api ="https://rickandmortyapi.com/api/character/?page=20";

  //Get Data from Api
  useEffect (()=>{
    (async function (){
       let data = await fetch(api).then(res=>res.json());
      updateFetchedData(data);
    })()     
  },[api]);

  return (
    <div className="App">
      <h1 className="text-center my-4 text-info">Character Wiki</h1>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <div className="row">
              
              <Cards className="col- 4" results={results} />
              <Cards className="col- 4" results={results} />
              <Cards className="col- 4" results={results} />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

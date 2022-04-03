import React from "react";
 import styles from './card.scss';

const Cards = ({results}) => {
    let display ;

    if(results){
       display = results.map(x => {
           let {id , name, image, location} = x;
           return(
               //it might be col-12
                <div key={id} className="col-4 mb-4 position-relative">
                    <div className={`${styles.cards}`}>
                        <img src={image} alt="" className={`${styles.img} img-fluid`} />
                        <div style={{padding : "10px"}} className="content">
                            <div className="fs-4 fw-bold mb-4">{name}</div>
                            <div className="">
                                <div className="fs-6">Last Location</div>
                                <div className="fs-5">{location.name}</div>
                            </div>
                        </div>
                    </div>
                </div>
            );
       });
    } else {
        display= "No Characters Found"
    }
    return <div>{display}</div>;
};

export default Cards
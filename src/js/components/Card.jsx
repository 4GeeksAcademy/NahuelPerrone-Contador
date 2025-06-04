import React from "react";

let seconds = "20"

let Card = () => {

    return (
        <div className="card" style={{width: "18rem"}}>
        <div className="card-body">
            <h5 className="card-title"onLoad={seconds}>{seconds} Segundos</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
        </div>
        </div>
    );

};
export default Card;
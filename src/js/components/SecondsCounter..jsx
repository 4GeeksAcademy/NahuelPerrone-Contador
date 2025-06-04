import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Card from "./Card";

//create your first component
const SecondCounter = (props) => {
	return (
		<div className="text-center">
            <h1>Secondcounter</h1>
            <h1>{props.seconds}</h1>
		
            
		</div>
	);
};

export default SecondCounter;
import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Card from "./Card";

//create your first component
const SecondCounter = (props) => {
	return (
		<div className="text-center d-flex justify-content-center align-items-center bg-black">
			<Card seconds = {props.seconds} />
			<div className="card bg-black text-white border border-radius-5 m-2" style={{width: "6rem",height:"5rem",}}>
				<h5 className="card-title m-4">{props.secondsFive}</h5>
			</div>
			<div className="card bg-black text-white border border-radius-5 " style={{width: "6rem",height:"5rem"}}>
				<h5 className="card-title m-4">{props.secondsFour}</h5>
			</div>
			<div className="card bg-black text-white border border-radius-5 m-2" style={{width: "6rem",height:"5rem"}}>
				<h5 className="card-title m-4">{props.secondsThree}</h5>
			</div>
			<div className="card bg-black text-white border border-radius-5" style={{width: "6rem",height:"5rem"}}>
				<h5 className="card-title m-4">{props.secondsTwo}</h5>
			</div>
			<div className="card bg-black text-white border border-radius-5 m-2" style={{width: "6rem",height:"5rem"}}>
				<h5 className="card-title m-4">{props.secondsOne}</h5>
			</div>
			<div className="card bg-black text-white border border-radius-5" style={{width: "6rem",height:"5rem"}}>
				<h5 className="card-title m-4">{props.seconds}</h5>
			</div>
		


		</div>
	);
};

export default SecondCounter;
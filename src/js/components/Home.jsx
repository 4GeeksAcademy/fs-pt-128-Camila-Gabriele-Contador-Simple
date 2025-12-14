import React from "react";

//include images into your bundle


//create your first component
const Home = ({ count }) => {


	return (
		<>
			<h1 className="text-white d-flex justify-content-center align-item-center mt-4">MONACO GRAND PRIX</h1>
			<h2 className="text-danger d-flex justify-content-center align-item-center"> 175 DAYS LEFT </h2>
			<div classNameName="botones position-absolute top-50 start-50">
				<div className="btn-group">
					<button type="button" className="btn btn-outline-light border-5 icono"><i className="fa-regular fa-clock"></i></button>
					<button type="button" className="btn btn-outline-light border-5 mid">{Math.floor(count / 10000) % 10} </button>
					<button type="button" className="btn btn-outline-light border-5 mid">{Math.floor(count / 1000) % 10} </button>
					<button type="button" className="btn btn-outline-light border-5 mid">{Math.floor(count / 100) % 10} </button>
					<button type="button" className="btn btn-outline-light border-5 mid">{Math.floor(count / 10) % 10}</button>
					<button type="button" className="btn btn-outline-light border-5 end">{Math.floor(count / 1) % 10} </button>
				</div>
			</div>
		</>
	)
};

export default Home;
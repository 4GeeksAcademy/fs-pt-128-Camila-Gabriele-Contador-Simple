import React from "react";

//include images into your bundle


//create your first component
const Home = ({ count }) => {


	return (
		<>
			<div classNameName="botones position-absolute top-50 start-50">
				<div className="btn-group">
					<button type="button" className="btn btn-outline-danger icono"><i className="fa-regular fa-clock"></i></button>
					<button type="button" className="btn btn-outline-danger mid">{Math.floor(count / 10000) % 10} </button>
					<button type="button" className="btn btn-outline-danger mid">{Math.floor(count / 1000) % 10} </button>
					<button type="button" className="btn btn-outline-danger mid">{Math.floor(count / 100) % 10} </button>
					<button type="button" className="btn btn-outline-danger mid">{Math.floor(count / 10) % 10}</button>
					<button type="button" className="btn btn-outline-danger end">{Math.floor(count / 1) % 10} </button>
				</div>
			</div>
		</>
	)
};

export default Home;
import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [tarea, setTarea] = useState("");
	const [listatareas, setListaTareas] = useState([]);

	useEffect(() => {
		console.log(listatareas);
	}, [listatareas]);

	return (
		<>
			<div className="text-center mt-5">
				<h1>TO DO LIST</h1>
				<p></p>
				<a href="#" className="btn btn-success">
					HOLA YO SERE UN INPUT{" "}
				</a>
				<p>Agregare tareas </p>

				<div className="partedelinput">
					<input
						type="text"
						onChange={e => setTarea(e.target.value)}
						placeholder="tareas pendientes"
					/>
					<div>
						<button
							className="boton"
							onClick={() => {
								setListaTareas([...listatareas, tarea]);
								console.log(listatareas);
							}}>
							<i className="fas fa-chevron-circle-down"></i>
						</button>
					</div>
				</div>
			</div>
			<div>
				{listatareas.map((valor, posicion) => {
					return (
						<div
							key={posicion}
							className="alert alert-info"
							role="alert">
							{valor}
						</div>
					);
				})}
			</div>{" "}
		</>
	);
};
export default Home;

/*BOTON ELIMINAR TAREA
TAREA > POSICION

Onclick (posicion) => {
    
}

};*/

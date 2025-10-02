import React, { useState, useEffect } from "react";

export function App() {
	const [imagenes, setImagenes] = useState([]);

	useEffect(() => {
		fetch("https://picsum.photos/v2/list?page=2&limit=25")
			.then((res) => res.json())
			.then(	(data) => setImagenes(data.slice(0, 9)))
			.catch((err) => console.error("Error al cargar imágenes:", err));
	}, []);

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				minHeight: "100vh",
				color: "#111",
				padding: "20px",
			}}
		>
			<h1 style={{ marginBottom: "32px" }}>Galería de Imágenes</h1>

				<div
				style={{
					display: "grid",
					gridTemplateColumns: "repeat(3, 1fr)",
					gap: "30px",
				}}
			>
				{imagenes.map((img) => (
					<div
						key={img.id}
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							borderRadius: "8px",
							overflow: "hidden",
							boxShadow: "2px 2px 8px rgba(0,0,0,0.2)",
							background: "#fff",
							padding: "8px",
						}}
					>
						<img
							src={`https://picsum.photos/id/${img.id}/200/200`}
							alt={`Imagen de ${img.author}`}
							style={{
								width: "200px",
								height: "200px",
								objectFit: "cover",
								borderRadius: "6px",
							}}
						/>
						<p style={{ marginTop: "8px", fontSize: "14px", color: "#333" }}>Autor: {img.author}</p>
					</div>
				))}
			</div>
		</div>
	);
}

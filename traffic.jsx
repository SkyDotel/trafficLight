import React, { useState } from "react";

//clickable traffic light
function Traffic() {
	const [color, setColor] = useState("yellow");

	return (
		<div class="traffic-light">
			<div
				onClick={() => setColor("red")}
				class={"light red" + (color === "red" ? " glow" : "")}></div>
			<div
				onClick={() => setColor("yellow")}
				class={
					"light yellow" + (color === "yellow" ? " glow" : "")
				}></div>
			<div
				onClick={() => setColor("green")}
				class={
					"light green" + (color === "green" ? " glow" : "")
				}></div>
		</div>
	);
}

export default Traffic;

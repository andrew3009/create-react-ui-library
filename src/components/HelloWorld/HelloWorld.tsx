import React from "react";
import "./HelloWorld.css";

export interface HelloWorldProps {
	name: string;
}

function HelloWorld(props: HelloWorldProps) {
	return <div className="helloworld">Hello {props.name}</div>;
}

export default HelloWorld;
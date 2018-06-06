import React, { Component } from "react";
import { hot } from "react-hot-loader";
import Nav from "./Nav.js";
import Top from "./Top.js";
import Content from "./Content.js";

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="left">
					<Nav />
				</div>
				<div className="right">
					<Top />
					<div className="TopSeperator primary"></div>
					<Content />
				</div>
			</div>

		);
	}
}

export default hot(module)(App);
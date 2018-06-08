import React, { Component } from "react";
import { hot } from "react-hot-loader";
import Nav from "./base/Nav.js";
import Top from "./base/Top.js";
import Content from "./base/Content.js";

let db = {
	pageFile: "Home"
}

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="left">
					<Nav />
				</div>
				<div className="right">
					<Top />
					<div className="TopSeperator secondary"></div>
					<Content pageFile={db.pageFile}/>
				</div>
			</div>
		);
	}
}

export default hot(module)(App);
import React, {Component} from "react";

class Content extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pageFile: props.pageFile,
			page: require("../pages/" + props.pageFile + ".js")
		};
	}

	render () {
		const Page = this.state.page.default;
		return <Page />;
	}
}

export default Content;
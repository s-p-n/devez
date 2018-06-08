import React, { Component } from "react";


function NavItem (props) {
	return (
		<li>
			<a href={props.href} className={props.active ? "active" : ""} onClick={props.onClick}>
				<i className={"fas " + props.icon}></i>
				<span>{props.content}</span>
			</a>
		</li>
	);
}

class Nav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nav: [
				{
					href: '#',
					icon: 'fa-home',
					content: 'Home',
					active: true
				}, {
					href: '#',
					icon: 'fa-ticket-alt',
					content: 'Some Place',
					active: false
				}, {
					href: '#',
					icon: 'fa-user-secret',
					content: 'About',
					active: false
				}, {
					href: '#',
					icon: 'fa-crow',
					content: 'Something',
					active: false
				}, {
					href: '#',
					icon: 'fa-flask',
					content: 'Example',
					active: false
				}, {
					href: '#',
					icon: 'fa-phone',
					content: 'Contact',
					active: false
				}
			]
		}
	}

	handleClick(i) {
		const nav = this.state.nav.slice();
		nav.forEach((item, index) => {
			if (i === index) {
				nav[index].active = true;
			} else {
				nav[index].active = false;
			}
		});
		this.setState({
			nav: nav
		});
	}

	render() {
		const self = this;
		const navList = this.state.nav.map((item, i) => 
			<NavItem
				key={item.href + item.content}
				href={item.href}
				icon={item.icon}
				content={item.content}
				active={item.active}
				onClick={() => {self.handleClick(i)}}
			/>
		);
		return (
			<div className="Nav">
				<ul>
					{navList}
				</ul>
			</div>
		);
	}
}

export default Nav;
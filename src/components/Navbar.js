import React from "react";
import Logo from "../images/logo.png";

const Navbar = () => (
	<nav className = "navbar navbar-expand">
		<div className="container-fluid">
			<div className="navbar-header">
				<img src={Logo} alt="Pokemon"/> 
				<span id="after-logo">Team Builder</span>
			</div>
		</div>
	</nav>
)

export default Navbar;
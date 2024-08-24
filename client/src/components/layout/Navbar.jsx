import React from 'react'
import logo from '../../img/logo.svg'

export const Navbar = () => {
	return (
		<nav className="navbar bg-dark">
			<h1>
				<a href="index.html">
					<img
						src={logo}
						alt="slice"
					/>
				</a>
			</h1>
			<ul>
				<li>
					<a href="profiles.html">Developers</a>
				</li>
				<li>
					<a href="register.html">Register</a>
				</li>
				<li>
					<a href="login.html">Login</a>
				</li>
			</ul>
		</nav>
	)
}

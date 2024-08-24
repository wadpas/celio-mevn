import { Link } from 'react-router-dom'
import logo from '../../img/logo.svg'

export const Navbar = () => {
	return (
		<nav className="navbar bg-dark">
			<h1>
				<Link to="/">
					<img
						src={logo}
						alt="slice"
					/>
				</Link>
			</h1>
			<ul>
				<li>
					<Link to="!#">Developers</Link>
				</li>
				<li>
					<Link to="/register">Register</Link>
				</li>
				<li>
					<Link to="/login">Login</Link>
				</li>
			</ul>
		</nav>
	)
}

import { Link } from 'react-router-dom'

export const Landing = () => {
	return (
		<section className="landing">
			<div className="dark-overlay">
				<div className="landing-inner">
					<h1 className="x-large">SLICE</h1>
					<p className="lead">Create a developer portfolio, share posts and help from other developers</p>
					<div className="buttons">
						<Link
							to="/register"
							className="btn btn-primary">
							Sign Up
						</Link>
						<Link
							to="/login"
							className="btn btn-light">
							Login
						</Link>
						<img
							src="./img/showcase.jpg"
							alt=""
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

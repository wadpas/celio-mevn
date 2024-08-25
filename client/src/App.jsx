import { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Navbar from './components/layout/Navbar'
import Landing from './components/layout/Landing'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Alert from './components/layout/Alert'
import store from './store'

import './App.css'

const App = () => {
	return (
		<Provider store={store}>
			<Router>
				<Fragment>
					<Navbar />
					<Routes>
						<Route
							exact
							path="/"
							element={<Landing />}
						/>
						<Route
							exact
							path="/register"
							element={<Register />}
						/>
						<Route
							exact
							path="/login"
							element={<Login />}
						/>
					</Routes>
					<Alert />
				</Fragment>
			</Router>
		</Provider>
	)
}

export default App

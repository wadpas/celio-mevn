import api from '../utils/api'
import { setAlert } from './alert'
import {
	GET_PROFILE,
	PROFILE_ERROR,
	UPDATE_PROFILE,
	CLEAR_PROFILE,
	ACCOUNT_DELETED,
	GET_PROFILES,
	GET_REPOS,
	NO_REPOS,
} from './types'

export const getCurrentProfile = () => async (dispatch) => {
	try {
		const res = await api.get('/profile/me')
		dispatch({
			type: GET_PROFILE,
			payload: res.data,
		})
	} catch (err) {
		dispatch({
			type: PROFILE_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		})
	}
}

export const getProfiles = () => async (dispatch) => {
	dispatch({ type: CLEAR_PROFILE })
	try {
		const res = await api.get('/profile')

		dispatch({
			type: GET_PROFILES,
			payload: res.data,
		})
	} catch (err) {
		dispatch({
			type: PROFILE_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		})
	}
}

export const getProfileById = (userId) => async (dispatch) => {
	try {
		const res = await api.get(`/profile/user/${userId}`)
		dispatch({
			type: GET_PROFILE,
			payload: res.data,
		})
	} catch (err) {
		dispatch({
			type: PROFILE_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		})
	}
}

export const getGithubRepos = (username) => async (dispatch) => {
	try {
		const res = await api.get(`/profile/github/${username}`)

		dispatch({
			type: GET_REPOS,
			payload: res.data,
		})
	} catch (err) {
		dispatch({
			type: NO_REPOS,
		})
	}
}

export const createProfile =
	(formData, edit = false) =>
	async (dispatch) => {
		try {
			const res = await api.post('/profile', formData)
			dispatch({
				type: GET_PROFILE,
				payload: res.data,
			})
			dispatch(setAlert(edit ? 'Profile Updated' : 'Profile Created', 'success'))
		} catch (err) {
			console.log(err)
			const errors = err.response.data.errors
			if (errors) {
				errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')))
			}
			dispatch({
				type: PROFILE_ERROR,
				payload: { msg: err.response.statusText, status: err.response.status },
			})
		}
	}

export const addExperience = (formData) => async (dispatch) => {
	try {
		const res = await api.put('/profile/experience', formData)
		dispatch({
			type: UPDATE_PROFILE,
			payload: res.data,
		})
		dispatch(setAlert('Experience Added', 'success'))
	} catch (err) {
		const errors = err.response.data.errors
		if (err) {
			console.log(errors)
			errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')))
		}
		dispatch({
			type: PROFILE_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		})
	}
}

export const addEducation = (formData) => async (dispatch) => {
	try {
		const res = await api.put('/profile/education', formData)
		dispatch({
			type: UPDATE_PROFILE,
			payload: res.data,
		})
		dispatch(setAlert('Education Added', 'success'))
	} catch (err) {
		const errors = err.response.data.errors
		if (errors) {
			errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')))
		}
		dispatch({
			type: PROFILE_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		})
	}
}

export const deleteExperience = (id) => async (dispatch) => {
	try {
		const res = await api.delete(`/profile/experience/${id}`)
		dispatch({
			type: UPDATE_PROFILE,
			payload: res.data,
		})
		dispatch(setAlert('Experience Removed', 'success'))
	} catch (err) {
		dispatch({
			type: PROFILE_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		})
	}
}

export const deleteEducation = (id) => async (dispatch) => {
	try {
		const res = await api.delete(`/profile/education/${id}`)
		dispatch({
			type: UPDATE_PROFILE,
			payload: res.data,
		})
		dispatch(setAlert('Education Removed', 'success'))
	} catch (err) {
		dispatch({
			type: PROFILE_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		})
	}
}

export const deleteAccount = () => async (dispatch) => {
	if (window.confirm('Are you sure? This can NOT be undone!')) {
		try {
			await api.delete('/api/profile')
			dispatch({ type: CLEAR_PROFILE })
			dispatch({ type: ACCOUNT_DELETED })
			dispatch(setAlert('Your account has been permanently deleted'))
		} catch (err) {
			dispatch({
				type: PROFILE_ERROR,
				payload: { msg: err.response.statusText, status: err.response.status },
			})
		}
	}
}

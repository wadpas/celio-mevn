import api from '../utils/api'
import { setAlert } from './alert'
import { GET_POSTS, UPDATE_LIKES, POST_ERROR, DELETE_POST, ADD_POST, GET_POST } from './types'

export const getPosts = () => {
	return async (dispatch) => {
		try {
			const res = await api.get('/posts')
			dispatch({
				type: GET_POSTS,
				payload: res.data,
			})
		} catch (err) {
			dispatch({
				type: POST_ERROR,
				payload: { msg: err.response.statusText, status: err.response.status },
			})
		}
	}
}

export const addLike = (id) => async (dispatch) => {
	try {
		const res = await api.put(`/posts/like/${id}`)
		dispatch({
			type: UPDATE_LIKES,
			payload: { id, likes: res.data },
		})
	} catch (err) {
		dispatch({
			type: POST_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		})
	}
}

export const removeLike = (id) => async (dispatch) => {
	try {
		const res = await api.put(`/posts/unlike/${id}`)
		dispatch({
			type: UPDATE_LIKES,
			payload: { id, likes: res.data },
		})
	} catch (err) {
		dispatch({
			type: POST_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		})
	}
}

export const deletePost = (id) => async (dispatch) => {
	try {
		await api.delete(`/posts/${id}`)
		dispatch({
			type: DELETE_POST,
			payload: id,
		})

		dispatch(setAlert('Post Removed', 'success'))
	} catch (err) {
		dispatch({
			type: POST_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		})
	}
}

export const addPost = (formData) => async (dispatch) => {
	try {
		const res = await api.post('/posts', formData)
		dispatch({
			type: ADD_POST,
			payload: res.data,
		})
		dispatch(setAlert('Post Created', 'success'))
	} catch (err) {
		dispatch({
			type: POST_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		})
	}
}

export const getPost = (id) => async (dispatch) => {
	try {
		const res = await api.get(`/posts/${id}`)
		dispatch({
			type: GET_POST,
			payload: res.data,
		})
	} catch (err) {
		dispatch({
			type: POST_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		})
	}
}
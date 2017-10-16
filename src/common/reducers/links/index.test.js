import {links as reducer, initialState} from 'reducers/links'
import {
	GET_LINKS_SUCCESS,
	GET_LINKS_FAIL,
	GET_LINKS_PENDING
} from 'actions/links'

const fail = {
	type: GET_LINKS_FAIL,
	payload: {
		errors: {
			hmm: 'thatsanerror'
		}
	}
}

const samplePayloadItem = {
	item: 'payload'
}

const success = {
	type: GET_LINKS_SUCCESS,
	payload: samplePayloadItem
}

const pending = {
	type: GET_LINKS_PENDING
}

describe('LINKS REDUCER', () => {
	it('should return the initial state', () => {
		expect(reducer(undefined, {x: 'string'})).toEqual(initialState)
	})

	it('should handle GET_LINKS_SUCCESS', () => {
		expect(reducer(initialState, success)).toEqual({
			...initialState,
			entities: samplePayloadItem,
			isLoaded: true,
			isLoading: false
		})
	})

	it('should handle GET_LINKS_FAIL', () => {
		expect(reducer(initialState, fail)).toEqual({
			...initialState,
			errors: {
				hmm: 'thatsanerror'
			},
			isLoaded: true,
			isLoading: false
		})
	})

	it('should handle GET_LINKS_PENDING', () => {
		expect(reducer(initialState, pending)).toEqual({
			...initialState,
			errors: {},
			isLoaded: false,
			isLoading: true
		})
	})
})

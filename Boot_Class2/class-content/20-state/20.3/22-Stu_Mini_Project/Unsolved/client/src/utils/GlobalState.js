import React, { useReducer, createContext, useContext } from 'react';
import { UPDATE_POSTS, REMOVE_POSTS, SET_CURRENT_POSTS, ADD_POSTS, LOADING } from './actions';

const StoreContext = createContext();

const { Provider } = StoreContext;

const reducer = (state, action) => {
	switch (action.type) {
		case UPDATE_POSTS:
			return { ...state, posts: [ ...action.posts ], loading: false };
		case REMOVE_POSTS:
			return {
				...state,
				posts: state.posts.filter((post) => {
					return post._id !== action._id;
				})
			};
		case SET_CURRENT_POSTS:
			return { ...state, currentPost: action.post, loading: false };
		case ADD_POSTS:
			return { ...state, posts: [ action.post, ...state.posts ], loading: false };
		case LOADING:
			return { ...state, loading: true };
		default:
			return state;
	}
};

const StoreProvider = ({ value = [], ...props }) => {
	const [ state, dispatch ] = useReducer(reducer, {
		posts: [],
		favorites: [],
		loading: false,
		currentPost: {
			_id: 0,
			title: '',
			body: '',
			author: ''
		}
	});

	return <Provider value={[ state, dispatch ]} {...props} />;
};

const useStoreContext = () => {
	return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };

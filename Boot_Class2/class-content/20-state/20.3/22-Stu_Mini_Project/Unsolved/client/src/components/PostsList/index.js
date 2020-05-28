import React from 'react';
import { ListItem, List } from '../List';
import DeleteBtn from '../DeleteBtn';
import { Link } from 'react-router-dom';
import { useStoreContext } from '../../utils/GlobalState';
import { REMOVE_POSTS, UPDATE_POSTS, LOADING } from '../../utils/GlobalState';
import API from '../../utils/API';

const PostsList = () => {
	const [ state, dispatch ] = useStoreContext();

	const removePosts = (id) => {
		API.deletePost(id)
			.then(() => {
				dispatch({ type: REMOVE_POSTS, _id: id });
			})
			.catch((err) => console.log(err));
	};

	const getPosts = () => {
		dispatch({ type: LOADING });
		API.getPosts()
			.then((result) => {
				dispatch({ type: UPDATE_POSTS, posts: result.data });
			})
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		getPosts();
	}, []);

	return (
		<div>
			<h1>All Blog Posts</h1>
			<h3 className="mb-5 mt-5">Click on a post to view</h3>
			{/* Replace `[]` with the appropriate arrays */}
			{state.posts.length ? (
				<List>
					{state.posts.map((post) => (
						<ListItem key={post._id}>
							<Link to={'/posts/' + post._id}>
								<strong>
									{post.title} by {post.author}
								</strong>
							</Link>
							<DeleteBtn onClick={() => removePosts(post._id)} />
						</ListItem>
					))}
				</List>
			) : (
				<h3>You haven't added any posts yet!</h3>
			)}
			<div className="mt-5">
				<Link to="favorites">View favorites</Link>
			</div>
		</div>
	);
};

export default PostsList;

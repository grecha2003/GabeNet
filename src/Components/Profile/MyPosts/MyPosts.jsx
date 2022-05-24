import React from 'react';
import AddPosts from './AddPost/AddPosts';
import classes from './MyPosts.module.css';
import { Formik, Form, Field } from 'formik';

const MyPosts = (props) => {
	let postsElement = props.posts.map((p) => (
		<AddPosts id={p.id} message={p.message} LikesCount={p.LikesCount} key={p.id} />
	));

	// let newPostElement = React.createRef();
	// let onPostCnange = () => {
	// 	let text = newPostElement.current.value;
	// 	props.updateNewPostText(text);
	// };

	let onAddPost = (values) => {
		if (values) {
			props.addPost(values);
		} else {
			alert('empty text box');
		}
	};

	return (
		<Formik
			initialValues={{
				newPostText: '',
			}}
			onSubmit={(values, { resetForm }) => {
				onAddPost(values.newPostText);
				resetForm({ values: '' });
				console.log(values);
			}}
		>
			<div>
				<Form>
					<div className={classes.posts}>
						<div className={classes.write__post}>
							<Field as={'textarea'} name={'newPostText'} placeholder={'Enter your post'} />
						</div>
						<div>
							<button className={classes.write__btn} type={'submit'}>
								Add post
							</button>
						</div>
					</div>
					{postsElement}
				</Form>
			</div>
		</Formik>
	);
};

export default MyPosts;

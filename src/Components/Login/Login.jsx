import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validateLoginForm = (values) => {
	const errors = {};
	if (!values.email) {
		errors.email = 'empty text box';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
		errors.email = 'invalid email address';
	}
	return errors;
};

const validationSchemaLoginForm = Yup.object().shape({
	password: Yup.string()
		.min(2, 'must be longer than 2 characters')
		.max(5, 'must be shorter than 5 characters')
		.required('empty text box'),
});

const Login = () => {
	return (
		<div>
			<h2>Login</h2>
			<Formik
				initialValues={{
					email: '',
					password: '',
					rememberMe: false,
				}}
				validate={validateLoginForm}
				validationSchema={validationSchemaLoginForm}
				onSubmit={(values) => {
					console.log(values);
				}}
			>
				{() => (
					<Form>
						<div>
							<Field name={'email'} type={'text'} placeholder={'email'} />
						</div>
						<ErrorMessage name="email" component="div" placeholder={'email'} />

						<div>
							<Field name={'password'} type={'password'} placeholder={'password'} />
						</div>
						<ErrorMessage name="password" component="div" />

						<div>
							<Field type={'checkbox'} name={'rememberMe'} id="rememberMe" />
							<label htmlFor={'rememberMe'}> remember me </label>
						</div>

						<button type={'submit'}>Login</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default Login;

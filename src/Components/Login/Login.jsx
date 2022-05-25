import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { login } from '../../Redux/authReducer';

const validateLoginForm = (values) => {
	const errors = {};
	if (!values.email) {
		errors.email = 'required field';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
		errors.email = 'invalid email address';
	}
	return errors;
};

const validationSchemaLoginForm = Yup.object().shape({
	password: Yup.string()
		.min(2, 'Min length is 2 symbols')
		.max(30, 'Max length is 30 symbols')
		.required('required field'),
});

const Login = (props) => {
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
				onSubmit={(values, formData) => {
					props.login(formData.email, formData.password, formData.rememberMe);
					console.log(values);
				}}
			>
				{() => (
					<Form style={{ fontSize: '16px' }}>
						<div style={{ display: 'flex', color: 'red', marginBottom: '5px' }}>
							<Field
								name={'email'}
								type={'text'}
								placeholder={'email'}
								style={{ height: '24px', fontSize: '16px' }}
							/>
							<ErrorMessage
								name="email"
								component="div"
								placeholder={'email'}
								style={{ margin: '5px 0px 0px 0px' }}
							/>
						</div>
						<div style={{ display: 'flex', marginBottom: '5px' }}>
							<Field
								name={'password'}
								type={'password'}
								placeholder={'password'}
								style={{ height: '24px', fontSize: '16px' }}
							/>
							<ErrorMessage
								name="password"
								component="div"
								style={{ margin: '5px 0px 0px 0px', color: 'red' }}
							/>
						</div>
						<div style={{ marginBottom: '5px' }}>
							<Field
								type={'checkbox'}
								name={'rememberMe'}
								id="rememberMe"
								style={{
									width: '16px',
									height: '16px',
									margin: '0px 4px 0px 0px',
									verticalAlign: 'bottom',
								}}
							/>
							<label htmlFor={'rememberMe'} style={{}}>
								remember me
							</label>
						</div>
						<button type={'submit'} style={{ fontSize: '16px', marginTop: '3px' }}>
							Login
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default connect(null, { login })(Login);

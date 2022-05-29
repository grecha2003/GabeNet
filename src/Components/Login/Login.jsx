import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { login } from '../../Redux/authReducer';
import { Navigate } from 'react-router';

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
	if (props.isAuth) {
		return <Navigate replace to={'/profile'} />;
	}

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
					props.login(values.email, values.password, values.rememberMe);
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
						<button
							type={'submit'}
							style={{ fontSize: '16px', marginTop: '3px' }}
							disabled={Formik.isSubmitting}
						>
							Login
						</button>
						{Formik.status && <div style={{ color: 'red' }}>{Formik.status}</div>}
					</Form>
				)}
			</Formik>
		</div>
	);
};

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);

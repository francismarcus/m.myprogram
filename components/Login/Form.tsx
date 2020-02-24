import React from 'react';
import { Form } from 'formik';
import AuthInput from 'components/AuthInput';
import AuthButton from 'components/AuthButton';
import { ApolloError } from 'apollo-client';
import styled from 'styled-components/native';
import FadeIn from 'components/FadeIn';
import RoundButton from 'components/RoundButton';

const LoginForm: React.FC<Props> = ({ error, isLoading, ...props }) => {
	return (
		<Form>
			<StyledForm isLoading={isLoading}>
				<AuthInput name="email" label="Email" />
				<AuthInput name="password" label="Password" type="password" secureTextEntry />

				{error && <p> {error.graphQLErrors[0].message} </p>}
				<RoundButton onPress={props.handleSubmit} />
			</StyledForm>
		</Form>
	);
};
interface Props {
	error: ApolloError | undefined;
	isLoading: boolean;
	handleSubmit: () => void;
}

export default LoginForm;

const StyledForm = styled.View<StyledFormProps>`
	opacity: ${props => (props.isLoading ? '30%' : 100 )};
`;

interface StyledFormProps {
	isLoading: boolean;
}

import { Formik } from 'formik';
import { schema } from 'components/Login/schema';
import LoginForm from 'components/Login/Form';
import { useLoginMutation } from 'graphql/generated';
import Router from 'next/router';
import styled from 'styled-components/native';

export default () => {
	const [login, { error, client, loading, data }] = useLoginMutation();

	if (error) console.log(error);

	const Loading = () => {
		if (loading) return true;
		if (data) return true;
		else return false;
	};

	const isLoading = Loading();

	return (
		<Formik
			initialValues={{
				email: '',
				password: ''
			}}
			validationSchema={schema}
			onSubmit={async ({ email, password }: FieldProps) => {
				const response = await login({
					variables: { credentials: { email, password } }
				});

				const { token } = response.data!.login;
				if (token && client) {
					client.writeData({
						data: {
							myToken: token
						}
					});
					await localStorage.setItem('token', token);
					//return Router.push('/');
				}
			}}
		>{({ handleSubmit }) => (
			<KeyboardView>
				<Wrapper>
					<Scroll>
						<StyledText>Login</StyledText>
						<LoginForm error={error} isLoading={isLoading} handleSubmit={handleSubmit} />
					</Scroll>
				</Wrapper>
			</KeyboardView>
            )}
		</Formik>
	);
};

interface FieldProps {
	email: string;
	password: string;
}

const KeyboardView = styled.KeyboardAvoidingView`
	display: flex;
	flex: 1;
	background-color: ${({ theme }) => theme.colors.primary};
`;

const Wrapper = styled.View`
	margin-top: 20%;
	flex: 1;
	margin-left: ${({ theme }) => theme.spacing.small};
	margin-right: ${({ theme }) => theme.spacing.small};
`;

const StyledText = styled.Text`
	font-size: ${({ theme }) => theme.fz.t2};
	color: ${({ theme }) => theme.colors.bg};
	margin-bottom: ${({ theme }) => theme.spacing.base};
	font-weight: 600;
`;

const Scroll = styled.ScrollView``;

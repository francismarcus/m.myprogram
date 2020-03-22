// @generated: @expo/next-adapter@2.0.5
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';

import Router from 'next/router';
import dynamic from 'next/dynamic';

import { useApolloClient } from '@apollo/react-hooks';
import { getMyToken } from 'apollo';
import { useDidMount } from '@francismarcus/hooks';

const Welcome = dynamic(() => import('pages/welcome'), { ssr: false });
const Loading = dynamic(() => import('pages/loading'), { ssr: false });

export default function App() {
	const [redirect, setRedirect] = React.useState(false);
	const client = useApolloClient();

	useDidMount(() => {
		const store: any = client.cache.readQuery({
			query: getMyToken
		});

		const { myToken } = store;
		if (myToken) return;
		if (!myToken) {
			if (!getAuthToken()) {
				Router.replace('/', '/welcome', { shallow: true });
				setRedirect(true);
			} else {
				const token = getAuthToken();
				return client.writeData({
					data: {
						myToken: token
					}
				});
			}
		}
	});


	if (redirect) return <Welcome />;
	if (!redirect) return <Loading />;

	return (
		<StyledView>
			<Text style={styles.text}>👋</Text>
		</StyledView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	text: {
		fontSize: 16
	}
});

const StyledView = styled.View`
	display: flex;
	flex-direction: column;
	flex: 1;
	justify-content: center;
	align-items: center;
	background-color: ${({ theme }) => theme.colors.bg};
`;

export const getAuthToken = () => localStorage.getItem('authToken');
export const setAuthToken = token => localStorage.setItem('authToken', token);
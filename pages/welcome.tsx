import React from 'react';
import styled from 'styled-components/native';
import LoginButton from '../components/LoginButton';
import BetaTerms from '../components/BetaTerms';
import Router from 'next/router';

export default () => (
	<Flexbox>
		<Wrapper>
			<Emoji> 💪</Emoji>
			<View>
				<StyledText> Welcome to</StyledText><StyledText> Myprogram</StyledText>
				
			</View>
			<LoginButton onPress={() => Router.push('/login')}> Login </LoginButton>
			<LoginButton> Create account </LoginButton>

			<BetaTerms />
		</Wrapper>
	</Flexbox>
);

const View = styled.View`
	margin-bottom: ${({ theme }) => theme.spacing.base};
	flex-wrap: wrap;
    flex-direction: row;
`;

const StyledText = styled.Text`
	font-size: ${({ theme }) => theme.fz.t2};
	font-weight: 700;
	color: ${({ theme }) => theme.colors.bg};
`;
const Emoji = styled.Text`
	font-size: ${({ theme }) => theme.fz.t1};
	margin-top: ${({ theme }) => theme.spacing.base};
	margin-bottom: ${({ theme }) => theme.spacing.xlarge};
	margin-right: auto;
`;

const Wrapper = styled.View`
	flex: 1;
	display: flex;
	margin-top: ${({ theme }) => theme.spacing.xlarge};
	margin-left: ${({ theme }) => theme.spacing.small};
	margin-right: ${({ theme }) => theme.spacing.small};
`;

const Flexbox = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.colors.primary};
`;

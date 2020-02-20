import React from 'react'
import styled from 'styled-components/native'
import LoginButton from '../components/LoginButton'
import BetaTerms from '../components/BetaTerms'

export default () => (
    <Flexbox>
        <Wrapper>
            <Emoji> 💪</Emoji>
            <StyledText> Welcome to Myprogram </StyledText>
            <LoginButton> Login </LoginButton>
            <LoginButton> Create account </LoginButton>
         

            

            <BetaTerms />
        </Wrapper>
    </Flexbox>
)

const StyledText = styled.Text`
    font-size: ${({ theme }) => theme.fz.t2};
    font-weight: 500;
    color: ${({ theme }) => theme.colors.bg};
    margin-bottom: ${({ theme }) => theme.spacing.xlarge};
`
const Emoji = styled.Text`
    font-size: ${({ theme }) => theme.fz.t1};
    margin-top: ${({ theme }) => theme.spacing.base};
    margin-bottom: ${({ theme }) => theme.spacing.base};
	margin-right: auto;
`

const Wrapper = styled.View`
    flex: 1;
    display: flex;
    margin-top: ${({ theme }) => theme.spacing.xlarge};
    margin-left: ${({ theme }) => theme.spacing.small};
    margin-right: ${({ theme }) => theme.spacing.small};
`

const Flexbox = styled.View`
	flex: 1;
    background-color: ${({ theme }) => theme.colors.primary};
`
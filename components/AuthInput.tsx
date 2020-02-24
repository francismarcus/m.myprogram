import React from 'react';
import styled from 'styled-components/native';
import { useField } from 'formik';

export default ({ label, ...props }: any) => {
	const [field, meta] = useField(props);
	const errorMsg = meta.touched && meta.error;

	return (
		<StyledView>
			<StyledText>{label}</StyledText>
			<StyledInput {...props} {...field} autoComplete={false} />
			{errorMsg && <StyledErrorMessage> {errorMsg} </StyledErrorMessage>}
		</StyledView>
	);
};

const StyledView = styled.View`
	display: flex;
	margin-top: ${({ theme }) => theme.spacing.base};
`;

const StyledText = styled.Text`
	color: ${({ theme }) => theme.colors.bg};
	font-size: ${({ theme }) => theme.fz.large};
`;

const StyledInput = styled.TextInput`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.bg};
    padding: ${({ theme }) => theme.spacing.small} 0;
    border-bottom-color: ${({ theme }) => theme.colors.bg}
    border-bottom-width: 1px;
    font-size: ${({ theme }) => theme.fz.regular};


    &::focus { outline: none; };
	&::-webkit-autofill,
	&::-webkit-autofill:hover,
	&::-webkit-autofill:focus,
	&::-webkit-autofill:active {
	  -webkit-transition: "color 9999s ease-out, background-color 9999s ease-out";
	  -webkit-transition-delay: 9999s;
	}
`;

const StyledErrorMessage = styled.Text`
  font-size: ${({ theme }) => theme.fz.small};
  color: ${({ theme }) => theme.colors.text};
  width: 400px;
  margin-top: 0.25rem;
  &:before {
    content: "❌ ";
	font-size: font-size: ${({ theme }) => theme.fz.micro};
  };
`;

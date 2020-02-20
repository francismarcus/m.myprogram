// @generated: @expo/next-adapter@2.0.5
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native'

export default function App() {
  return (
    <StyledView>
      <Text style={styles.text}>Welcome to Expo + Next.js 👋</Text>
    </StyledView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
});

const StyledView = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.bg};
`

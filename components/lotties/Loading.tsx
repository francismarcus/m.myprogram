import Lottie from 'react-native-web-lottie';
import styled from 'styled-components/native';

export default () => (
    <Flexbox>
        <Lottie source={require('./hive.json')} autoPlay style={{ width: '75%'}}/>
    </Flexbox>
);

const Flexbox = styled.View`
    flex: 1;
    background-color: ${ ({ theme }) => theme.colors.white};
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
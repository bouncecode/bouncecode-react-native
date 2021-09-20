export {ThemeProvider} from 'styled-components';

import {Dimensions} from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;
const STANDARD_SIZE = 480;
const DEVICE_SIZE = WINDOW_WIDTH > WINDOW_HEIGHT ? WINDOW_HEIGHT : WINDOW_WIDTH;

const theme = {
  ratio: DEVICE_SIZE / STANDARD_SIZE,
  color: {
    dark: '#363542',
    darkGray: '#7A7A7C',
    gray: '#B4B4B4',
    gainsboro: '#E2E2E2',
    whiteSmoke: '#F4F2F2',
    mainBlue: '#1f3864',
    mainPink: '#dd8998',
    primary_bg: '#DBE2ED',
  },
};

export default theme;

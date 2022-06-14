// global.js
// Source: https://github.com/maximakymenko/react-day-night-toggle-app/blob/master/src/global.js#L23-L41

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  

  body {
    
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    
    
  }`
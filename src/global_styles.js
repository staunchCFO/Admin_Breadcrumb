import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

    *, *:before, *:after {
        box-sizing: border-box;
    }
    html, body {
        height: 100%;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: 15px;
        background: #F0F0F0;
    }
`
export const App = styled.div`
	height: 100%;
	display: flex;
	position: relative;
	main {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		overflow-y: auto;
	}
`
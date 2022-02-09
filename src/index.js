import ReactDOM from 'react-dom';
import './bootstrap.min.css';
import {GlobalStyles} from './global_styles'
import App from './App';


ReactDOM.render(
    <>
        <GlobalStyles />
        <App />
    </>,
    document.getElementById('root')
)
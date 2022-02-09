import React from "react";
import ReactDOM from "react-dom";
import './bootstrap.min.css';
import {GlobalStyles} from './global_styles'
import App from "./App";
import { Provider } from "react-redux";
import configureStore from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const store = configureStore();

const persistor = persistStore(store);

ReactDOM.render(
	<Provider store={store}>
		<PersistGate persistor={persistor}>
            <GlobalStyles />
			<App />
		</PersistGate>
	</Provider>,
	document.getElementById("root")
);
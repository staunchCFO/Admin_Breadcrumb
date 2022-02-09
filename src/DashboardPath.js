import React, { useState } from 'react'
import {Sidebar, Header, Side} from "./components"
import { Route, Switch } from 'react-router'
import { Main, Product } from "./pages/Dashboard"
import { App } from "./global_styles"

const AdminPath = () => {

	return (
		<>
			<Header />
			<App>
				<main>
					<Switch>
						<Route path="/" component={Product} />
					</Switch>
				</main>
			</App>
		</>
	)
}

export default AdminPath
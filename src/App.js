

import { 
    BrowserRouter as Router, 
    Route, 
    Switch, 
} from 'react-router-dom'
import DashboardPath from './DashboardPath'

const App = () => {

    return (
        <>
            <Router>
                <Switch>
                    <Route path='/' exact component={DashboardPath} />

                </Switch>
            </Router>
        </>
    )
}

export default App
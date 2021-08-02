import LoginPage from './pages/login'
import RegisterPage from './pages/register'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'


const App = () => {
  return (
    <div>
      <div className = 'App'>
        <Router>
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/register" component={RegisterPage} />
          </Switch>
        </Router>
      </div>
    </div>
  )
}

export default App
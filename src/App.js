// import Example from './example'
// import HomePage from './pages/home'
import LoginPage from './pages/login'
import RegisterPage from './pages/register'
// import LatihanAxios from './latihanAxios/LatihanAxios'
// import Topic from './pages/topic'


import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

// const NotFound = () => {
//   return (
//     <div className='home'>
//       <p>
//         NOT FOUND 404
//         <br />
//         return to <a href='/'>HomePage</a>
//       </p>
//     </div>
//   )
// }


// const ProtecedRoute = (Page) => {
//   let logged = localStorage.getItem('logged')
//   if (logged) return Page
//   return NotFound
// }


const App = () => {
  return (
    <div>
      <div className = 'App'>
        <Router>
          <Switch>
            <Route exact path="/" component={LoginPage} />
            {/* <Route exact path="/home" component={ProtecedRoute(HomePage)} /> */}
            <Route exact path="/register" component={RegisterPage} />
            {/* <Route path='/topic/:id' component={ProtecedRoute(Topic)} />
            <Route component={NotFound}/> */}
          {/* <HomePage />
          <LoginPage /> */}
            
          </Switch>
        </Router>
      </div>
    
      
    </div>
  )
}

export default App
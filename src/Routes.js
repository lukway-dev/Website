/* eslint-disable camelcase */
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import About_Me from './pages/About_Me'
import Portfolio from './pages/Portfolio'
// import Error_404 from './pages/Error_404'
import Website from './pages/projects/Website'
import MemoryGame from './pages/projects/MemoryGame'
import JavaScriptQuiz from './pages/projects/JavaScriptQuiz'

const Routes = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about_me' component={About_Me} />
        <Route exact path='/portfolio' component={Portfolio} />
        <Route exact path='/portfolio/website' component={Website} />
        <Route exact path='/portfolio/memory_game' component={MemoryGame} />
        <Route exact path='/portfolio/javascript_quiz' component={JavaScriptQuiz} />
        {/* <Route component={Error_404} /> */}
      </Switch>
    </Router>
  )
}

export default Routes

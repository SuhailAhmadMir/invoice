import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home'
import SendMail from './SendMail'

class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/send' component={SendMail} />
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    )
  }
}

export default App

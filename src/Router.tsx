import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { Home } from './Home'
import { About } from './About'
import { Count } from './Count'

export function Router() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/count">Count</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/count">
          <Count />
        </Route>
        <Route>
          <div>
            <h1>Page Not Found</h1>
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

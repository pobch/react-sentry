import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { BreakOnClick } from './BreakOnClick'
import { BreakOnPageLoad } from './BreakOnPageLoad'

export function Router() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Break onClick</Link>
            </li>
            <li>
              <Link to="/pageload">Break on Page Load</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route exact path="/">
          <BreakOnClick />
        </Route>
        <Route exact path="/pageload">
          <BreakOnPageLoad />
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

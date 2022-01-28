import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { ErrInsideOnClick } from './ErrInsideOnClick'
import { ErrInsidePromise } from './ErrInsidePromise'
import { ErrInsideRender } from './ErrInsideRender'
import { RealWorld } from './RealWorld'

export function Router() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Error inside onClick</Link>
            </li>
            <li>
              <Link to="/error-render">Error inside render()</Link>
            </li>
            <li>
              <Link to="/error-promise">Error inside Promise</Link>
            </li>
            <li>
              <Link to="/real-world">Real-world Error Handling</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route exact path="/">
          <ErrInsideOnClick />
        </Route>
        <Route exact path="/error-render">
          <ErrInsideRender />
        </Route>
        <Route exact path="/error-promise">
          <ErrInsidePromise />
        </Route>
        <Route exact path="/real-world">
          <RealWorld />
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

import {
  Route,
  NavLink,
  Switch,
  Redirect,
} from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ROUTES } from './const';


const HomePage = lazy(() =>
  import('./Views/HomePage.js' /*webpackChunkName: "HomePage" */),
);
const CatalogPage = lazy(() =>
  import('./Views/CatalogPage.js' /*webpackChunkName: "CatalogPage" */),
);



function App() {
  return <div >
     <header >
        <nav>
          <NavLink
            exact
            to={ROUTES.HOME}
          >
            Home
          </NavLink>
          <NavLink
            to={ROUTES.CATALOG}
          >
            Catalog
          </NavLink>
        </nav>
      </header>
      <Suspense fallback={<h1>LOADING...</h1>}>
        <Switch>
          <Route path={ROUTES.HOME} exact component={HomePage} />
          <Route path={ROUTES.CATALOG} exact component={CatalogPage} />
          <Redirect to={ROUTES.HOME} />
        </Switch>
      </Suspense>
  </div>;
}

export default App;

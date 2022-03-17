import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ROUTES } from './const';
import { Header } from './Component/Sections/Header';


const HomePage = lazy(() =>
  import('./Views/HomePage.js' /*webpackChunkName: "HomePage" */),
);
const CatalogPage = lazy(() =>
  import('./Views/CatalogPage.js' /*webpackChunkName: "CatalogPage" */),
);



function App() {
  return <div >
    <Header />
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

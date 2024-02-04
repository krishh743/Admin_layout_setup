import { Suspense, lazy, useEffect, useState } from 'react';
// import SignIn from './pages/Authentication/SignIn';
// import SignUp from './pages/Authentication/SignUp';
import routes from './routes';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Loader from './components/loader/Loader';
import LoginPage from './pages/auth/Login';
const DefaultLayout = lazy(() => import('./layout/DefaultLayout'));

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (  
    <Loader />
  ) : (
    <>
        <ToastContainer />
        <HashRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            {/* <Route path="/" element={<SignUp />} /> */}
            <Route element={<DefaultLayout />}>
              {/* <Route path={'/*'} element={<PageNotFound />} /> */}
              
              {routes.map(({ path, component: Component }) => (
                <Route
                  key={path}
                  path={path}
                  element={
                    // <PrivateWrapper>
                      <Suspense fallback={<Loader />}>
                        <Component />
                      </Suspense>
                    // </PrivateWrapper>
                  }
                />
              ))}
            </Route>
          </Routes>
        </HashRouter>
    </>
  );
}

export default App;

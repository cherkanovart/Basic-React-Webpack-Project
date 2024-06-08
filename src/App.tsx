import { Row } from 'antd';
import { Footer, Header } from 'antd/es/layout/layout';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';

import NotFound from './Pages/Search/NotFound/NotFound';
import Search from './Pages/Search/Search';
import Navbar from './components/Navbar';
import { HP_TO_REDIRECT } from './shared/constants';
import { NotFoundPage, Pages } from './shared/types';
import styles from './styles.module.scss';

const App = () => {
  return (
    <>
      <Header className={styles.header} />
      <div className={styles.container}>
        <BrowserRouter>
          <Row>
            <Navbar />
            <Routes>
              <Route path="*" element={<Navigate to={NotFoundPage} replace={true} />} />
              <Route
                path={HP_TO_REDIRECT}
                element={<Navigate to={`/${Pages.margarita}`} replace={true} />}
              ></Route>
              {Object.values(Pages).map((page) => {
                return <Route key={page} path={`/${page}`} element={<Search />} />;
              })}
              <Route path={NotFoundPage} element={<NotFound />} />
            </Routes>
          </Row>
        </BrowserRouter>
      </div>
      <Footer className={styles.footer} />
    </>
  );
};

export default App;

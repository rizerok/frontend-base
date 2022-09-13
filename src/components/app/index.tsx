import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, BrowserRouterProps } from 'react-router-dom';
import Helmet from 'react-helmet';
import { renderRoutes } from 'react-router-config';
import store from 'store';

import StyleReset from 'styles/style-reset';
import StyleGlobal from 'styles/style-global';
import WorkLayout from 'utils/work-layout';

import favicon from 'img/favicon.png';

import routes from '../../routes';

const routerProps: BrowserRouterProps = {};
if (ROUTER_BASE) {
  routerProps.basename = ROUTER_BASE;
}

const App: React.FC = () => (
  <Provider store={store}>
    <BrowserRouter {...routerProps}>
      <Helmet
        defaultTitle="React + Redux + Typescript + Styled components"
        titleTemplate="%s – React + Redux + Typescript + Styled components"
        link={[{ rel: 'icon', type: 'image/icon', href: favicon }]}
      />
      <StyleReset/>
      <StyleGlobal/>
      {WORK_LAYOUT && <WorkLayout/>}
      {renderRoutes(routes)}
    </BrowserRouter>
  </Provider>
);

export default App;

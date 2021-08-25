import React from 'react';
import Helmet from 'react-helmet';
import LayoutRoot from 'components/layout/root';

const PageNotFound: React.FC = () => (
  <LayoutRoot>
    <Helmet title="Not found"/>
    <h1>404 : Not Found</h1>
  </LayoutRoot>
);

export default PageNotFound;

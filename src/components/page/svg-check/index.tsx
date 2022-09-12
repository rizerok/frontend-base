import React from 'react';
import styled from 'styled-components';
import LayoutRoot from 'components/layout/root';
import WebpackSvg from './webpack.svg';

const DarkBg = styled.div`
  background: #323232;
  padding: 40px;
`;

const PageSvgCheck: React.FC = () => (
  <LayoutRoot>
    <DarkBg>
      <WebpackSvg style={{
        width: '300px',
        height: '300px'
      }}/>
    </DarkBg>
  </LayoutRoot>
);

export default PageSvgCheck;

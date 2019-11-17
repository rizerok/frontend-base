import React from 'react';
import styled from 'styled-components';
import { ReactComponent as WebpackSvg } from './webpack.svg';

const DarkBg = styled.div`
  background: #323232;
  padding: 40px;
`;

const PageSvgCheck: React.FC = () => (
  <div>
    <DarkBg>
      <WebpackSvg style={{
        width: '300px',
        height: '300px'
      }}/>
    </DarkBg>
  </div>
);

export default PageSvgCheck;

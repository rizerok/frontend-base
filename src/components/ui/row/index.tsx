import React from 'react';
import styled from 'styled-components';

interface UiRowProps {
  indent: string;
}

const UiRow = styled.div<UiRowProps>`
  & + & {
    margin-top: ${({indent}): string => indent};
  }
`;


export default UiRow;

import React, { useState } from 'react';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

import { Transaction } from 'types/transactions';
import UiButton from 'components/ui/button';
import useOnloadImage from './onload-image';

const Item = styled.div`
  border-radius: 14px;
  overflow: hidden;
  background: #fff;
  width: 100%;
`;

interface ImageProps {
  isLoaded?: boolean;
}

const Image = styled.img<ImageProps>`
  width: 100%;
  height: 150px;

  ${(props): string => (props.isLoaded ? 'height: auto;' : '')}
`;

const grayColor = css`color: #7a89a6;`;
const title = css`
  margin-top: 20px;
  font-weight: 900;
  font-size: 18px;
  word-wrap: break-word;
`;
const between = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

interface RowProps {
  isGray?: boolean;
  isTitle?: boolean;
  isBetween?: boolean;
}

type CssCondition = FlattenSimpleInterpolation | '';

const Row = styled.div<RowProps>`
  line-height: 1.2em;
  
  & + & {
    margin-top: 15px;
  }
  
  ${({ isGray }): CssCondition => (isGray ? grayColor : '')}
  ${({ isTitle }): CssCondition => (isTitle ? title : '')}
  ${({ isBetween }): CssCondition => (isBetween ? between : '')}
`;

const MenuButton = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  box-shadow: 0 0 15px -6px rgba(0, 0, 0, .35);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;

  &:before {
    content: '...';
    font-family: serif;
    font-size: 30px;
    height: 5px;
    line-height: 5px;
    position: relative;
    top: -8px;
    left: -1px;
  }
`;

const TextContext = styled.div`
  padding: 30px;
`;

const TransactionListItem: React.FC<Transaction> = ({ dApp, timestamp }: Transaction) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const measuredRef = useOnloadImage(setImageLoaded);
  return (
    <Item>
      <div>
        <Image
          src="https://picsum.photos/410/200"
          alt={dApp}
          ref={measuredRef}
          isLoaded={imageLoaded}
        />
      </div>
      <TextContext>
        <Row isGray>Service • Voting</Row>
        <Row isTitle>{dApp}</Row>
        <Row isGray>by Author</Row>
        <Row>{timestamp}</Row>
        <Row isBetween>
          <UiButton>vote</UiButton>
          <MenuButton></MenuButton>
        </Row>
        <Row isGray>3 participants</Row>
      </TextContext>
    </Item>
  );
};

export default TransactionListItem;

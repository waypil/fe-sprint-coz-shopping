import React from 'react';
import styled from 'styled-components';

import PreviewSection from './PreviewSection';
import cards from '../data/dummyData.js';

const MainContainer = styled.main`
  width: 100%;
  height: 88%;

  // overflow-y: scroll;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default function Main(props) {
  return (
    <MainContainer>
      <PreviewSection text={'상품 리스트'} cards={cards}></PreviewSection>
      <PreviewSection text={'북마크 리스트'} cards={cards}></PreviewSection>
    </MainContainer>
  );
}

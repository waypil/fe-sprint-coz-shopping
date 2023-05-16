import React from 'react';
import styled from 'styled-components';

import PreviewSection from './PreviewSection';
import cards from '../data/dummyData.js';

const MainContainer = styled.main`
  width: 100%;
  // height: 100%;

  // overflow-y: auto;

  display: flex;
  justify-content: flex-start;
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

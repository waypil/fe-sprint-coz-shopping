import React from 'react';
import styled from 'styled-components';

import Card from './Card';

const PreviewContainer = styled.section`
  width: 90%;
  height: 100%;

  margin: 20px 0px;

  display: flex;
  align-items: left;
  flex-direction: column;
`;

const Title = styled.p`
  text-align: left;
  font-weight: 900;
  font-size: 24px;
  margin-bottom: 10px;
`;
const List = styled.section`
  display: flex;
  // justify-content: space-between;
  align-items: left;

  & > * {
    margin-right: 24px;
  }
`;

export default function PreviewSection(props) {
  return (
    <PreviewContainer>
      <Title>{props.text}</Title> {/* "상품 리스트" or "북마크 리스트" */}
      <List>
        {props.productsData.map((cardData, i) => {
          return <Card key={i} cardData={cardData}></Card>;
        })}
      </List>
    </PreviewContainer>
  );
}

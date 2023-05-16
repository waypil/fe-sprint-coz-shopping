import React from 'react';
import styled from 'styled-components';

import Card from './Card';

const PreviewContainer = styled.section`
  width: 90%;
  height: 100%;

  display: flex;
  // justify-content: space-evenly;
  align-items: left;
  flex-direction: column;
`;

const Title = styled.p`
  text-align: left;
  font-weight: 900;
  font-size: 24px;
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
  let cards = props.cards;

  if (props.text === '북마크 리스트') {
    cards = cards.filter((card) => card.isBookmarked);
  }

  return (
    <PreviewContainer>
      <Title>{props.text}</Title> {/* "상품 리스트" or "북마크 리스트" */}
      <List>
        {cards.map((card, i) => {
          return <Card key={i} card={card}></Card>;
        })}
      </List>
    </PreviewContainer>
  );
}

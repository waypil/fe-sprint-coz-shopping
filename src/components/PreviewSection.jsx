import React from 'react';
import styled from 'styled-components';

import Card from './Card';

const PreviewContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.main``;
const List = styled.main``;

export default function PreviewSection(props) {
  return (
    <PreviewContainer>
      <Title>{props.text}</Title> {/* "상품 리스트" or "북마크 리스트" */}
      <List>
        {props.cards.map((card, i) => {
          return (
            <Card
              key={i}
              imageFileName={card.imageFileName}
              isBookmarked={card.isBookmarked}
              category={card.category}
              name={card.name}
              discountRate={card.discountRate}
              price={card.price}
            ></Card>
          );
        })}
      </List>
    </PreviewContainer>
  );
}

import React from 'react';
import styled from 'styled-components';

const Todo = styled.article`
  width: 264px;
  height: 264px;
  border-radius: 5px;

  background-color: transparent;

  flex: 0 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ImageContainer = styled.section``;
const Image = styled.img``;
const BookmarkButton = styled.button``;
const InfoContainer = styled.section``;
const Name = styled.p``;
const DiscountRate = styled.p``;
const Price = styled.p``;

export default function Card({
  imageFileName,
  isBookmarked,
  category,
  name,
  discountRate,
  price,
}) {
  return (
    <Todo>
      <ImageContainer>
        <img src={require(`../data/resources/${imageFileName}`)} alt='카드 이미지'></img>
        <BookmarkButton></BookmarkButton>
      </ImageContainer>
      <InfoContainer>
        <div className='left'>
          <Name>{name}</Name>
        </div>
        <div className='right'>
          <DiscountRate>{discountRate * 100}</DiscountRate>
          <Price>{price}</Price>
        </div>
      </InfoContainer>
    </Todo>
  );
}

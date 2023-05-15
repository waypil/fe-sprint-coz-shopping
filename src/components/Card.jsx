import React from 'react';
import styled from 'styled-components';

const Todo = styled.article`
  width: 264px;
  height: 264px;

  flex: 0 0 auto;
  display: flex;
  // justify-content: space-between;
  align-items: center;
  flex-direction: column;

  & * {
    font-weight: 900;
    font-size: 16px;
    overflow: hidden;
  }
`;

const ImageContainer = styled.section`
  position: relative;

  & > img {
    border-radius: 12px;
  }
`;

const BookmarkButton = styled.button`
  position: absolute;
`;

const InfoContainer = styled.section`
  width: 100%;
  // height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    height: 100%;
  }
  .right * {
    text-align: end;
  }
`;

const Name = styled.p``;
const DiscountRate = styled.p`
  color: #452cdd;
`;
const Price = styled.p`
  font-weight: normal;
`;

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
          <DiscountRate>{`${discountRate * 100}%`}</DiscountRate>
          <Price>{`${price.toLocaleString()}원`}</Price>
        </div>
      </InfoContainer>
    </Todo>
  );
}

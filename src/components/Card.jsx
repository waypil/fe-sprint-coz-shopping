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
    text-align: start;
  }
  .right * {
    text-align: end;
  }
`;

const Name = styled.p``;
const Subtitle = styled.p`
  font-weight: normal;
`;
const DiscountRate = styled.p`
  color: #452cdd;
`;

export default function Card(props) {
  const {
    imageFileName,
    isBookmarked,
    category,
    name,
    subtitle,
    discountRate,
    price,
    subscriber,
  } = props.card;

  let rightFragment;
  if (category === '브랜드') {
    rightFragment = (
      <>
        <p>관심고객수</p>
        <Subtitle>{subscriber.toLocaleString()}</Subtitle>
      </>
    );
  } else {
    const discountRateStr = !discountRate ? '' : `${discountRate * 100}%`;
    const priceStr = !price ? '' : `${price.toLocaleString()}원`;
    rightFragment = (
      <>
        <DiscountRate>{discountRateStr}</DiscountRate>
        <Subtitle>{priceStr}</Subtitle>
      </>
    );
  }

  return (
    <Todo>
      <ImageContainer>
        <img src={require(`../data/resources/${imageFileName}`)} alt='카드 이미지'></img>
        <BookmarkButton></BookmarkButton>
      </ImageContainer>
      <InfoContainer>
        <div className='left'>
          <Name>{name}</Name>
          <Subtitle>{subtitle}</Subtitle>
        </div>
        <div className='right'>{rightFragment}</div>
      </InfoContainer>
    </Todo>
  );
}

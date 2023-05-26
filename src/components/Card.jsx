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
    width: 264px;
    height: 210px;

    object-fit: cover; // 사진을 변형하지 않고 원본에서 가운데 영역만 출력

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
const P = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const Name = styled(P)``;
const Subtitle = styled(P)`
  font-weight: normal;
`;
const DiscountRate = styled.p`
  color: #452cdd;
`;

export default function Card(props) {
  const {
    id,
    type, // Product, Exhibition, Category, Brand
    title,
    sub_title, // Exhibition만 존재
    brand_name, // Brand만 존재
    price, // Product만 존재
    discountPercentage, // Product만 존재
    image_url, // Product, Exhibition, Category 존재
    brand_image_url, // Brand만 존재
    follower, // Brand만 존재
  } = props.cardData;

  console.log(props.cardData);

  let rightFragment;
  if (type === 'Brand') {
    rightFragment = (
      <>
        <p>관심고객수</p>
        <Subtitle>{follower.toLocaleString()}</Subtitle>
      </>
    );
  } else {
    const discountRateStr = !discountPercentage ? '' : `${discountPercentage}%`;
    const priceStr = !price ? '' : `${Number(price).toLocaleString()}원`;
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
        <img src={image_url || brand_image_url} alt='카드 이미지'></img>
        <BookmarkButton></BookmarkButton>
      </ImageContainer>
      <InfoContainer>
        <div className='left'>
          <Name>{title || brand_name}</Name>
          <Subtitle>{sub_title}</Subtitle>
        </div>
        <div className='right'>{rightFragment}</div>
      </InfoContainer>
    </Todo>
  );
}

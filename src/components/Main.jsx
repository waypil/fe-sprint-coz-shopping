import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

import PreviewSection from './PreviewSection';
// import cards from '../data/dummyData.js';

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
  const [productsData, setProductsData] = React.useState([]);

  async function getProductsData() {
    try {
      const response = await axios.get(
        `http://cozshopping.codestates-seb.link/api/v1/products?count=10`
      );
      setProductsData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    getProductsData();
  }, []);

  return (
    <MainContainer>
      <PreviewSection text={'상품 리스트'} productsData={productsData}></PreviewSection>
      <PreviewSection text={'북마크 리스트'} productsData={productsData}></PreviewSection>
    </MainContainer>
  );
}

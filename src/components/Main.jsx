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

const LNB = styled.ul``;

export default function Main(props) {
  const [productsData, setProductsData] = React.useState([]);

  async function getProductsData() {
    try {
      const response = await axios.get(
        `http://cozshopping.codestates-seb.link/api/v1/products?count=4`
      );
      setProductsData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  let mainFragment;
  if (!props.path || props.path === '/') {
    mainFragment = (
      <>
        <PreviewSection text={'상품 리스트'} productsData={productsData}></PreviewSection>
        <PreviewSection
          text={'북마크 리스트'}
          productsData={productsData}
        ></PreviewSection>
      </>
    );
  } else if (props.path === '/products/list') {
    mainFragment = (
      <>
        <LNB></LNB>
        <PreviewSection productsData={productsData}></PreviewSection>
      </>
    );
  } else if (props.path === '/bookmark') {
  }

  React.useEffect(() => {
    getProductsData();
  }, []);

  return <MainContainer>{mainFragment}</MainContainer>;
}

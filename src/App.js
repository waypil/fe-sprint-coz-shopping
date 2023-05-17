import React from 'react';
import styled from 'styled-components';

import './App.css';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import logo from './logo.svg';

const MainAndFooter = styled.div`
  width: 100%;
  height: 100%;

  overflow-x: hidden;
  overflow-y: auto;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  & > div.padding {
    width: 100%;
    height: 100%;
    flex-grow: 1;
  }
`;

function App() {
  return (
    <div className="App">
      <Header></Header>
      <MainAndFooter>
        <Main></Main>
        <div className='padding'></div>
        <Footer></Footer>
      </MainAndFooter>
    </div>
  );
}

export default App;

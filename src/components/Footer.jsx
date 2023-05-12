import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100%;
  height: 80px;

  color: gray;
  box-shadow: 0px -3px 5px rgba(0, 0, 0, 0.25);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & * {
    margin: 0;
  }
`;

export default function Footer(props) {
  return (
    <FooterContainer>
      <p>개인정보 처리방침 | 이용 약관</p>
      <p>All rights reserved @ Codestates & Waypil</p>
    </FooterContainer>
  );
}

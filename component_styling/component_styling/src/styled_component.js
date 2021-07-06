import React from 'react';
import styled, {css} from 'styled-components';

const sizes = {
    desktop: 1024,
    tablet: 768,
};

const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css `
        @media (max-width: ${sizes[label] / 16}em) {
          $(css(...args));
        }
    `;
    return acc;
}, {});

const Box = styled.div `
  //props로 넣은 값을 직접 전달 할 수 있다
  background: ${props => props.color || 'blue'};
  padding: 1rem;
  display: flex;
  width: 1024px;
  margin: 0 auto;
  ${media.desktop`width: 768px;`};
  ${media.tablet`width: 100%;`};
`;

const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;
  
  //&를 사용해 sass처럼 자기 자신 선택 가능
  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }
  
  //inverted값이 참일때 특정 스타일을 부여한다
  ${(props) =>
      props.inverted && 
      css `
        background: none;
        border: 2px solid white;
        color: white;
        &:hover {
          background: white;
          color: black;
        }
      `
  };
  & + button {
    margin-left: 1rem;
  }
`;

const StyledComponent = () => (
    <Box color={"black"}>
        <Button>Hello</Button>
        <Button inverted={false}>테두리만</Button>
    </Box>
);

export default StyledComponent;

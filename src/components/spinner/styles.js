import styled, { keyframes } from 'styled-components';

const Spinner1 = keyframes`
  0% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
  }
`;

const Spinner2 = keyframes`
  0% {
    transform: translate(0, 0);
  }

 100% {
    transform: translate(24px, 0);
  }
`;

const Spinner3 = keyframes`
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(0);
  }
`;

export const Spinner = styled.div`
  display: inline-block;
  position: absolute;
  width: 80px;
  height: 12px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  div {
    position: absolute;
    top: 0px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: ${(props) => props.theme.colors.primary};
    animation-timing-function: cubic-bezier(0, 1, 1, 0);

    &:nth-child(1) {
      left: 8px;
      animation-name: ${Spinner1};
      animation-duration: 0.6s;
      animation-iteration-count: infinite;
    }

    &:nth-child(2) {
      left: 8px;
      animation-name: ${Spinner2};
      animation-duration: 0.6s;
      animation-iteration-count: infinite;
    }

    &:nth-child(3) {
      left: 32px;
      animation-name: ${Spinner2};
      animation-duration: 0.6s;
      animation-iteration-count: infinite;
    }

    &:nth-child(4) {
      left: 56px;
      animation-name: ${Spinner3};
      animation-duration: 0.6s;
      animation-iteration-count: infinite;
    }
  }
`;

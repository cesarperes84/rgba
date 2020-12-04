import styled from 'styled-components';

const StyledApp = styled.div`
  background: ${({ bgColor }) => (bgColor && bgColor)};
  height: 100vh;
  transition: 0.2s;

  .title {
    display: block;
    margin: 0;
    padding: 70px 0;
    text-transform: uppercase;
  }

  .wrapper-app {
    margin: 0 auto;
    width: 50%;
  }
`;

export default StyledApp;

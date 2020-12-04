import styled from 'styled-components';

const StyledRange = styled.div`
  label {
    font-weight: bold;
  }

  input[type=range] {
    writing-mode: bt-lr; /* IE */
    -webkit-appearance: slider-vertical; /* WebKit */
    width: 8px;
    height: 175px;
    padding: 0 5px;
  } 
`;

export default StyledRange;

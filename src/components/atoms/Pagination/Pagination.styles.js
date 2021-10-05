import styled from 'styled-components';

const Wrapper = styled.div`
  & ul {
    display: flex;
    padding: 0;
    margin: 0;
  }
  & li {
    list-style: none;
    padding: 10px;
  }
`;

export default Wrapper;

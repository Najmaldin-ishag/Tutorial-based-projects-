import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

const H1 = styled.h1`
  color: red;
`;

const StyledApp = styled.div`
  padding: 2rem;
`;

const App = () => {
  return (
    <>
      <GlobalStyles />
      <H1>App</H1>
    </>
  );
};

export default App;

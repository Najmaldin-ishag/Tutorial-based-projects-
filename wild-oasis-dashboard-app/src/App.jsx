import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Heading from "./ui/Heading";
import Button from "./ui/Button";

const StyledApp = styled.div`
  padding: 2rem;
`;

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Heading as="h6">App</Heading>
      <Button variation="primary" size="small">
        Click Me
      </Button>
    </>
  );
};

export default App;

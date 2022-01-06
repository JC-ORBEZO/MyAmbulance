import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import {Container} from "react-bootstrap";

function App() {
  return (
    <Container>
      <Header/>
      <Main/>
      <Footer/>
    </Container>
  );
}

export default App;

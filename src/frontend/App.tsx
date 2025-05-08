import { JSX } from "react";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";

function App(): JSX.Element {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <h1>Welcome to Mern.Shop</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;

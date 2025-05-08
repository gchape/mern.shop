import { Row, Col } from "react-bootstrap";
import products, { TProduct } from "../../assets/products.ts";
import Product from "../components/Product.tsx";

function HomeScreen() {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product: TProduct) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default HomeScreen;

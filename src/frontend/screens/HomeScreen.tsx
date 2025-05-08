import { Row, Col } from "react-bootstrap";
import Product from "../components/Product.tsx";
import { useEffect, useState } from "react";

function HomeScreen() {
  const [products, setProducts] = useState<ProductInfo[] | null>(null);

  useEffect(() => {
    (async () => {
      const products = await fetch("/api/products")
        .then((resp) => resp.json() as Promise<ProductInfo[]>)
        .catch(() => null);

      if (products) {
        setProducts(() => products);
      }
    })();
  }, []);

  return (
    products && (
      <>
        <h1>Latest Products</h1>
        <Row>
          {products.map((product: ProductInfo) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      </>
    )
  );
}

export default HomeScreen;

import { Row, Col } from "react-bootstrap";
import { useGetProductsQuery } from "../slices/productSlice";
import Product from "../components/Product";
import { SerializedError } from "@reduxjs/toolkit";

const HomeScreen = () => {
  const { data: products, isLoading, error } = useGetProductsQuery(undefined);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>
          {(() => {
            if ("data" in error) {
              const errData = error.data as { message?: string };
              
              return errData?.message || "Unexpected error with data.";
            } else if ("error" in error) {
              return error.error;
            } else if ("message" in error) {
              return (
                (error as SerializedError).message || "Unknown error occurred."
              );
            } else {
              return "An unknown error occurred.";
            }
          })()}
        </div>
      ) : (
        <>
          <h1>Latest Products</h1>
          <Row>
            {products.map((product: ProductDetails) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
};

export default HomeScreen;

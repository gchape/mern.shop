import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./frontend/App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomeScreen from "./frontend/screens/HomeScreen";
import ProductScreen from "./frontend/screens/ProductScreen";
import { Provider } from "react-redux";
import store from "./frontend/store";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<HomeScreen />} />
      <Route path="/product/:id" element={<ProductScreen />} />
    </Route>
  )
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);

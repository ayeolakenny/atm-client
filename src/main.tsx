import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Login } from "./pages/Login.tsx";
import { Action } from "./pages/Action.tsx";
import { Amount } from "./pages/Amount.tsx";
import { Others } from "./pages/Others.tsx";
import { Denomination } from "./pages/Denomination.tsx";
import { Thankyou } from "./pages/Thankyou.tsx";
import { store } from "./app/data/store.ts";
import { Provider } from "react-redux";
import { PrivateRoute } from "./components/PrivateRoute.tsx";
import { Balance } from "./pages/Balance.tsx";
import { Transfer } from "./pages/Transfer.tsx";
import { ConfirmTransfer } from "./pages/ConfirmTransfer.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="" element={<PrivateRoute />}>
        <Route path="/action" element={<Action />} />
        <Route path="/amount" element={<Amount />} />
        <Route path="/others" element={<Others />} />
        <Route path="/denomination" element={<Denomination />} />
        <Route path="/balance" element={<Balance />} />
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/confirm" element={<ConfirmTransfer />} />
      </Route>
      <Route path="/thankyou" element={<Thankyou />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);

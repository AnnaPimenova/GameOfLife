import React from "react";
import { Provider } from "react-redux";
import { GamePage } from "@/pages";
import { store } from "./store";

import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <GamePage />
    </Provider>
  );
};

export { App };

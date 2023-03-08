
import { render, screen } from '@testing-library/react';
import App from './App';
import {Provider} from "react-redux";
import {store} from "./services/store/store";
import React from "react";

test('renders learn react link', () => {
  render(
      <Provider store={store}>
        <App />
      </Provider>
  );
    expect(screen.getByText("FB-Map")).toBeVisible();
    expect(screen.getByPlaceholderText("Поиск")).toBeVisible();
});

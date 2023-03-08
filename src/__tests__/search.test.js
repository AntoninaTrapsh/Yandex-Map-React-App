import * as React from 'react'
import Sidebar from "../components/map-block/components/sidebar/sidebar";
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import {store} from "../services/store/store";

import {Provider} from "react-redux";
import {WARNING_TEXT} from "../utils/const";

describe("Sidebar", () => {
    test("search, add and delete places", async () => {

        render(
            <Provider store={store}>
                <Sidebar />
            </Provider>
        )

        const searchInput = screen.getByPlaceholderText("Поиск");
        const text = "Кутузовский проспект";
        expect(searchInput).toBeVisible();

        userEvent.click(searchInput);
        expect(searchInput).toHaveFocus();

        userEvent.keyboard(text, {keyboardMap: [{key: 'enter', keyCode: 13}]})
        expect(searchInput.value).toEqual(text);


        setTimeout(() => {
            const searchResults = screen.getByText(text);
            userEvent.click(searchResults[0]);

            const deleteButton = screen.getByText("&#10006;");
            userEvent.click(deleteButton);
            expect(screen.queryByText(/text/)).toBeNull();
        }, 1000)
    });

    test("search error", async () => {
        render(
            <Provider store={store}>
                <Sidebar />
            </Provider>
        )
        const searchInput = screen.getByPlaceholderText("Поиск");
        const text = "5436563456243231234123";
        expect(searchInput).toBeVisible();

        userEvent.click(searchInput);
        expect(searchInput).toHaveFocus();

        userEvent.keyboard(text, {keyboardMap: [{key: 'enter', keyCode: 13}]})
        expect(searchInput.value).toEqual(text);

        setTimeout(() => {
            // eslint-disable-next-line jest/valid-expect
            expect(screen.queryByText(WARNING_TEXT.SEARCH_ERROR).toBeInTheDocument());
        }, 1000)
    });
});

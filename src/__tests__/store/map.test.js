import {routeList} from "../../stabs/test-data";
import reducer, {
    changeRoutePositionFromList, deleteRoute,
    hidePolyline,
    initialState
} from "../../services/store/slices/map";

describe("map slice", () => {

    it("delete route", () => {
        const routeListWithIds = routeList.map((route, index) => {
            return {...route, id: index};
        })
        const prevState = {...initialState, routes: routeListWithIds};
        const action = {
                payload: 1,
            };
        const newRoutesList = prevState.routes;
        newRoutesList.splice(1, 1);
        expect(reducer(prevState, deleteRoute(action.payload))).toEqual({
            ...prevState,
            routes: newRoutesList,
        })
    });

    it("change route position", () => {
        const routeListWithIds = routeList.map((route, index) => {
            return {...route, id: index};
        })
        const prevState = {...initialState, routes: routeListWithIds};
        const action = {
            payload: {
                toIndex: 2,
                fromIndex: 0,
            }
        };
        const newRouteList = [routeListWithIds[1], routeListWithIds[2], routeListWithIds[0]];
        expect(reducer(prevState, changeRoutePositionFromList(action.payload))).toEqual({
            ...initialState,
            routes: newRouteList,
        })
    });

    it("hidePolyline", () => {
        const prevState = {...initialState};
        expect(reducer(prevState, hidePolyline())).toEqual({
            ...initialState,
            isPolylineVisible: false,
        })
    });


});

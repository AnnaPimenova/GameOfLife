import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import { gameSlice, gameSaga } from "./modules/GameOfLife";
import { statisticsSaga, statisticsSlice } from "./modules/Statistics";

const reducer = combineReducers({
  game: gameSlice.reducer,
  statistics: statisticsSlice.reducer,
});

const sagaMiddleware = createSagaMiddleware();

export type RootState = ReturnType<typeof reducer>;

export const store = configureStore({ reducer, middleware: [sagaMiddleware] });

sagaMiddleware.run(statisticsSaga);
sagaMiddleware.run(gameSaga);

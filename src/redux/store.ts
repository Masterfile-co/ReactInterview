import {
  configureStore,
  combineReducers,
  ThunkAction,
  Action,
} from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const combinedReducer = combineReducers(
  {
    //the name you put here is the name actual attribute
    //name that will show on the store
  }
);

export const makeStore = () =>
  configureStore({
    reducer: combinedReducer,
  });

// export const makeStore = () => store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppStore = ReturnType<
  typeof makeStore
>;
export type AppDispatch = ReturnType<
  typeof makeStore
>["dispatch"];
export const useAppDispatch = () =>
  useDispatch<AppDispatch>();
export type RootState = ReturnType<
  AppStore["getState"]
>;
export type TAppThunk<
  ReturnType = void
> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>;

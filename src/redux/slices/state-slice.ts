import {
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";

export interface State {
  /**
   * state types
   */
  loading: boolean;
  error?: string;
}

export const defaultState = {
  /**
   * add states here
   */
  loading: false,
  error: "",
};

export const stateSlice = createSlice({
  name: "states",
  initialState: defaultState,
  reducers: {
    /** add your reducers */
  },
});

export const useSelector_STATES =
  (state: { states: State }): State =>
    state.states;

/**
 * export reducers actions
 */
export const {} = stateSlice.actions;
export const states =
  stateSlice.reducer;

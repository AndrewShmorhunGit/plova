import { RootState, setupStore } from "../../store";

export const mockStore = (initialState: RootState) => {
  const dispatch = jest.fn();
  const store = setupStore();
  return {
    dispatch,
    getState: store.getState,
    subscribe: store.subscribe,
    replaceReducer: store.replaceReducer,

    // Any other methods or properties needed for your tests
  };
};

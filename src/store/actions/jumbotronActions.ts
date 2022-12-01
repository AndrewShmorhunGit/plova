import { IJumbotron } from "../../modules/modules";
import { jumbotron } from "../../units/data";
import { AppDispatch } from "../index";
// import axios from "../../axios";
import { jumbotronSlice } from "../slices/jumbotronSlice";

const mockFetchJumbotronRequest = () => {
  const jumbotronData: IJumbotron[] = jumbotron;

  return jumbotronData;
};

export const fetchJumbotron = () => {
  return (dispatch: AppDispatch) => {
    try {
      dispatch(jumbotronSlice.actions.fetching());
      const response = mockFetchJumbotronRequest();
      dispatch(jumbotronSlice.actions.fetchSuccess(response));
    } catch (error) {
      dispatch(jumbotronSlice.actions.fetchError(error as Error));
    }
  };
};

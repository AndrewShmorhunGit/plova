import { IJumbotron } from "../../modules/modules";
import { jumbotron } from "../../units/data";
import { wait } from "../../units/functions";
import { AppDispatch } from "../index";
// import axios from "../../axios";
import { jumbotronSlice } from "../slices/jumbotronSlice";

const mockFetchJumbotronRequest = () => {
  const jumbotronData: IJumbotron[] = jumbotron;

  return jumbotronData;
};

export const fetchJumbotron = () => {
  return (dispatch: AppDispatch) => {
    dispatch(jumbotronSlice.actions.fetching());

    wait(mockFetchJumbotronRequest, 2000)
      .then(function (value) {
        dispatch(jumbotronSlice.actions.fetchSuccess(value));
      })
      .catch((error) =>
        dispatch(jumbotronSlice.actions.fetchError(error as Error))
      );
  };
};

// export const fetchJumbotron = () => {
//   return async (dispatch: AppDispatch) => {
//     try {
//       dispatch(jumbotronSlice.actions.fetching());
//       const response = await wait(mockFetchJumbotronRequest, 2000);
//       dispatch(jumbotronSlice.actions.fetchSuccess(response));
//     } catch (error) {
//       dispatch(jumbotronSlice.actions.fetchError(error as Error));
//     }
//   };
// };

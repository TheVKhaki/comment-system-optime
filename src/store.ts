import { configureStore } from "@reduxjs/toolkit";
import listComment from "./features/listComment";

export const store = configureStore({
  reducer: {
    listComments: listComment,
  },
});

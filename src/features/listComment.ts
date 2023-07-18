import { commentType } from "./../type/listComments";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Data } from "../data/Data";

type initialStateComments = {
  comments: commentType[];
  pageSize: number;
  hasMore: boolean;
};

const initialState: initialStateComments = {
  comments: [],
  pageSize: 10,
  hasMore: true,
};
export const getComments = createAsyncThunk("comment", async () => {
  const resp = await axios.get<initialStateComments>(
    "http://127.0.0.1:5173/data"
  );
  return resp.data;
});
const listCommentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    addReply: (state, action) => {
      const reply = state.comments.findIndex(
        (comment) => comment.id === action.payload.commentId
      );
      state.comments[reply] = {
        ...state.comments[reply],
        reply: [
          ...state.comments[reply].reply,
          {
            description: action.payload.inputText as string,
            userName: "you",
            date: new Date().toJSON().slice(0, 10),
          },
        ],
      };
    },
    pagination: (state) => {
      state.pageSize = state.pageSize + 10;
    },
    toggleHasMore: (state) => {
      state.hasMore = false;
    },
    deleteComment: (state, action) => {
      state.comments = state.comments.filter(
        (item) => item.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getComments.fulfilled, (state, action) => {
      state.comments = action.payload;
    });
    builder.addCase(getComments.rejected, (state, action) => {
      state.comments = Data();
    });
  },
});
export const { pagination, toggleHasMore, deleteComment, addReply } =
  listCommentSlice.actions;

export default listCommentSlice.reducer;

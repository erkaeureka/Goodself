import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Comment {
  id: string;
  text: string;
  parentId?: string;
}

type InitialState = {
  loading: Boolean;
  comments: Comment[];
  error: String;
};
const initialState: InitialState = {
  loading: false,
  comments: [],
  error: "",
};

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    updateComment: (state, action) => {},
    updateAddComment: (state, action: PayloadAction<Comment>) => {
      state.comments.push(action.payload);
    },
    updateSingleComment: (state, action) => {},
    deleteComment: (state, action) => {},
    updateMoveComment: (state, action) => {},
  },
});

const getComments = createSelector(
  [(state) => state.comment.comments],
  (comments) => comments
);

export const {
  updateAddComment,
  updateMoveComment,
  updateSingleComment,
  deleteComment,
} = commentSlice.actions;

export const commentSelectors = { getComments };
export default commentSlice.reducer;

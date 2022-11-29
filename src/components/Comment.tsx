import { createSelector } from "@reduxjs/toolkit";
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { Comment } from "../redux/commentSlice";
import Input from "./Input";
import _ from "lodash";

type Props = {
  comment: Comment;
};

const CommentView = (props: Props) => {
  const comments: Comment[] = useSelector(
    createSelector([(state) => state.comment.comments], (_comments) =>
      _.filter(_comments, { parentId: props.comment.id })
    )
  );

  return (
    <View style={styles.container}>
      <Text>{props.comment.text}</Text>
      <Input comment={props.comment} />
      {comments.map((item) => {
        return <CommentView key={item.id} comment={item} />;
      })}
    </View>
  );
};
export default CommentView;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    marginLeft: 10,
  },
});

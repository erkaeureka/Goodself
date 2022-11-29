import { createSelector } from "@reduxjs/toolkit";
import React, { useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import CommentView from "../../components/Comment";
import Input from "../../components/Input";
import { Comment } from "../../redux/commentSlice";
import _ from "lodash";

export const PostIndex = () => {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const comments: Comment[] = useSelector(
    createSelector([(state) => state.comment.comments], (_comments) =>
      _.filter(_comments, { parentId: "" })
    )
  );

  useEffect(() => {
    console.log(
      "task1 => even numbers:",
      numbers.filter((item) => item % 2 === 0)
    );
    console.log(
      "task2 => sum:",
      numbers.filter((item) => item % 2 === 1).reduce((a, b) => a + b, 0)
    );
  }, []);

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
      }}
    >
      <Text style={styles.header}>COMMENTS</Text>
      <Input />
      {comments.map((item) => {
        return <CommentView key={item.id} comment={item} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 120,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
  },
  list: {
    flex: 1,
  },
});

import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useDispatch } from "react-redux";
import { Comment, updateAddComment } from "../redux/commentSlice";
type Props = {
  comment?: Comment;
};

const Input = (props: Props) => {
  const dispatch = useDispatch();
  const [text, onChangeText] = useState("");
  const onAdd = () => {
    onChangeText("");
    dispatch(
      updateAddComment({
        text: text,
        id: Date.now().toString(),
        parentId: props?.comment?.id ?? "",
      })
    );
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={props?.comment ? "" : "Enter new comment here"}
        onChangeText={onChangeText}
        value={text}
      />
      <TouchableOpacity style={styles.btn} onPress={onAdd}>
        <Text style={styles.btnText}>Enter</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Input;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 25,
    flex: 1,
    backgroundColor: "#e2e2e2",
    borderTopWidth: 1,
  },
  btn: {
    backgroundColor: "black",
  },
  btnText: {
    height: 25,
    color: "white",
    fontSize: 12,
    marginHorizontal: 2,
  },
});

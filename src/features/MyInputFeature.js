import React, { useState } from "react";
import { TextInput } from "react-native-paper";

export const MyInputFeature = () => {
  const [text, setText] = useState("");
  return <TextInput label="Email" onChangeText={() => {}} />;
};

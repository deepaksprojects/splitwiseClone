import { StyleSheet } from "react-native";

const FlexStyle = StyleSheet.create({
  F1_2: {
    flex: 0.5,
  },
  F1: {
    flex: 1,
  },
  F2: {
    flex: 2,
  },
  AICenter: {
    alignItems: "center",
  },
  JCCenter: {
    justifyContent: "center",
  },
  JCSpaceBetween: {
    justifyContent: "space-between",
  },
});

const F1 = FlexStyle.F1;
const F05 = FlexStyle.F1_2;
const F2 = FlexStyle.F2;
const AICenter = FlexStyle.AICenter;
const JCCenter = FlexStyle.JCCenter;
const JCSpaceBetween = FlexStyle.JCSpaceBetween;

export { AICenter, F05, F2, F1, JCCenter, JCSpaceBetween };

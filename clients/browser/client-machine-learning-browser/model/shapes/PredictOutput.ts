import { _Prediction } from "./_Prediction";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PredictOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Prediction: {
      shape: _Prediction
    }
  }
};

import { _DeviceSummaryList } from "./_DeviceSummaryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListDevicesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Devices: {
      shape: _DeviceSummaryList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};

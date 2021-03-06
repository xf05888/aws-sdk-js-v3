import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ScheduledUpdateGroupAction: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AutoScalingGroupName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ScheduledActionName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ScheduledActionARN: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Time: {
      shape: {
        type: "timestamp"
      }
    },
    StartTime: {
      shape: {
        type: "timestamp"
      }
    },
    EndTime: {
      shape: {
        type: "timestamp"
      }
    },
    Recurrence: {
      shape: {
        type: "string",
        min: 1
      }
    },
    MinSize: {
      shape: {
        type: "integer"
      }
    },
    MaxSize: {
      shape: {
        type: "integer"
      }
    },
    DesiredCapacity: {
      shape: {
        type: "integer"
      }
    }
  }
};

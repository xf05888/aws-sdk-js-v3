import { GetFindingsStatisticsInput } from "../shapes/GetFindingsStatisticsInput";
import { GetFindingsStatisticsOutput } from "../shapes/GetFindingsStatisticsOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetFindingsStatistics: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetFindingsStatistics",
  http: {
    method: "POST",
    requestUri: "/detector/{detectorId}/findings/statistics"
  },
  input: {
    shape: GetFindingsStatisticsInput
  },
  output: {
    shape: GetFindingsStatisticsOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: InternalServerErrorException
    }
  ]
};

import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetAssessmentReport } from "../model/operations/GetAssessmentReport";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetAssessmentReportInput } from "../types/GetAssessmentReportInput";
import { GetAssessmentReportOutput } from "../types/GetAssessmentReportOutput";
import { InspectorResolvedConfiguration } from "../InspectorConfiguration";
export * from "../types/GetAssessmentReportInput";
export * from "../types/GetAssessmentReportOutput";
export * from "../types/GetAssessmentReportExceptionsUnion";

export class GetAssessmentReportCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetAssessmentReportInput,
      OutputTypesUnion,
      GetAssessmentReportOutput,
      InspectorResolvedConfiguration,
      Blob
    > {
  readonly model = GetAssessmentReport;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetAssessmentReportInput,
    GetAssessmentReportOutput,
    Blob
  >();

  constructor(readonly input: GetAssessmentReportInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: InspectorResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetAssessmentReportInput,
    GetAssessmentReportOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetAssessmentReportInput, GetAssessmentReportOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}

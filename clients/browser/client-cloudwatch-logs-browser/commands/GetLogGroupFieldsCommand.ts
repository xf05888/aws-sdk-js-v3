import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetLogGroupFields } from "../model/operations/GetLogGroupFields";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetLogGroupFieldsInput } from "../types/GetLogGroupFieldsInput";
import { GetLogGroupFieldsOutput } from "../types/GetLogGroupFieldsOutput";
import { CloudWatchLogsResolvedConfiguration } from "../CloudWatchLogsConfiguration";
export * from "../types/GetLogGroupFieldsInput";
export * from "../types/GetLogGroupFieldsOutput";
export * from "../types/GetLogGroupFieldsExceptionsUnion";

export class GetLogGroupFieldsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetLogGroupFieldsInput,
      OutputTypesUnion,
      GetLogGroupFieldsOutput,
      CloudWatchLogsResolvedConfiguration,
      Blob
    > {
  readonly model = GetLogGroupFields;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetLogGroupFieldsInput,
    GetLogGroupFieldsOutput,
    Blob
  >();

  constructor(readonly input: GetLogGroupFieldsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudWatchLogsResolvedConfiguration
  ): __aws_sdk_types.Handler<GetLogGroupFieldsInput, GetLogGroupFieldsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetLogGroupFieldsInput, GetLogGroupFieldsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}

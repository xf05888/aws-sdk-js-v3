import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StartLogging } from "../model/operations/StartLogging";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartLoggingInput } from "../types/StartLoggingInput";
import { StartLoggingOutput } from "../types/StartLoggingOutput";
import { CloudTrailResolvedConfiguration } from "../CloudTrailConfiguration";
export * from "../types/StartLoggingInput";
export * from "../types/StartLoggingOutput";
export * from "../types/StartLoggingExceptionsUnion";

export class StartLoggingCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartLoggingInput,
      OutputTypesUnion,
      StartLoggingOutput,
      CloudTrailResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StartLogging;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartLoggingInput,
    StartLoggingOutput,
    _stream.Readable
  >();

  constructor(readonly input: StartLoggingInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudTrailResolvedConfiguration
  ): __aws_sdk_types.Handler<StartLoggingInput, StartLoggingOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StartLoggingInput, StartLoggingOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}

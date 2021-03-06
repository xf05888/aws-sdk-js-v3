import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StartActivityStream } from "../model/operations/StartActivityStream";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartActivityStreamInput } from "../types/StartActivityStreamInput";
import { StartActivityStreamOutput } from "../types/StartActivityStreamOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/StartActivityStreamInput";
export * from "../types/StartActivityStreamOutput";
export * from "../types/StartActivityStreamExceptionsUnion";

export class StartActivityStreamCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartActivityStreamInput,
      OutputTypesUnion,
      StartActivityStreamOutput,
      RDSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StartActivityStream;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartActivityStreamInput,
    StartActivityStreamOutput,
    _stream.Readable
  >();

  constructor(readonly input: StartActivityStreamInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StartActivityStreamInput,
    StartActivityStreamOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StartActivityStreamInput, StartActivityStreamOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}

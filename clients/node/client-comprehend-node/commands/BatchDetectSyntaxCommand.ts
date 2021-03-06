import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { BatchDetectSyntax } from "../model/operations/BatchDetectSyntax";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { BatchDetectSyntaxInput } from "../types/BatchDetectSyntaxInput";
import { BatchDetectSyntaxOutput } from "../types/BatchDetectSyntaxOutput";
import { ComprehendResolvedConfiguration } from "../ComprehendConfiguration";
export * from "../types/BatchDetectSyntaxInput";
export * from "../types/BatchDetectSyntaxOutput";
export * from "../types/BatchDetectSyntaxExceptionsUnion";

export class BatchDetectSyntaxCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      BatchDetectSyntaxInput,
      OutputTypesUnion,
      BatchDetectSyntaxOutput,
      ComprehendResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = BatchDetectSyntax;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    BatchDetectSyntaxInput,
    BatchDetectSyntaxOutput,
    _stream.Readable
  >();

  constructor(readonly input: BatchDetectSyntaxInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ComprehendResolvedConfiguration
  ): __aws_sdk_types.Handler<BatchDetectSyntaxInput, BatchDetectSyntaxOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<BatchDetectSyntaxInput, BatchDetectSyntaxOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}

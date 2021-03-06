import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { PutJobFailureResult } from "../model/operations/PutJobFailureResult";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutJobFailureResultInput } from "../types/PutJobFailureResultInput";
import { PutJobFailureResultOutput } from "../types/PutJobFailureResultOutput";
import { CodePipelineResolvedConfiguration } from "../CodePipelineConfiguration";
export * from "../types/PutJobFailureResultInput";
export * from "../types/PutJobFailureResultOutput";
export * from "../types/PutJobFailureResultExceptionsUnion";

export class PutJobFailureResultCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutJobFailureResultInput,
      OutputTypesUnion,
      PutJobFailureResultOutput,
      CodePipelineResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = PutJobFailureResult;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutJobFailureResultInput,
    PutJobFailureResultOutput,
    _stream.Readable
  >();

  constructor(readonly input: PutJobFailureResultInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CodePipelineResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutJobFailureResultInput,
    PutJobFailureResultOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutJobFailureResultInput, PutJobFailureResultOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}

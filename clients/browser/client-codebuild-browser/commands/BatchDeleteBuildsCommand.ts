import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { BatchDeleteBuilds } from "../model/operations/BatchDeleteBuilds";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { BatchDeleteBuildsInput } from "../types/BatchDeleteBuildsInput";
import { BatchDeleteBuildsOutput } from "../types/BatchDeleteBuildsOutput";
import { CodeBuildResolvedConfiguration } from "../CodeBuildConfiguration";
export * from "../types/BatchDeleteBuildsInput";
export * from "../types/BatchDeleteBuildsOutput";
export * from "../types/BatchDeleteBuildsExceptionsUnion";

export class BatchDeleteBuildsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      BatchDeleteBuildsInput,
      OutputTypesUnion,
      BatchDeleteBuildsOutput,
      CodeBuildResolvedConfiguration,
      Blob
    > {
  readonly model = BatchDeleteBuilds;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    BatchDeleteBuildsInput,
    BatchDeleteBuildsOutput,
    Blob
  >();

  constructor(readonly input: BatchDeleteBuildsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CodeBuildResolvedConfiguration
  ): __aws_sdk_types.Handler<BatchDeleteBuildsInput, BatchDeleteBuildsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<BatchDeleteBuildsInput, BatchDeleteBuildsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}

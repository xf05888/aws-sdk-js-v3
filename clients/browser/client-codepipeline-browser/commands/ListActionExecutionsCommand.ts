import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListActionExecutions } from "../model/operations/ListActionExecutions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListActionExecutionsInput } from "../types/ListActionExecutionsInput";
import { ListActionExecutionsOutput } from "../types/ListActionExecutionsOutput";
import { CodePipelineResolvedConfiguration } from "../CodePipelineConfiguration";
export * from "../types/ListActionExecutionsInput";
export * from "../types/ListActionExecutionsOutput";
export * from "../types/ListActionExecutionsExceptionsUnion";

export class ListActionExecutionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListActionExecutionsInput,
      OutputTypesUnion,
      ListActionExecutionsOutput,
      CodePipelineResolvedConfiguration,
      Blob
    > {
  readonly model = ListActionExecutions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListActionExecutionsInput,
    ListActionExecutionsOutput,
    Blob
  >();

  constructor(readonly input: ListActionExecutionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CodePipelineResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListActionExecutionsInput,
    ListActionExecutionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListActionExecutionsInput, ListActionExecutionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}

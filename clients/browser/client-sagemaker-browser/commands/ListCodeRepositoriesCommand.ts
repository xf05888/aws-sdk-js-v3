import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListCodeRepositories } from "../model/operations/ListCodeRepositories";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListCodeRepositoriesInput } from "../types/ListCodeRepositoriesInput";
import { ListCodeRepositoriesOutput } from "../types/ListCodeRepositoriesOutput";
import { SageMakerResolvedConfiguration } from "../SageMakerConfiguration";
export * from "../types/ListCodeRepositoriesInput";
export * from "../types/ListCodeRepositoriesOutput";
export * from "../types/ListCodeRepositoriesExceptionsUnion";

export class ListCodeRepositoriesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListCodeRepositoriesInput,
      OutputTypesUnion,
      ListCodeRepositoriesOutput,
      SageMakerResolvedConfiguration,
      Blob
    > {
  readonly model = ListCodeRepositories;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListCodeRepositoriesInput,
    ListCodeRepositoriesOutput,
    Blob
  >();

  constructor(readonly input: ListCodeRepositoriesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SageMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListCodeRepositoriesInput,
    ListCodeRepositoriesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListCodeRepositoriesInput, ListCodeRepositoriesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}

import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateFlowSource } from "../model/operations/UpdateFlowSource";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateFlowSourceInput } from "../types/UpdateFlowSourceInput";
import { UpdateFlowSourceOutput } from "../types/UpdateFlowSourceOutput";
import { MediaConnectResolvedConfiguration } from "../MediaConnectConfiguration";
export * from "../types/UpdateFlowSourceInput";
export * from "../types/UpdateFlowSourceOutput";
export * from "../types/UpdateFlowSourceExceptionsUnion";

export class UpdateFlowSourceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateFlowSourceInput,
      OutputTypesUnion,
      UpdateFlowSourceOutput,
      MediaConnectResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateFlowSource;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateFlowSourceInput,
    UpdateFlowSourceOutput,
    Blob
  >();

  constructor(readonly input: UpdateFlowSourceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: MediaConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateFlowSourceInput, UpdateFlowSourceOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateFlowSourceInput, UpdateFlowSourceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}

import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateLifecyclePolicy } from "../model/operations/CreateLifecyclePolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateLifecyclePolicyInput } from "../types/CreateLifecyclePolicyInput";
import { CreateLifecyclePolicyOutput } from "../types/CreateLifecyclePolicyOutput";
import { DLMResolvedConfiguration } from "../DLMConfiguration";
export * from "../types/CreateLifecyclePolicyInput";
export * from "../types/CreateLifecyclePolicyOutput";
export * from "../types/CreateLifecyclePolicyExceptionsUnion";

export class CreateLifecyclePolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateLifecyclePolicyInput,
      OutputTypesUnion,
      CreateLifecyclePolicyOutput,
      DLMResolvedConfiguration,
      Blob
    > {
  readonly model = CreateLifecyclePolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateLifecyclePolicyInput,
    CreateLifecyclePolicyOutput,
    Blob
  >();

  constructor(readonly input: CreateLifecyclePolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DLMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateLifecyclePolicyInput,
    CreateLifecyclePolicyOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateLifecyclePolicyInput, CreateLifecyclePolicyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}

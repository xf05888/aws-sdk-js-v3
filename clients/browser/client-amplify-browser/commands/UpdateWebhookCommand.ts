import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateWebhook } from "../model/operations/UpdateWebhook";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateWebhookInput } from "../types/UpdateWebhookInput";
import { UpdateWebhookOutput } from "../types/UpdateWebhookOutput";
import { AmplifyResolvedConfiguration } from "../AmplifyConfiguration";
export * from "../types/UpdateWebhookInput";
export * from "../types/UpdateWebhookOutput";
export * from "../types/UpdateWebhookExceptionsUnion";

export class UpdateWebhookCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateWebhookInput,
      OutputTypesUnion,
      UpdateWebhookOutput,
      AmplifyResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateWebhook;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateWebhookInput,
    UpdateWebhookOutput,
    Blob
  >();

  constructor(readonly input: UpdateWebhookInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AmplifyResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateWebhookInput, UpdateWebhookOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateWebhookInput, UpdateWebhookOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}

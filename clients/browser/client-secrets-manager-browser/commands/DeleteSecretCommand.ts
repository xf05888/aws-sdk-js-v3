import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteSecret } from "../model/operations/DeleteSecret";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteSecretInput } from "../types/DeleteSecretInput";
import { DeleteSecretOutput } from "../types/DeleteSecretOutput";
import { SecretsManagerResolvedConfiguration } from "../SecretsManagerConfiguration";
export * from "../types/DeleteSecretInput";
export * from "../types/DeleteSecretOutput";
export * from "../types/DeleteSecretExceptionsUnion";

export class DeleteSecretCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteSecretInput,
      OutputTypesUnion,
      DeleteSecretOutput,
      SecretsManagerResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteSecret;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteSecretInput,
    DeleteSecretOutput,
    Blob
  >();

  constructor(readonly input: DeleteSecretInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SecretsManagerResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteSecretInput, DeleteSecretOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteSecretInput, DeleteSecretOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}

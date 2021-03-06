import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteProgressUpdateStream } from "../model/operations/DeleteProgressUpdateStream";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteProgressUpdateStreamInput } from "../types/DeleteProgressUpdateStreamInput";
import { DeleteProgressUpdateStreamOutput } from "../types/DeleteProgressUpdateStreamOutput";
import { MigrationHubResolvedConfiguration } from "../MigrationHubConfiguration";
export * from "../types/DeleteProgressUpdateStreamInput";
export * from "../types/DeleteProgressUpdateStreamOutput";
export * from "../types/DeleteProgressUpdateStreamExceptionsUnion";

export class DeleteProgressUpdateStreamCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteProgressUpdateStreamInput,
      OutputTypesUnion,
      DeleteProgressUpdateStreamOutput,
      MigrationHubResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteProgressUpdateStream;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteProgressUpdateStreamInput,
    DeleteProgressUpdateStreamOutput,
    Blob
  >();

  constructor(readonly input: DeleteProgressUpdateStreamInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: MigrationHubResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteProgressUpdateStreamInput,
    DeleteProgressUpdateStreamOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteProgressUpdateStreamInput,
        DeleteProgressUpdateStreamOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}

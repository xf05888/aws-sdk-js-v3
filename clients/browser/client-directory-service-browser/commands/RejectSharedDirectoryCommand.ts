import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RejectSharedDirectory } from "../model/operations/RejectSharedDirectory";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RejectSharedDirectoryInput } from "../types/RejectSharedDirectoryInput";
import { RejectSharedDirectoryOutput } from "../types/RejectSharedDirectoryOutput";
import { DirectoryServiceResolvedConfiguration } from "../DirectoryServiceConfiguration";
export * from "../types/RejectSharedDirectoryInput";
export * from "../types/RejectSharedDirectoryOutput";
export * from "../types/RejectSharedDirectoryExceptionsUnion";

export class RejectSharedDirectoryCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RejectSharedDirectoryInput,
      OutputTypesUnion,
      RejectSharedDirectoryOutput,
      DirectoryServiceResolvedConfiguration,
      Blob
    > {
  readonly model = RejectSharedDirectory;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RejectSharedDirectoryInput,
    RejectSharedDirectoryOutput,
    Blob
  >();

  constructor(readonly input: RejectSharedDirectoryInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DirectoryServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RejectSharedDirectoryInput,
    RejectSharedDirectoryOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RejectSharedDirectoryInput, RejectSharedDirectoryOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}

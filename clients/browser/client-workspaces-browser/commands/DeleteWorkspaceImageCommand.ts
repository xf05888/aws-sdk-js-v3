import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteWorkspaceImage } from "../model/operations/DeleteWorkspaceImage";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteWorkspaceImageInput } from "../types/DeleteWorkspaceImageInput";
import { DeleteWorkspaceImageOutput } from "../types/DeleteWorkspaceImageOutput";
import { WorkSpacesResolvedConfiguration } from "../WorkSpacesConfiguration";
export * from "../types/DeleteWorkspaceImageInput";
export * from "../types/DeleteWorkspaceImageOutput";
export * from "../types/DeleteWorkspaceImageExceptionsUnion";

export class DeleteWorkspaceImageCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteWorkspaceImageInput,
      OutputTypesUnion,
      DeleteWorkspaceImageOutput,
      WorkSpacesResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteWorkspaceImage;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteWorkspaceImageInput,
    DeleteWorkspaceImageOutput,
    Blob
  >();

  constructor(readonly input: DeleteWorkspaceImageInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WorkSpacesResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteWorkspaceImageInput,
    DeleteWorkspaceImageOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteWorkspaceImageInput, DeleteWorkspaceImageOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}

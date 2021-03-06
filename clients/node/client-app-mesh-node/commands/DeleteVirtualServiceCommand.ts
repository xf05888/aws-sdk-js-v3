import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteVirtualService } from "../model/operations/DeleteVirtualService";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteVirtualServiceInput } from "../types/DeleteVirtualServiceInput";
import { DeleteVirtualServiceOutput } from "../types/DeleteVirtualServiceOutput";
import { AppMeshResolvedConfiguration } from "../AppMeshConfiguration";
export * from "../types/DeleteVirtualServiceInput";
export * from "../types/DeleteVirtualServiceOutput";
export * from "../types/DeleteVirtualServiceExceptionsUnion";

export class DeleteVirtualServiceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteVirtualServiceInput,
      OutputTypesUnion,
      DeleteVirtualServiceOutput,
      AppMeshResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteVirtualService;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteVirtualServiceInput,
    DeleteVirtualServiceOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteVirtualServiceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AppMeshResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteVirtualServiceInput,
    DeleteVirtualServiceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteVirtualServiceInput, DeleteVirtualServiceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}

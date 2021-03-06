import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteCacheSubnetGroup } from "../model/operations/DeleteCacheSubnetGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteCacheSubnetGroupInput } from "../types/DeleteCacheSubnetGroupInput";
import { DeleteCacheSubnetGroupOutput } from "../types/DeleteCacheSubnetGroupOutput";
import { ElastiCacheResolvedConfiguration } from "../ElastiCacheConfiguration";
export * from "../types/DeleteCacheSubnetGroupInput";
export * from "../types/DeleteCacheSubnetGroupOutput";
export * from "../types/DeleteCacheSubnetGroupExceptionsUnion";

export class DeleteCacheSubnetGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteCacheSubnetGroupInput,
      OutputTypesUnion,
      DeleteCacheSubnetGroupOutput,
      ElastiCacheResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteCacheSubnetGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteCacheSubnetGroupInput,
    DeleteCacheSubnetGroupOutput,
    Blob
  >();

  constructor(readonly input: DeleteCacheSubnetGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ElastiCacheResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteCacheSubnetGroupInput,
    DeleteCacheSubnetGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteCacheSubnetGroupInput, DeleteCacheSubnetGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}

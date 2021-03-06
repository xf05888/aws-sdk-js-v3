import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteDBClusterParameterGroup } from "../model/operations/DeleteDBClusterParameterGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteDBClusterParameterGroupInput } from "../types/DeleteDBClusterParameterGroupInput";
import { DeleteDBClusterParameterGroupOutput } from "../types/DeleteDBClusterParameterGroupOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/DeleteDBClusterParameterGroupInput";
export * from "../types/DeleteDBClusterParameterGroupOutput";
export * from "../types/DeleteDBClusterParameterGroupExceptionsUnion";

export class DeleteDBClusterParameterGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteDBClusterParameterGroupInput,
      OutputTypesUnion,
      DeleteDBClusterParameterGroupOutput,
      RDSResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteDBClusterParameterGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteDBClusterParameterGroupInput,
    DeleteDBClusterParameterGroupOutput,
    Blob
  >();

  constructor(readonly input: DeleteDBClusterParameterGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteDBClusterParameterGroupInput,
    DeleteDBClusterParameterGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteDBClusterParameterGroupInput,
        DeleteDBClusterParameterGroupOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}

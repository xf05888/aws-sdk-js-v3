import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ModifyGlobalCluster } from "../model/operations/ModifyGlobalCluster";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyGlobalClusterInput } from "../types/ModifyGlobalClusterInput";
import { ModifyGlobalClusterOutput } from "../types/ModifyGlobalClusterOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/ModifyGlobalClusterInput";
export * from "../types/ModifyGlobalClusterOutput";
export * from "../types/ModifyGlobalClusterExceptionsUnion";

export class ModifyGlobalClusterCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyGlobalClusterInput,
      OutputTypesUnion,
      ModifyGlobalClusterOutput,
      RDSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ModifyGlobalCluster;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyGlobalClusterInput,
    ModifyGlobalClusterOutput,
    _stream.Readable
  >();

  constructor(readonly input: ModifyGlobalClusterInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ModifyGlobalClusterInput,
    ModifyGlobalClusterOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ModifyGlobalClusterInput, ModifyGlobalClusterOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}

import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeClientVpnConnections } from "../model/operations/DescribeClientVpnConnections";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeClientVpnConnectionsInput } from "../types/DescribeClientVpnConnectionsInput";
import { DescribeClientVpnConnectionsOutput } from "../types/DescribeClientVpnConnectionsOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeClientVpnConnectionsInput";
export * from "../types/DescribeClientVpnConnectionsOutput";
export * from "../types/DescribeClientVpnConnectionsExceptionsUnion";

export class DescribeClientVpnConnectionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeClientVpnConnectionsInput,
      OutputTypesUnion,
      DescribeClientVpnConnectionsOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeClientVpnConnections;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeClientVpnConnectionsInput,
    DescribeClientVpnConnectionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeClientVpnConnectionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeClientVpnConnectionsInput,
    DescribeClientVpnConnectionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeClientVpnConnectionsInput,
        DescribeClientVpnConnectionsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}

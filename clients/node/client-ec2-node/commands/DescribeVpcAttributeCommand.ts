import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeVpcAttribute } from "../model/operations/DescribeVpcAttribute";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeVpcAttributeInput } from "../types/DescribeVpcAttributeInput";
import { DescribeVpcAttributeOutput } from "../types/DescribeVpcAttributeOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeVpcAttributeInput";
export * from "../types/DescribeVpcAttributeOutput";
export * from "../types/DescribeVpcAttributeExceptionsUnion";

export class DescribeVpcAttributeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeVpcAttributeInput,
      OutputTypesUnion,
      DescribeVpcAttributeOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeVpcAttribute;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeVpcAttributeInput,
    DescribeVpcAttributeOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeVpcAttributeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeVpcAttributeInput,
    DescribeVpcAttributeOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeVpcAttributeInput, DescribeVpcAttributeOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}

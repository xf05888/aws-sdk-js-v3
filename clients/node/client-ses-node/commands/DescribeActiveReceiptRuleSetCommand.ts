import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeActiveReceiptRuleSet } from "../model/operations/DescribeActiveReceiptRuleSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeActiveReceiptRuleSetInput } from "../types/DescribeActiveReceiptRuleSetInput";
import { DescribeActiveReceiptRuleSetOutput } from "../types/DescribeActiveReceiptRuleSetOutput";
import { SESResolvedConfiguration } from "../SESConfiguration";
export * from "../types/DescribeActiveReceiptRuleSetInput";
export * from "../types/DescribeActiveReceiptRuleSetOutput";
export * from "../types/DescribeActiveReceiptRuleSetExceptionsUnion";

export class DescribeActiveReceiptRuleSetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeActiveReceiptRuleSetInput,
      OutputTypesUnion,
      DescribeActiveReceiptRuleSetOutput,
      SESResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeActiveReceiptRuleSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeActiveReceiptRuleSetInput,
    DescribeActiveReceiptRuleSetOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeActiveReceiptRuleSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SESResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeActiveReceiptRuleSetInput,
    DescribeActiveReceiptRuleSetOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeActiveReceiptRuleSetInput,
        DescribeActiveReceiptRuleSetOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}

import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetReservedInstancesExchangeQuote } from "../model/operations/GetReservedInstancesExchangeQuote";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetReservedInstancesExchangeQuoteInput } from "../types/GetReservedInstancesExchangeQuoteInput";
import { GetReservedInstancesExchangeQuoteOutput } from "../types/GetReservedInstancesExchangeQuoteOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/GetReservedInstancesExchangeQuoteInput";
export * from "../types/GetReservedInstancesExchangeQuoteOutput";
export * from "../types/GetReservedInstancesExchangeQuoteExceptionsUnion";

export class GetReservedInstancesExchangeQuoteCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetReservedInstancesExchangeQuoteInput,
      OutputTypesUnion,
      GetReservedInstancesExchangeQuoteOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetReservedInstancesExchangeQuote;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetReservedInstancesExchangeQuoteInput,
    GetReservedInstancesExchangeQuoteOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetReservedInstancesExchangeQuoteInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetReservedInstancesExchangeQuoteInput,
    GetReservedInstancesExchangeQuoteOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetReservedInstancesExchangeQuoteInput,
        GetReservedInstancesExchangeQuoteOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}

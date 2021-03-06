import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeReservedDBInstancesOfferings } from "../model/operations/DescribeReservedDBInstancesOfferings";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeReservedDBInstancesOfferingsInput } from "../types/DescribeReservedDBInstancesOfferingsInput";
import { DescribeReservedDBInstancesOfferingsOutput } from "../types/DescribeReservedDBInstancesOfferingsOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/DescribeReservedDBInstancesOfferingsInput";
export * from "../types/DescribeReservedDBInstancesOfferingsOutput";
export * from "../types/DescribeReservedDBInstancesOfferingsExceptionsUnion";

export class DescribeReservedDBInstancesOfferingsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeReservedDBInstancesOfferingsInput,
      OutputTypesUnion,
      DescribeReservedDBInstancesOfferingsOutput,
      RDSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeReservedDBInstancesOfferings;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeReservedDBInstancesOfferingsInput,
    DescribeReservedDBInstancesOfferingsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeReservedDBInstancesOfferingsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeReservedDBInstancesOfferingsInput,
    DescribeReservedDBInstancesOfferingsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeReservedDBInstancesOfferingsInput,
        DescribeReservedDBInstancesOfferingsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}

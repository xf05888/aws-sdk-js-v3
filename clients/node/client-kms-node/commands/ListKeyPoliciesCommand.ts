import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListKeyPolicies } from "../model/operations/ListKeyPolicies";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListKeyPoliciesInput } from "../types/ListKeyPoliciesInput";
import { ListKeyPoliciesOutput } from "../types/ListKeyPoliciesOutput";
import { KMSResolvedConfiguration } from "../KMSConfiguration";
export * from "../types/ListKeyPoliciesInput";
export * from "../types/ListKeyPoliciesOutput";
export * from "../types/ListKeyPoliciesExceptionsUnion";

export class ListKeyPoliciesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListKeyPoliciesInput,
      OutputTypesUnion,
      ListKeyPoliciesOutput,
      KMSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListKeyPolicies;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListKeyPoliciesInput,
    ListKeyPoliciesOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListKeyPoliciesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: KMSResolvedConfiguration
  ): __aws_sdk_types.Handler<ListKeyPoliciesInput, ListKeyPoliciesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListKeyPoliciesInput, ListKeyPoliciesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}

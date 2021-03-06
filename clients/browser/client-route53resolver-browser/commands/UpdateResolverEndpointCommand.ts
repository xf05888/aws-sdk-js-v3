import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateResolverEndpoint } from "../model/operations/UpdateResolverEndpoint";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateResolverEndpointInput } from "../types/UpdateResolverEndpointInput";
import { UpdateResolverEndpointOutput } from "../types/UpdateResolverEndpointOutput";
import { Route53ResolverResolvedConfiguration } from "../Route53ResolverConfiguration";
export * from "../types/UpdateResolverEndpointInput";
export * from "../types/UpdateResolverEndpointOutput";
export * from "../types/UpdateResolverEndpointExceptionsUnion";

export class UpdateResolverEndpointCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateResolverEndpointInput,
      OutputTypesUnion,
      UpdateResolverEndpointOutput,
      Route53ResolverResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateResolverEndpoint;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateResolverEndpointInput,
    UpdateResolverEndpointOutput,
    Blob
  >();

  constructor(readonly input: UpdateResolverEndpointInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: Route53ResolverResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateResolverEndpointInput,
    UpdateResolverEndpointOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateResolverEndpointInput, UpdateResolverEndpointOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}

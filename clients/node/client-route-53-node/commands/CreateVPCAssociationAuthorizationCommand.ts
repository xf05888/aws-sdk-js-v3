import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_route53_id_normalizer_middleware from "@aws-sdk/route53-id-normalizer-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateVPCAssociationAuthorization } from "../model/operations/CreateVPCAssociationAuthorization";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateVPCAssociationAuthorizationInput } from "../types/CreateVPCAssociationAuthorizationInput";
import { CreateVPCAssociationAuthorizationOutput } from "../types/CreateVPCAssociationAuthorizationOutput";
import { Route53ResolvedConfiguration } from "../Route53Configuration";
export * from "../types/CreateVPCAssociationAuthorizationInput";
export * from "../types/CreateVPCAssociationAuthorizationOutput";
export * from "../types/CreateVPCAssociationAuthorizationExceptionsUnion";

export class CreateVPCAssociationAuthorizationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateVPCAssociationAuthorizationInput,
      OutputTypesUnion,
      CreateVPCAssociationAuthorizationOutput,
      Route53ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateVPCAssociationAuthorization;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateVPCAssociationAuthorizationInput,
    CreateVPCAssociationAuthorizationOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateVPCAssociationAuthorizationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: Route53ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateVPCAssociationAuthorizationInput,
    CreateVPCAssociationAuthorizationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };
    stack.add(
      __aws_sdk_route53_id_normalizer_middleware.idNormalizerMiddleware,
      {
        step: "initialize",
        priority: 0,
        tags: { NORMALIZE_ROUTE53_IDS: true }
      }
    );
    return stack.resolve(
      handler<
        CreateVPCAssociationAuthorizationInput,
        CreateVPCAssociationAuthorizationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}

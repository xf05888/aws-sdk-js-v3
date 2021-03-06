import * as __aws_crypto_sha256_browser from "@aws-crypto/sha256-browser";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_signature_v4 from "@aws-sdk/signature-v4";
import * as __aws_sdk_signing_middleware from "@aws-sdk/signing-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetIdentityProviderByIdentifier } from "../model/operations/GetIdentityProviderByIdentifier";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetIdentityProviderByIdentifierInput } from "../types/GetIdentityProviderByIdentifierInput";
import { GetIdentityProviderByIdentifierOutput } from "../types/GetIdentityProviderByIdentifierOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/GetIdentityProviderByIdentifierInput";
export * from "../types/GetIdentityProviderByIdentifierOutput";
export * from "../types/GetIdentityProviderByIdentifierExceptionsUnion";

export class GetIdentityProviderByIdentifierCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetIdentityProviderByIdentifierInput,
      OutputTypesUnion,
      GetIdentityProviderByIdentifierOutput,
      CognitoIdentityProviderResolvedConfiguration,
      Blob
    > {
  readonly model = GetIdentityProviderByIdentifier;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetIdentityProviderByIdentifierInput,
    GetIdentityProviderByIdentifierOutput,
    Blob
  >();

  constructor(readonly input: GetIdentityProviderByIdentifierInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetIdentityProviderByIdentifierInput,
    GetIdentityProviderByIdentifierOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };
    stack.add(
      __aws_sdk_signing_middleware.signingMiddleware<
        GetIdentityProviderByIdentifierInput,
        GetIdentityProviderByIdentifierOutput,
        Blob
      >(configuration.signer),
      {
        step: "finalize",
        priority: 0,
        tags: { SIGNATURE: true }
      }
    );
    return stack.resolve(
      handler<
        GetIdentityProviderByIdentifierInput,
        GetIdentityProviderByIdentifierOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}

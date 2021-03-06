import * as __aws_crypto_sha256_browser from "@aws-crypto/sha256-browser";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_signature_v4 from "@aws-sdk/signature-v4";
import * as __aws_sdk_signing_middleware from "@aws-sdk/signing-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListIdentityProviders } from "../model/operations/ListIdentityProviders";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListIdentityProvidersInput } from "../types/ListIdentityProvidersInput";
import { ListIdentityProvidersOutput } from "../types/ListIdentityProvidersOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/ListIdentityProvidersInput";
export * from "../types/ListIdentityProvidersOutput";
export * from "../types/ListIdentityProvidersExceptionsUnion";

export class ListIdentityProvidersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListIdentityProvidersInput,
      OutputTypesUnion,
      ListIdentityProvidersOutput,
      CognitoIdentityProviderResolvedConfiguration,
      Blob
    > {
  readonly model = ListIdentityProviders;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListIdentityProvidersInput,
    ListIdentityProvidersOutput,
    Blob
  >();

  constructor(readonly input: ListIdentityProvidersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListIdentityProvidersInput,
    ListIdentityProvidersOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };
    stack.add(
      __aws_sdk_signing_middleware.signingMiddleware<
        ListIdentityProvidersInput,
        ListIdentityProvidersOutput,
        Blob
      >(configuration.signer),
      {
        step: "finalize",
        priority: 0,
        tags: { SIGNATURE: true }
      }
    );
    return stack.resolve(
      handler<ListIdentityProvidersInput, ListIdentityProvidersOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}

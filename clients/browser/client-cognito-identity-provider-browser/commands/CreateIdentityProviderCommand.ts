import * as __aws_crypto_sha256_browser from "@aws-crypto/sha256-browser";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_signature_v4 from "@aws-sdk/signature-v4";
import * as __aws_sdk_signing_middleware from "@aws-sdk/signing-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateIdentityProvider } from "../model/operations/CreateIdentityProvider";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateIdentityProviderInput } from "../types/CreateIdentityProviderInput";
import { CreateIdentityProviderOutput } from "../types/CreateIdentityProviderOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/CreateIdentityProviderInput";
export * from "../types/CreateIdentityProviderOutput";
export * from "../types/CreateIdentityProviderExceptionsUnion";

export class CreateIdentityProviderCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateIdentityProviderInput,
      OutputTypesUnion,
      CreateIdentityProviderOutput,
      CognitoIdentityProviderResolvedConfiguration,
      Blob
    > {
  readonly model = CreateIdentityProvider;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateIdentityProviderInput,
    CreateIdentityProviderOutput,
    Blob
  >();

  constructor(readonly input: CreateIdentityProviderInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateIdentityProviderInput,
    CreateIdentityProviderOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };
    stack.add(
      __aws_sdk_signing_middleware.signingMiddleware<
        CreateIdentityProviderInput,
        CreateIdentityProviderOutput,
        Blob
      >(configuration.signer),
      {
        step: "finalize",
        priority: 0,
        tags: { SIGNATURE: true }
      }
    );
    return stack.resolve(
      handler<CreateIdentityProviderInput, CreateIdentityProviderOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}

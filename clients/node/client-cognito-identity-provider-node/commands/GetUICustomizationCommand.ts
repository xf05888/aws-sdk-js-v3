import * as __aws_sdk_credential_provider_node from "@aws-sdk/credential-provider-node";
import * as __aws_sdk_hash_node from "@aws-sdk/hash-node";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_region_provider from "@aws-sdk/region-provider";
import * as __aws_sdk_signature_v4 from "@aws-sdk/signature-v4";
import * as __aws_sdk_signing_middleware from "@aws-sdk/signing-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetUICustomization } from "../model/operations/GetUICustomization";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetUICustomizationInput } from "../types/GetUICustomizationInput";
import { GetUICustomizationOutput } from "../types/GetUICustomizationOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/GetUICustomizationInput";
export * from "../types/GetUICustomizationOutput";
export * from "../types/GetUICustomizationExceptionsUnion";

export class GetUICustomizationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetUICustomizationInput,
      OutputTypesUnion,
      GetUICustomizationOutput,
      CognitoIdentityProviderResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetUICustomization;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetUICustomizationInput,
    GetUICustomizationOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetUICustomizationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetUICustomizationInput,
    GetUICustomizationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };
    stack.add(
      __aws_sdk_signing_middleware.signingMiddleware<
        GetUICustomizationInput,
        GetUICustomizationOutput,
        _stream.Readable
      >(configuration.signer),
      {
        step: "finalize",
        priority: 0,
        tags: { SIGNATURE: true }
      }
    );
    return stack.resolve(
      handler<GetUICustomizationInput, GetUICustomizationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}

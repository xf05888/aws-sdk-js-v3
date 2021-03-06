import * as __aws_crypto_sha256_browser from "@aws-crypto/sha256-browser";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_signature_v4 from "@aws-sdk/signature-v4";
import * as __aws_sdk_signing_middleware from "@aws-sdk/signing-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AdminForgetDevice } from "../model/operations/AdminForgetDevice";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AdminForgetDeviceInput } from "../types/AdminForgetDeviceInput";
import { AdminForgetDeviceOutput } from "../types/AdminForgetDeviceOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/AdminForgetDeviceInput";
export * from "../types/AdminForgetDeviceOutput";
export * from "../types/AdminForgetDeviceExceptionsUnion";

export class AdminForgetDeviceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AdminForgetDeviceInput,
      OutputTypesUnion,
      AdminForgetDeviceOutput,
      CognitoIdentityProviderResolvedConfiguration,
      Blob
    > {
  readonly model = AdminForgetDevice;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AdminForgetDeviceInput,
    AdminForgetDeviceOutput,
    Blob
  >();

  constructor(readonly input: AdminForgetDeviceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<AdminForgetDeviceInput, AdminForgetDeviceOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };
    stack.add(
      __aws_sdk_signing_middleware.signingMiddleware<
        AdminForgetDeviceInput,
        AdminForgetDeviceOutput,
        Blob
      >(configuration.signer),
      {
        step: "finalize",
        priority: 0,
        tags: { SIGNATURE: true }
      }
    );
    return stack.resolve(
      handler<AdminForgetDeviceInput, AdminForgetDeviceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}

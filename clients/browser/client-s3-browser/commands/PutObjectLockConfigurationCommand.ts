import * as __aws_sdk_bucket_endpoint_middleware from "@aws-sdk/bucket-endpoint-middleware";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutObjectLockConfiguration } from "../model/operations/PutObjectLockConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutObjectLockConfigurationInput } from "../types/PutObjectLockConfigurationInput";
import { PutObjectLockConfigurationOutput } from "../types/PutObjectLockConfigurationOutput";
import { S3ResolvedConfiguration } from "../S3Configuration";
export * from "../types/PutObjectLockConfigurationInput";
export * from "../types/PutObjectLockConfigurationOutput";
export * from "../types/PutObjectLockConfigurationExceptionsUnion";

export class PutObjectLockConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutObjectLockConfigurationInput,
      OutputTypesUnion,
      PutObjectLockConfigurationOutput,
      S3ResolvedConfiguration,
      Blob
    > {
  readonly model = PutObjectLockConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutObjectLockConfigurationInput,
    PutObjectLockConfigurationOutput,
    Blob
  >();

  constructor(readonly input: PutObjectLockConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: S3ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutObjectLockConfigurationInput,
    PutObjectLockConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };
    stack.add(
      __aws_sdk_bucket_endpoint_middleware.bucketEndpointMiddleware({
        forcePathStyle: configuration.forcePathStyle,
        preformedBucketEndpoint: configuration.bucketEndpoint,
        useAccelerateEndpoint: configuration.useAccelerateEndpoint,
        useDualstackEndpoint: configuration.useDualstackEndpoint
      }),
      {
        step: "build",
        priority: 0
      }
    );
    return stack.resolve(
      handler<
        PutObjectLockConfigurationInput,
        PutObjectLockConfigurationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}

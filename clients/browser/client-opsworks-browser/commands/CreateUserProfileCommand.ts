import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateUserProfile } from "../model/operations/CreateUserProfile";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateUserProfileInput } from "../types/CreateUserProfileInput";
import { CreateUserProfileOutput } from "../types/CreateUserProfileOutput";
import { OpsWorksResolvedConfiguration } from "../OpsWorksConfiguration";
export * from "../types/CreateUserProfileInput";
export * from "../types/CreateUserProfileOutput";
export * from "../types/CreateUserProfileExceptionsUnion";

export class CreateUserProfileCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateUserProfileInput,
      OutputTypesUnion,
      CreateUserProfileOutput,
      OpsWorksResolvedConfiguration,
      Blob
    > {
  readonly model = CreateUserProfile;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateUserProfileInput,
    CreateUserProfileOutput,
    Blob
  >();

  constructor(readonly input: CreateUserProfileInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: OpsWorksResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateUserProfileInput, CreateUserProfileOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateUserProfileInput, CreateUserProfileOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}

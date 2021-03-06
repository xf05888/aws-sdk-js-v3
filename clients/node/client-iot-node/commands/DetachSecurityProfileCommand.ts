import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DetachSecurityProfile } from "../model/operations/DetachSecurityProfile";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DetachSecurityProfileInput } from "../types/DetachSecurityProfileInput";
import { DetachSecurityProfileOutput } from "../types/DetachSecurityProfileOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/DetachSecurityProfileInput";
export * from "../types/DetachSecurityProfileOutput";
export * from "../types/DetachSecurityProfileExceptionsUnion";

export class DetachSecurityProfileCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DetachSecurityProfileInput,
      OutputTypesUnion,
      DetachSecurityProfileOutput,
      IoTResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DetachSecurityProfile;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DetachSecurityProfileInput,
    DetachSecurityProfileOutput,
    _stream.Readable
  >();

  constructor(readonly input: DetachSecurityProfileInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DetachSecurityProfileInput,
    DetachSecurityProfileOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DetachSecurityProfileInput, DetachSecurityProfileOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}

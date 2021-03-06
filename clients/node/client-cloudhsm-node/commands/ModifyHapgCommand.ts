import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ModifyHapg } from "../model/operations/ModifyHapg";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyHapgInput } from "../types/ModifyHapgInput";
import { ModifyHapgOutput } from "../types/ModifyHapgOutput";
import { CloudHSMResolvedConfiguration } from "../CloudHSMConfiguration";
export * from "../types/ModifyHapgInput";
export * from "../types/ModifyHapgOutput";
export * from "../types/ModifyHapgExceptionsUnion";

export class ModifyHapgCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyHapgInput,
      OutputTypesUnion,
      ModifyHapgOutput,
      CloudHSMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ModifyHapg;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyHapgInput,
    ModifyHapgOutput,
    _stream.Readable
  >();

  constructor(readonly input: ModifyHapgInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudHSMResolvedConfiguration
  ): __aws_sdk_types.Handler<ModifyHapgInput, ModifyHapgOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ModifyHapgInput, ModifyHapgOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}

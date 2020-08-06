import { createParamDecorator, ExecutionContext } from '@nestjs/common';

/**
 * 当前登录用户
 */
export const LoginUser = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  return request.user;
});

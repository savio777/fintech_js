import {
  ErrorBadRequest,
  ErrorForbidden,
  ErrorUnauthorized,
  ErrorInternalServerError,
} from '../shared/utils/errors';

export declare global {
  var BadRequestException: typeof ErrorBadRequest;
  var UnauthorizedException: typeof ErrorUnauthorized;
  var InternalServerErrorException: typeof ErrorInternalServerError;
  var ForbiddenException: typeof ErrorForbidden;
}

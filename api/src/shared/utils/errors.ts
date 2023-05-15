export class ErrorBadRequest extends Error {
  statusCode: number;
  errors?: string[];

  constructor(message: string | unknown | any) {
    super(message);
    this.statusCode = 400;
    this.errors = message?.errors || [];
  }
}

export class ErrorUnauthorized extends Error {
  statusCode: number;
  errors?: string[];

  constructor(message: string | unknown | any) {
    super(message);
    this.statusCode = 401;
    this.errors = message?.errors || [];
  }
}

export class ErrorForbidden extends Error {
  statusCode: number;
  errors?: string[];

  constructor(message: string | unknown | any) {
    super(message);
    this.statusCode = 403;
    this.errors = message?.errors || [];
  }
}

export class ErrorInternalServerError extends Error {
  statusCode: number;
  errors?: string[];

  constructor(message: string | unknown | any) {
    super(message);
    this.statusCode = 500;
    this.errors = message?.errors || [];
  }
}

globalThis.BadRequestException = ErrorBadRequest;
globalThis.UnauthorizedException = ErrorUnauthorized;
globalThis.ForbiddenException = ErrorForbidden;
globalThis.InternalServerErrorException = ErrorInternalServerError;

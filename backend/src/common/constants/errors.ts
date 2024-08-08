export class CustomError extends Error {
  public statusCode: number;
  public error: string;
  public data: any;

  constructor(
    statusCode: number = 400,
    error: string,
    message: string,
    data: any = null,
  ) {
    super(message);

    this.statusCode = statusCode;
    this.error = error;
    this.data = data;
  }
}

export class RouteNotFoundError extends CustomError {
  constructor(
    statusCode: number = 404,
    error: string = 'RouteNotFoundError',
    message: string = 'Route not found',
    data: any = null,
  ) {
    super(statusCode, error, message, data);
  }
}

export class LinkExpiredError extends CustomError {
  constructor(
    statusCode: number = 400,
    error: string = 'LinkExpiredError',
    message: string = 'Link has expired or did not really existed in the first place',
    data: any = null,
  ) {
    super(statusCode, error, message, data);
  }
}

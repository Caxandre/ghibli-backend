class AppError {
  public readonly errorToken: string;

  public readonly message: string;

  public readonly statusCode: number;

  constructor(errorToken: string, message: string, statusCode = 400) {/* A template literal. */
    this.errorToken = errorToken;
    this.message = message;
    this.statusCode = statusCode;
  }
}

export default AppError;

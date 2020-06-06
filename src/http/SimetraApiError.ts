export default class SimetraApiError extends Error {
  private status: number;
  private data: any;
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  constructor(name: string, data: any, status: number) {
    super(name);
    this.data = data;
    this.status = status;
    Object.setPrototypeOf(this, SimetraApiError.prototype);
    Error.captureStackTrace(this, SimetraApiError);
  }
}

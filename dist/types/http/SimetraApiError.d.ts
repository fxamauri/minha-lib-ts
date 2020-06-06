export default class SimetraApiError extends Error {
    private status;
    private data;
    constructor(name: string, data: any, status: number);
}

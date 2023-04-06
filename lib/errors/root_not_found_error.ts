export class RootNotFoundError implements Error {
    name: string = "Root Not Found";
    message: string = "Root element in index.html was not found";
    stack?: string | undefined;
}
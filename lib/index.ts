import { RootNotFoundError } from "./errors/root_not_found_error"

const root = document.getElementById('root');
if (root !== null) throw new RootNotFoundError();
root!.innerHTML! = "Hey"

export { root }
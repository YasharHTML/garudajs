import { BuildContext } from "../../interfaces/context";

export interface StaticWidget {
    build(context: BuildContext<any>);
}
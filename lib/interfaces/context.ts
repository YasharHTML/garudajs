import { StaticWidget } from "../widgets/base/StaticWidget";

export interface BuildContext<T> {
    state: T;
    tree: StaticWidget;
}
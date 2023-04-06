import { BuildContext } from "../../interfaces/context";
import { StaticWidget } from "../base/StaticWidget";

export class Container implements StaticWidget {
    
    constructor(private child: StaticWidget, private styles?: CSSStyleDeclaration) {}
    
    build(context: BuildContext<any>) {
        const container: HTMLDivElement & {style: CSSStyleDeclaration} = new HTMLDivElement()
        
    }

}
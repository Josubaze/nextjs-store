import { HTMLAttributes, createElement} from "react";
import sanitize from "sanitize-html";

type SanitizeHTMLProps = {

    tag: string;
    children: string; 
    
} & HTMLAttributes<HTMLElement>

export const SanitizeHTML = ({ tag, children, ...rest }: SanitizeHTMLProps) => {

    const sanitazedHTML = sanitize(children, {
        allowedTags: [ // que etiquetas dejo pasar sin limpiar, esto como ejemplo para este ejercicio no hace falta.
            "b",
            "i",
            "strong",
            "em",
        ]
    });

    return createElement(tag, { ...rest }, sanitazedHTML);
        
}


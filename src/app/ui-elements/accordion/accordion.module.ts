import { AccordionItem } from "./directives/accordion-item.directive";
import { AccordionContent } from "./directives/accordion-content.directive";
import { AccordionTitle } from "./directives/accordion-title.directive";
import { AccordionHeader } from "./directives/accordion-header.directive";

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [CommonModule],
    declarations: [ 
        AccordionItem,
        AccordionContent,
        AccordionTitle,
        AccordionHeader
    ],
    exports: [
        AccordionItem,
        AccordionContent,
        AccordionTitle,
        AccordionHeader
    ]
})
export class AccordionModule {}
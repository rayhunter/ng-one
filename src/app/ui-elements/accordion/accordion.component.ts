import { Component, OnInit, ChangeDetectionStrategy, ContentChildren, QueryList, Input } from '@angular/core';
import { AccordionItem } from './directives/accordion-item.directive';

@Component({
  selector: 'app-user-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionComponent implements OnInit {
  constructor() { }

  expanded = new Set<number>();
  /**
   * Decides if the single item will be open at once or not.
   * In collapsing mode, toggling one would collapse others
   */
  @Input() collapsing = true;

  @ContentChildren(AccordionItem) items: QueryList<AccordionItem> | null;

  /**
   * Make the toggle function available to be called from
   * outside.
   * @param index - Index of the accordion item
   */
  getToggleState = (index: number) => {
    return this.toggleState.bind(this, index);
  };

  toggleState = (index: number) => {
    if (this.expanded.has(index)) {
      this.expanded.delete(index);
    } else {
      if (this.collapsing) {
        this.expanded.clear();
      }
      this.expanded.add(index);
    }
  };
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}

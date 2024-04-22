import { Directive, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { RdxOverlayDirective } from '@radix-ng/primitives/overlay';

import { injectTooltipTrigger } from './tooltip-trigger.token';

/**
 * A unique identifier for the tooltip
 */
let uniqueId = 0;

@Directive({
    selector: '[rdxTooltip]',
    standalone: true,
    exportAs: 'rdxTooltip',
    hostDirectives: [RdxOverlayDirective],
    host: {
        role: 'tooltip'
    }
})
export class RdxTooltipDirective implements OnInit, OnChanges {
    /**
     * Access the tooltip trigger
     */
    private readonly trigger = injectTooltipTrigger();

    /**
     * Define the tooltip id
     */
    @Input() id = `rdx-tooltip-${uniqueId++}`;

    ngOnInit(): void {
        this.trigger.setTooltipId(this.id);
    }

    ngOnChanges(changes: SimpleChanges): void {
        if ('id' in changes) {
            this.trigger.setTooltipId(this.id);
        }
    }
}

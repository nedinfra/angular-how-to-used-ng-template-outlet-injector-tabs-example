import { NgTemplateOutlet } from '@angular/common';
import {
  Component,
  ContentChild,
  inject,
  InjectionToken,
  Injector,
  TemplateRef,
} from '@angular/core';

export const VALUE = new InjectionToken<string>('dummy value');

@Component({
  selector: 'foo',
  standalone: true,
  template: '<ng-content></ng-content>',
  providers: [{ provide: VALUE, useValue: 'from foo' }],
})
export class Foo {}

@Component({
  selector: 'bar',
  standalone: true,
  template: '<ng-content></ng-content>',
  providers: [{ provide: VALUE, useValue: 'from bar' }],
})
export class Bar {
  readonly injector = inject(Injector)
}

@Component({
  selector: 'custom-bar',
  standalone: true,
  template: `
    <bar>
    <div class="content-container"> 
    <ng-content></ng-content>  
    </div>
    </bar>
  `,
  imports: [Bar],
  styles: [
    `
    .content-container{
      padding: 1 rem;
      border: 1px dotted red;
      border-radius: 0.25rem;
    }
  `,
  ],
})
export class CustomBar {}

@Component({
  selector: 'custom-bar-work',
  standalone: true,
  template: `
    <bar #bar>
    <div class="content-container"> 
      <ng-container *ngTemplateOutlet="template; injector: bar.injector"  ></ng-container>
    </div>
    </bar>
  `,
  imports: [Bar, NgTemplateOutlet],
  styles: [
    `
    .content-container{
      padding: 1 rem;
      border: 1px dotted green;
      border-radius: 0.25rem;
    }
  `,
  ],
})
export class CustomBarWork {
  @ContentChild(TemplateRef, { static: true }) template!: TemplateRef<unknown>;
}

@Component({
  selector: 'content',
  standalone: true,
  template: '<p>Content :  {{value || "not wrapped!"}} </p>',
})
export class Content {
  readonly value = inject(VALUE, { optional: true });
}

import { Component, inject, InjectionToken } from "@angular/core";

export const VALUE = new InjectionToken<string>('dummy value')

@Component({
  selector: 'foo',
  standalone: true, 
  template: '<ng-content></ng-content>',
  providers: [{ provide: VALUE , useValue: 'from foo'}]
})
export class Foo {}

@Component({
  selector: 'bar',
  standalone: true,
  template: '<ng-content></ng-content>',
  providers: [{ provide: VALUE , useValue: 'from bar'}]
})
export class Bar{}

@Component({
  selector: 'content',
  standalone: true,
  template: '<p>Content :  {{value || "not wrapped!"}} </p>'
})
export class Content{
  readonly value = inject(VALUE , {optional: true});
}


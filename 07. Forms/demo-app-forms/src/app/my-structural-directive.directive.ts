import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, Optional,ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyStructuralDirective]',
  exportAs: 'appMyStructuralDirective'
})
export class MyStructuralDirectiveDirective implements OnChanges{
  @Input() appMyStructuralDirective: boolean = false;
  @Input() myTempProp: any;


  constructor(
    @Optional() private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef,
  ) {
    console.log('templateRef', templateRef);
    console.log('myTempProp', this.myTempProp);
   }

  ngOnChanges(changes: SimpleChanges): void {

    const template = this.templateRef || this.myTempProp;

    if(!template){
      return
    }

    if(this.appMyStructuralDirective){
    
      this.vcRef.createEmbeddedView(template, {
        value: 'value From NgOnChanges 123',
        $implicit: 'this is implicit data'
      })

    }else{
    
      this.vcRef.clear();
    }
  }
}

import { Directive, HostListener, Input } from "@angular/core";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";

@Directive({
    selector: '[maskGen]',
    providers: [
        {provide: NG_VALUE_ACCESSOR, useExisting : MasKNumericGen, multi : true}
      ],
})
export class MasKNumericGen implements ControlValueAccessor{

    onTouched : any;
    
    @Input("maskGen") maskG : string;

    writeValue(value:any):void{}

    registerOnChange(onChange: (value:string) => void){
        this.onChange = onChange;
    }
    
    registerOnTouched(fn:any):void{
    }

    onChange(value:string){}

    @HostListener("keyup",["$event"])
    onkeyup($event:any){
        const {maskG} = this;

        let value : string = $event.target.value;
        value = value.replace(/\D+/g,"");

        //backspace or char not numeric
        if($event.keyCode == 8 || (value.length < maskG.replace(/\D+/g,"").length)){
            $event.target.value = value;
            return;
        }

        let nValue : string = "";
        let iStr : number = 0;
        for (const ch of maskG){
            if(isNaN(parseInt(ch))){
                nValue += ch;
            }else{
                nValue += value.charAt(iStr);
                iStr++;
            }
        }
        $event.target.value = nValue;
    }
}
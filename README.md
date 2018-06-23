# masks-angular6
Generic functions to help with input masks.

## About
This directive will help you to masks your input on angular 6 applications by using any generic format.
For example, will help you to format cell phone input.

## Prerequisites
Make sure that you are import the new class (.ts file) on your app.module declarations, like this:
````
import { MasKNumericGen } from './paginas/auxiliares/masks/maskNumericGen';

@NgModule({
  declarations: [
    MasKNumericGen
  ])
````
### Usage
````
<input matInput id="cellphone" required maskGen="(99)99999-9999">
<input matInput id="cellphone" required maskGen="+99(99)99999-9999">
````
or
````
<input matInput id="cpf" required maskGen="999.999.999-99">
<input matInput id="cnpj" required maskGen="99.999.999/9999-99">
````
### Ouput:
````
(17)99616-0000
+55(17)99616-0000
````
or
````
418.080.000-00
41.880.000/0001-15
````
Note: Output example is an aleatory test.

# masks-angular6
Generic functions to help with input masks

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
<input matInput id="cpf" required maskGen="999.999.999-99">
````

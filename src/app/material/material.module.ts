//Modulo creado solamente para importar y exportar componentes de Angular Material aquí y ya
//no en el app.module.ts, para tener todo más centralizado y que en el module se vea más límpio
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button' ;

//En este array estarán todos los módulos de Angular Material
const MaterialComponents = [
  MatToolbarModule,
  MatButtonModule
]

@NgModule({
  declarations: [],
  imports: [MaterialComponents],
  exports: [MaterialComponents]  //Se exporta a app.module.ts
})
export class MaterialModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { InformacionComponent } from './componentes/informacion/informacion.component';
import { DescargaComponent } from './componentes/descarga/descarga.component';
import { TutorialComponent } from './componentes/tutorial/tutorial.component';

// Define las rutas de la aplicación
export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'informacion', component: InformacionComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'descarga', component: DescargaComponent },
  { path: 'tutorial', component: TutorialComponent },
  { path: '**', component: InicioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

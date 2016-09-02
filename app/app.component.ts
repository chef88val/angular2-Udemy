// Importar el núcleo de Angular
import {Component} from 'angular2/core';
import {PeliculasListComponent} from './componentes/peliculas-list.component';
import {PeliculasFooterComponent} from './componentes/peliculas-footer.component';
import {ROUTER_DIRECTIVES,RouteConfig,Router} from "angular2/router";
import {ContactoComponent} from './componentes/contacto.component';
import {CrearPeliculaComponent} from './componentes/crear-pelicula.component';


// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'my-app',
    templateUrl: "app/views/c1.html",
    directives: [CrearPeliculaComponent,PeliculasListComponent,PeliculasFooterComponent,ROUTER_DIRECTIVES,ContactoComponent],

    //styleUrls: ['../assets/css/style.css']
})
@RouteConfig([
    {path: "/peliculas", name: "Peliculas", component: PeliculasListComponent, useAsDefault: true},
    {path: "/contacto", name: "Contacto", component: ContactoComponent},
    {path: "/crear-pelicula", name: "CrearPelicula", component: CrearPeliculaComponent}
])
// Clase del componente donde iran los datos y funcionalidades
export class AppComponent {
    public C1_title: "ola ka se";
}

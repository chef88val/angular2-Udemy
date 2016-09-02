// Importar el núcleo de Angular
import {Component} from 'angular2/core';
import {C1} from '../model/c1';
import {PeliculasService} from '../services/peliculas.service';

// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'peliculas-list',
    templateUrl: "app/views/peliculas-list.html",
    providers: [PeliculasService]
    
})
export class PeliculasListComponent{
    public componente1: C1;    
    public mostrarDatos: boolean;
    public lista_peliculas: Array<C1>;
    public peliculaElegida: C1;
    public datoservicio;

    constructor(private _peliculasService: PeliculasService) {
        this.mostrarDatos = true;
        this.componente1 = new C1(1, "x", "c", 2);
        this.lista_peliculas = this._peliculasService.getPeliculas();
        this.peliculaElegida = this.componente1;
       //this.datoservicio = ;
    }

    onMostrarEsconder(value) {
        this.mostrarDatos = value;
    }

    onLog(titulo = null) {
        if (titulo != null) {
            console.log(this.componente1.titulo);
        } else {
            console.log(this.componente1);
        }
    }

    onCambioPelicula(pelicula){
        this.componente1 = pelicula;
        this.peliculaElegida = pelicula;
    }
}
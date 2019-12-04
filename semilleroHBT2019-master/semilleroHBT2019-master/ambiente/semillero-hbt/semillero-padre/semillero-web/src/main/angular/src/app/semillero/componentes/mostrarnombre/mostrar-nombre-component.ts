import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

/**
 * @description La clase mostrarnombre permite mostrar monbre y ciudad
 * 
 * @author Luis Armando Furnieles
 * 
 */

@Component({

    selector: 'mostrar-nombre',
    templateUrl: './mostrar-nombre-component.html',
    styles: ['./mostrar-nombre-component.css']

})

export class MostrarNombreComponent implements OnInit{
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
    /**
     * Atributos que contiene las variables con sus valores, las cuales se llaman en "mostrar-nombre-component.html" y se imprimen en "bienvenida-component.html"
     */

    private nombre : string = "Luis Armando Furnieles";
    private ciudad : string= "Montería";

    /**
     * Atributo que contiene la concatenacion de las variables con sus valores
     */
    public ver: string= this.nombre +" - "+ this.ciudad;
    
 
    constructor(private router: Router) {

    }

    public mostrar( ) : void {
        this.router.navigate(['bienvenida']);
    }

}

    
  
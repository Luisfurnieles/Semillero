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
    

    private nombre : string = "Luis Armando Furnieles";
    private ciudad : string= "Montería";

    public ver: string= this.nombre +" - "+ this.ciudad;
    
 
    constructor(private router: Router) {

    }

    public mostrar( ) : void {
        this.router.navigate(['bienvenida']);
    }

}

    
  
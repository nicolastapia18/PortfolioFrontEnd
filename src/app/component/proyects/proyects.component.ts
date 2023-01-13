import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {

  proyectos: Proyectos[] = [];
  
  constructor(private sProyectos: ProyectosService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarProyectos();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else{
      this.isLogged = false;
    }
  }

  cargarProyectos():void{
    this.sProyectos.lista().subscribe(data => {this.proyectos = data});
  }

  delete(id?: number){
    if(id != undefined){
      this.sProyectos.delete(id).subscribe(data => {this.cargarProyectos();}, err => {alert("No se puede borrar el proyecto");})
    }
  }
}

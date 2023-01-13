import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {

  nombre: string = '';
  descripcion: string = '';
  link: string = '';

  constructor(private sProyecto: ProyectosService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const proyecto = new Proyectos(this.nombre, this.descripcion, this.link);
    this.sProyecto.save(proyecto).subscribe(data => {alert("Proyecto añadido");this.router.navigate(['']);}, err => {
      alert('Fallo');this.router.navigate(['']);
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-new-education',
  templateUrl: './new-education.component.html',
  styleUrls: ['./new-education.component.css']
})
export class NewEducationComponent implements OnInit {

  nombreE: string;
  descripcionE: string;

  constructor(private sEducacion: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const edu = new Educacion(this.nombreE, this.descripcionE);
    this.sEducacion.save(edu).subscribe(data => {alert("Educación añadida");this.router.navigate(['']);}, err => {
      alert('Fallo');this.router.navigate(['']);
    })
  }
}

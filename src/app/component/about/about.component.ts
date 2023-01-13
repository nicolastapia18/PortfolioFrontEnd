import { Component, OnInit } from '@angular/core';
import { PersonaModel } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  persona: PersonaModel = null;
  isLogged= false;

  constructor(public personaService: PersonaService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.cargarPersona();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else{
      this.isLogged = false;
    }
  }

  cargarPersona(){
    this.personaService.detail(1).subscribe(data => {this.persona = data;})
  }

}

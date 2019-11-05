import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../model/usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {

  protected usuario: Usuario = new Usuario 

  constructor() { }

  ngOnInit() {
  }

}

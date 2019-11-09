import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../model/usuario';
import { UsuarioService } from '../../services/usuario.service';
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.page.html',
  styleUrls: ['./add-usuario.page.scss'],
})
export class AddUsuarioPage implements OnInit {
  
  protected usuario: Usuario = new Usuario
  protected id: string = null;
  protected preview:string = null;
  
  constructor(
    protected usuarioService: UsuarioService,
    protected alertController: AlertController,
    protected router: Router,
    protected activedRoute: ActivatedRoute,
  ) { }


  ngOnInit() {
  }

  onsubmit(form) {
    if (this.id) {
      this.usuarioService.update(this.usuario, this.id).then(
        res => {
          this.presentAlert("Aviso", "Atualizado!");
          form.reset();
          this.usuario = new Usuario;
          this.router.navigate(['/tabs/list-usuario']);
        },
        erro => {
          console.log("Erro: " + erro);
          this.presentAlert("Erro", "Erro ao atualizar!");
        }
      )
    } else {
      this.usuarioService.save(this.usuario).then(
        res => {
          this.presentAlert("Aviso", "Cadastrado!");
          form.reset();
          this.usuario = new Usuario;
          this.router.navigate(['/tabs/list-usuario']);
        },
        erro => {
          console.log("Erro: " + erro);
          this.presentAlert("Erro", "Erro ao cadastrar!");
        }
      )
    }
  }

  async presentAlert(titulo: string, texto: string) {
    const alert = await this.alertController.create({
      header: titulo,
      //subHeader: 'Subtitle',
      message: texto,
      buttons: ['OK']
    });
    await alert.present();
}
}


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { MensagemService } from 'src/app/services/mensagem.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  protected email: string;
  protected senha: string;
  protected msg: MensagemService;

  constructor(
    public afAuth: AngularFireAuth,
    protected router: Router,
  ) { }

  ngOnInit() {
  }

  onsubmit(form) {
    this.login()
  }

  login() {
    this.afAuth.auth.signInWithEmailAndPassword(this.email, this.senha).then(
      res => {
        console.log(res);
        this.router.navigate(["/"])
      },
      erro => {
        console.log(erro);
        this.msg.presentAlert("Ops!", "E-mail e/ou senha invalida!");
      }
    )
 }
}
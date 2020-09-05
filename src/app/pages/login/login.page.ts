import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides, NavController } from '@ionic/angular';
import { UsuarioService } from '../../services/usuario.service';
import { UiServiceService } from '../../services/ui-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // para bloquear el slides
  @ViewChild('slidePrincipal') slides: IonSlides;

  avatars = [
    {
      img: 'av-1.png',
      seleccionado: false
    },
    {
      img: 'av-2.png',
      seleccionado: true
    },
    {
      img: 'av-3.png',
      seleccionado: false
    },
    {
      img: 'av-4.png',
      seleccionado: false
    },
    {
      img: 'av-5.png',
      seleccionado: false
    },
    {
      img: 'av-6.png',
      seleccionado: false
    },
    {
      img: 'av-7.png',
      seleccionado: false
    },
    {
      img: 'av-8.png',
      seleccionado: false
    },
];


  // Para que se adapter mejor
  avatarSlide = {
    slidesPerView: 3.5
  };

  loginUser = {
    email: 'angeldamian@gmail.com',
    password: '12345'
  };

  constructor(private usuarioService: UsuarioService,
              private navCtrl: NavController,
              private uiService: UiServiceService ) { }

  ngOnInit() {
    // con este método bloqueamos el slide
    // this.slides.lockSwipes(true); con este lockSwipes no me funcionó y utilicé el ionViewDidEnter()
  }

// con este método paralicé el deslizamiento del slide, por el ciclo de vida de ionic
  ionViewDidEnter() {
    this.slides.lockSwipes(true);
  }

  async login(fLogin: NgForm){
  // una pequeña validación
    if (fLogin.invalid){ return; }

    // validando el email y el login con el servicio, no hace falta hacer el subscribe porque esta en el service
    const valido = await this.usuarioService.login(this.loginUser.email, this.loginUser.password);

    if (!valido){
      // navegar al tabs, se le colocó "main" por seguridad
     this.navCtrl.navigateRoot('/main/tabs/tab1', {animated: true});
    }else{
      // mostrar alerta de usuario y contraseña no sono correctos
      this.uiService.alertaInformativa('Usuario/Contraseña no son correctos');
    }

    console.log(fLogin.valid); // para verificar lo que traemos desde el servicio
    console.log(this.loginUser);
  }

  registro(fRegistro: NgForm){
    console.log(fRegistro.valid);
  }

  seleccionarAvatar( avatar){
    this.avatars.forEach( av => av.seleccionado = false);

    avatar.seleccionado = true;
  }

  mostrarRegistro(){
    this.slides.lockSwipes(false); // Desbloqueo el slide
    this.slides.slideTo(0);
    this.slides.lockSwipes(true);
  }
  mostrarLogin(){
    this.slides.lockSwipes(false); // Desbloqueo el slide
    this.slides.slideTo(1); // El subindice infica a cuál slide quiero navegar o mostrar
    this.slides.lockSwipes(true); // vuelvo a bloquear
  }
};
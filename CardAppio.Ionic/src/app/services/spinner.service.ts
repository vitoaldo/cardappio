import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  private spinner: any = null;

  constructor(public loading: LoadingController) {

  }

  async Show(message: string) {
    const loading = await this.loading.create({
      spinner: 'dots',
      duration: 3000,
      message: (message || 'Carregando'),
      translucent: true
    });
    return await loading.present();
  }
}

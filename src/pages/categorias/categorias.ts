import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoriaService } from '../../services/domain/categoria.service';
import { CategoriaDTO } from '../../models/categoria.dto';
import { APICONFIG } from '../../config/api.config';


@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {

  bucketUrl: string = APICONFIG.bucketBaseUrl;
  items: CategoriaDTO[];
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public categoriaService: CategoriaService)
     {
  }

  ionViewDidLoad() {
    this.categoriaService.findAll()
      .subscribe(response => {
        this.items = response;
          console.log(response);
        },
        //interceptor 
      error => {});

    console.log('ionViewDidLoad CategoriasPage');
  }

  showProdutos(categoria_id : string){
    this.navCtrl.push('ProdutosPage', { categoria_id:categoria_id});
  }

}

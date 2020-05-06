import { HttpClient } from "@angular/common/http";
import { APICONFIG } from "../../config/api.config";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { ProdutoDTO } from "../../models/produto.dto";

@Injectable()
export class ProdutoService{
    constructor(public http : HttpClient){

    }

    // findByCategoria(categoria_id : string){
    //     //console.log(`${APICONFIG.baseUrl}/produtos/?categorias=${categoria_id}}`);
    //     return this.http.get(`${APICONFIG.baseUrl}/produtos/?categorias=${categoria_id}`);
    // }

    findByCategoria(categoria_id : string, page : number = 0, linesPerPage: number = 24){
        return this.http.get(`${APICONFIG.baseUrl}/produtos/?categorias=${categoria_id}&page=${page}&linesPerPage${linesPerPage}`);
    }


    getSmallImageFromBucket(id : string) : Observable<any>{
        let url = `${APICONFIG.bucketBaseUrl}/prod${id}-small.jpg`;
        return this.http.get(url, {responseType: 'blob'});
    }

    getImageFromBucket(id : string) : Observable<any>{
        let url = `${APICONFIG.bucketBaseUrl}/prod${id}-small.jpg`;
        return this.http.get(url, {responseType: 'blob'});
    }
    
    findById(produto_id : string){
        return this.http.get<ProdutoDTO>(`${APICONFIG.baseUrl}/produtos/${produto_id}`);
    }

}
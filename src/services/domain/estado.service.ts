import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { APICONFIG } from "../../config/api.config";
import { EstadoDTO } from "../../models/estado.dto";
import { Observable } from "rxjs/Rx";

@Injectable()
export class EstadoService{

    constructor(public http: HttpClient){
        
    }

    findAll() : Observable<EstadoDTO[]> {
        return this.http.get<EstadoDTO[]>(`${APICONFIG.baseUrl}/estados`);
    }
}


import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { APICONFIG } from "../../config/api.config";
import { ClienteDTO } from "../../models/cliente.dto";
import { Observable } from "rxjs/Rx";
import { StorageService } from "../storage.service";


@Injectable()
export class ClienteService {
    
    constructor(public http: HttpClient, public storage: StorageService){

    }

    // findByEmail(email: string) : Observable<ClienteDTO>{
    //     // let token = this.storage.getLocalUser().token;
    //     // let authHeader = new HttpHeaders({'Authorization' : 'Bearer ' + token})
        
    //     return this.http.get<ClienteDTO>(`${APICONFIG.baseUrl}/clientes/email?value=${email}`);
    // }

    findByEmail(email: string){
        return this.http.get(`${APICONFIG.baseUrl}/clientes/email?value=${email}`);
    }

    findById(id: string){
        return this.http.get(`${APICONFIG.baseUrl}/clientes/${id}`);
    }

    getImageFromBucket(id : string) : Observable<any>{
        let url = `${APICONFIG.bucketBaseUrl}/cp${id}.jpg`
        return this.http.get(url, {responseType: 'blob'});
    }

    insert(obj : ClienteDTO){
        return this.http.post(
            `${APICONFIG.baseUrl}/clientes`,
            obj,{
                observe:'response',
                responseType:'text'
            }
        )
    }
}
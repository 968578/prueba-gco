import { Injectable } from "@angular/core";
import { ResponseApi } from "../models/models";
import { ToastService } from "../service/toast.service";

@Injectable({
  providedIn: 'root'
})
export class HandlerResponse {

  constructor(private toastService: ToastService) {}

  public manejaRespuestaGenerica(response:ResponseApi, cb :(d:any)=>void, mensajeSucces: string, mensajeFallo: string){
    if(response.name == "ok"){
      if(response.data){
        cb(response.data)
      }
      if(mensajeSucces){
        this.toastService.showToast({
          text: mensajeSucces,
          type: "success",
          duration: 5000
        }); 
      }
    } else {
      this.toastService.showToast({
          text: mensajeFallo,
          type: "error",
          duration: 5000
        }); 
    }
  }

  public manejarError(mensajeFallo: string){
    this.toastService.showToast({
      text: mensajeFallo,
      type: "error",
      duration: 5000
    }); 
  } 

}
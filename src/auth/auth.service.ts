import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    logIn(){
        return [] //Aqui se extraen los datos ya sea del form o de la base de datos y estos mismos son tratados en los controladores por injecion de dependencias.
    }

    createUser(){
        return []
    }    
}

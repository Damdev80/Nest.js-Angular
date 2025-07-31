import { Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
@Controller('auth') // los controladores el decorador@  controller tambien define las rutas. y como es una clase se le puede meter los metodos de esta misma para tratar los datos que son injetados por dependencias en este caso de los servicios.
export class AuthController {
    constructor(private readonly authService: AuthService)/*Se inyecta las depemdencias*/ {}
    //No olvidar de meter los paremetros por @Body
    //Y si busca algun Id o algo, pues usamos el decorador @Param
    @Get('login')
    logIng(){
        return this.authService.logIn()
    }

    @Post('register')
    createUser(){
        return this.authService.createUser()
    }
} 

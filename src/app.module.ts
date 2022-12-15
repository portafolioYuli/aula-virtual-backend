import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsuarioModule } from "./modules/usuario/usuario.module";
import { ActividadModule } from "./modules/actividad/actividad.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password_db',
      database: 'db',
      entities: [],
      autoLoadEntities: true
    }),
    UsuarioModule,
    ActividadModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}

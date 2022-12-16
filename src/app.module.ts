import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsuarioModule } from "./modules/usuario/usuario.module";
import { ActividadModule } from "./modules/actividad/actividad.module";
import { ConfigModule } from "@nestjs/config";
import { CONFIGURATION } from "../config/configuration";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `${process.cwd()}/config/env/${process.env.NODE_ENV}.env`,
      load: [CONFIGURATION],
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
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

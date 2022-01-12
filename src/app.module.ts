import {Module} from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';
import {ConfigModule} from "@nestjs/config";
import {User} from "./users/users.model";
import { RolesModule } from './roles/roles.module';
import {Role} from "./roles/roles.model";
import {UserRoles} from "./roles/user-roles.model";
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';
import {Post} from "./posts/posts.model";
import { FilesModule } from './files/files.module';
import {ServeStaticModule} from "@nestjs/serve-static";
import * as path from 'path';
console.log(process.env.POSTGRES_HOST);
console.log(process.env.POSTGRES_PORT);
console.log(process.env.POSTGRES_PASSWORD);
console.log(process.env.POSTGRES_USER);
@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
           envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        // ServeStaticModule.forRoot({
        //     rootPath: path.resolve( __dirname, 'static'),
        // }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: "main-fargate-px-db-psql.cwpohdwr2azc.us-east-1.rds.amazonaws.com",
            port: 5432,
            username: "postgres",
            password: "12345678",
            database: "postgres",
            models: [User, Role, UserRoles, Post],
            autoLoadModels: true
        }),
        UsersModule,
        RolesModule,
        AuthModule,
        PostsModule,
        FilesModule,
    ]
})
export class AppModule {}

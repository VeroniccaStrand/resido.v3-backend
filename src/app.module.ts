import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TenantsModule } from './modules/tenants/tenants.module';
import { AdminsModule } from './modules/admins/admins.module';
import { UnitTenantsModule } from './modules/unit-tenants/unit-tenants.module';
import { UsersModule } from './modules/users/users.module';
import { ManagersModule } from './managers/managers.module';
import configuration from './database/configuration';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, load: [configuration] }), TenantsModule, AdminsModule, UnitTenantsModule, UsersModule, ManagersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

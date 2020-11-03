import { Module } from "@nestjs/common";
import { ApiController } from "./api.controller";
import { UserApiModule } from "./user/user.api.module";

/**
 * Module for managing the entire api.
 */
@Module({
    imports: [UserApiModule],
    controllers: [ApiController],
    providers: []
})
export class ApiModule {}

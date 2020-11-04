import { Module } from "@nestjs/common";
import { ApiController } from "./api.controller";
import { DeckApiModule } from "./deck/deck.api.module";
import { UserApiModule } from "./user/user.api.module";

/**
 * Module for managing the entire api.
 */
@Module({
    imports: [UserApiModule, DeckApiModule],
    controllers: [ApiController],
    providers: []
})
export class ApiModule {}

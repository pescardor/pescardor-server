import { Module } from "@nestjs/common";
import { ApiController } from "./api.controller";
import { CardApiModule } from "./card/card.api.module";
import { DeckApiModule } from "./deck/deck.api.module";
import { UserApiModule } from "./user/user.api.module";

/**
 * Module for managing the entire api.
 */
@Module({
    imports: [UserApiModule, DeckApiModule, CardApiModule],
    controllers: [ApiController],
    providers: []
})
export class ApiModule {}

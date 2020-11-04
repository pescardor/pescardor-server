import { Module } from "@nestjs/common";
import { CardApiController } from "./card.api.controller";
import { CardApiService } from "./card.api.service";

/**
 * Module, containing all classes for managing cards in the system.
 */
@Module({
    controllers: [CardApiController],
    providers: [CardApiService]
})
export class CardApiModule {}

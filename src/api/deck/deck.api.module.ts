import { Module } from "@nestjs/common";
import { DeckApiController } from "./deck.api.controller";
import { DeckApiService } from "./deck.api.service";

/**
 * Module, containing all classes for managing decks in the system.
 */
@Module({
    controllers: [DeckApiController],
    providers: [DeckApiService]
})
export class DeckApiModule {}

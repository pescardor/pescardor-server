import { Module } from "@nestjs/common";
import { DeckApiController } from "./deck.api.controller";
import { DeckApiService } from "./deck.api.service";

@Module({
    controllers: [DeckApiController],
    providers: [DeckApiService]
})
export class DeckApiModule {}

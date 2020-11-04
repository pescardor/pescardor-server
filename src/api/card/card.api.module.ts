import { Module } from "@nestjs/common";
import { CardApiController } from "./card.api.controller";
import { CardApiService } from "./card.api.service";

@Module({
    controllers: [CardApiController],
    providers: [CardApiService]
})
export class CardApiModule {}

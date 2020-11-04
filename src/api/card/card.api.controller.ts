import { Controller } from "@nestjs/common";
import { CardApiService } from "./card.api.service";

@Controller()
export class CardApiController {
    private readonly cardApiService: CardApiService;

    public constructor(cardApiService: CardApiService) {
        this.cardApiService = cardApiService;
    }
}

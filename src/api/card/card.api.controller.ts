import { Controller } from "@nestjs/common";
import { CardApiService } from "./card.api.service";

/**
 * Controller for managing routes to "/api/v1/card".
 */
@Controller()
export class CardApiController {
    private readonly cardApiService: CardApiService;

    public constructor(cardApiService: CardApiService) {
        this.cardApiService = cardApiService;
    }
}

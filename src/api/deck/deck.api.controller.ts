import { Controller } from "@nestjs/common";
import { DeckApiService } from "./deck.api.service";

/**
 * Controller for managing routes to "/api/v1/deck  ".
 */
@Controller()
export class DeckApiController {
    private readonly deckApiService: DeckApiService;

    public constructor(deckApiService: DeckApiService) {
        this.deckApiService = deckApiService;
    }
}

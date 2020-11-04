import { Controller } from "@nestjs/common";
import { DeckApiService } from "./deck.api.service";

@Controller()
export class DeckApiController {
    private readonly deckApiService: DeckApiService;

    public constructor(deckApiService: DeckApiService) {
        this.deckApiService = deckApiService;
    }
}

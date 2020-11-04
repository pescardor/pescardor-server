import { Controller } from "@nestjs/common";
import { DeckApiService } from "./deck.api.service";

@Controller()
export class DeckApiController {
    public constructor(private readonly deckApiService: DeckApiService) {}
}

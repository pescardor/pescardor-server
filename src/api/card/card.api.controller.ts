import { Controller, Get } from "@nestjs/common";
import { Card } from "../../data/card";
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

    /**
     * Get all cards in the system, that the user has access to.
     */
    @Get("/")
    public async getAllCards(): Promise<Card[]> {
        // TODO lome: Add user contraint
        const cards = await this.cardApiService.getAllCards();
        return cards;
    }
}

import { Injectable } from "@nestjs/common";
import { Card } from "../../data/card";

/**
 * Service for managing data access to cards in the system.
 */
@Injectable()
export class CardApiService {
    private cards: Card[];

    public constructor() {
        this.cards = [];
    }

    /**
     * Get all cards in the system, that are accessible by a certain user.
     */
    public async getAllCards(): Promise<Card[]> {
        // TODO lome: Add user constraint
        return this.cards;
    }

    /**
     * Get a card by its id.
     * @param id id of the card to get
     */
    public async getCardById(id: string): Promise<Card | undefined> {
        // TODO lome: Maybe add user constraint aswell? 
        // Just return "undefined" if user is not allowed to access card?
        return this.cards.find(v => v.id === id);
    }
}

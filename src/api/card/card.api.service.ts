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
}

/**
 * Interface, representing all data of a card used interally.
 */
export interface Card {
    /**
     * Id of the card, set by the server.
     */
    id?: string;
    /**
     * Front text of the card.
     */
    front: string;
    /**
     * Back text of the card.
     */
    back: string;
}

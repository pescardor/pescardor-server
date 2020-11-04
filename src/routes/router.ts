import { Routes } from "nest-router";
import { ApiModule } from "../api/api.module";
import { CardApiModule } from "../api/card/card.api.module";
import { DeckApiModule } from "../api/deck/deck.api.module";
import { UserApiModule } from "../api/user/user.api.module";

/**
 * Routes for the server.
 */
const routes: Routes = [
    {
        path: "/api/v1",
        module: ApiModule,
        children: [
            {
                path: "user",
                module: UserApiModule
            },
            {
                path: "deck",
                module: DeckApiModule
            },
            {
                path: "card",
                module: CardApiModule
            }
        ]
    }
];

export { routes };

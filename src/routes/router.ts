import { Routes } from "nest-router";
import { ApiModule } from "../api/api.module";
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
            }
        ]
    }
];

export { routes };
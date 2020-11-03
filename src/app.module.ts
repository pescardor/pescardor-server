import { Module } from "@nestjs/common";
import { RouterModule } from "nest-router";
import { ApiModule } from "./api/api.module";
import { routes } from "./routes/router";

@Module({
    imports: [RouterModule.forRoutes(routes), ApiModule]
})
export class AppModule {}

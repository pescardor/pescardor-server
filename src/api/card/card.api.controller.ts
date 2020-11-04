import { Controller } from "@nestjs/common";
import { CardApiService } from "./card.api.service";

@Controller()
export class CardApiController {
    public constructor(private readonly cardApiService: CardApiService) {}
}

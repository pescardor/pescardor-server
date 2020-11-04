import {
    BadRequestException,
    Body,
    Controller,
    Delete,
    Get,
    NotFoundException,
    Param,
    Post,
    Put
} from "@nestjs/common";
import { User } from "../../data/user";
import { UserApiService } from "./user.api.service";

/**
 * Controller for managing requests to "/api/v1/user".
 */
@Controller()
export class UserApiController {
    private readonly userApiService: UserApiService;

    public constructor(userApiService: UserApiService) {
        this.userApiService = userApiService;
    }

    /**
     * Get all users in the system.
     */
    @Get("/")
    public async getUsers(): Promise<User[]> {
        const users = await this.userApiService.getUsers();
        return users;
    }

    /**
     * Get a user, specified by the id.
     *
     * @param id id of the user the get
     */
    @Get("/:id")
    public async getUserById(@Param("id") id: string): Promise<User> {
        const user = await this.userApiService.getUserById(id);

        if (user) {
            return user;
        } else {
            throw new NotFoundException();
        }
    }

    /**
     * Add a new user to the system.
     *
     * @param user information off the user to add
     */
    @Post("/")
    public async addUser(@Body() user: User): Promise<User> {
        const returnedUser = await this.userApiService.addUser(user);
        return returnedUser;
    }

    /**
     * Update information of an user.
     *
     * @param id id of the user
     * @param user information of the user to update
     */
    @Put("/:id")
    public async updateUser(@Param("id") id: string, @Body() user: User): Promise<void> {
        const success = await this.userApiService.updateUser(id, user);
        if (!success) {
            throw new BadRequestException();
        }
    }

    /**
     * Delete a user specified by the id.
     *
     * @param id id of the user to delete
     */
    @Delete("/:id")
    public async deleteUser(@Param("id") id: string): Promise<void> {
        const success = await this.userApiService.deleteUser(id);
        if (!success) {
            throw new BadRequestException();
        }
    }
}

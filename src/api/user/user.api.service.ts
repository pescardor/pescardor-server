import { Injectable } from "@nestjs/common";
import { v4 as uuid } from "uuid";

export interface User {
    id?: string;
    name: string;
}

/**
 * Service for managing all deper interaction with user data.
 */
@Injectable()
export class UserApiService {
    private users: User[];
    constructor() {
        this.users = [];
    }

    /**
     * Get all users in currently registered.
     */
    public async getUsers(): Promise<User[]> {
        return this.users;
    }

    /**
     * Get a user by id.
     *
     * @param id id of the user to get
     */
    public async getUserById(id: string): Promise<User | undefined> {
        return this.users.find(v => v.id === id);
    }

    /**
     * Add a user to the system.
     *
     * @param user user to add
     */
    public async addUser(user: User): Promise<User> {
        user.id = uuid();
        this.users.push(user);
        return user;
    }

    /**
     * Update the information about an user.
     *
     * @param id id of the user to update
     * @param user information of the user to update
     */
    public async updateUser(id: string, user: User): Promise<boolean> {
        if (id !== user.id) {
            return false;
        }

        let userFound = false;
        this.users = this.users.map(u => {
            if (u.id === id) {
                userFound = true;
                return user;
            }
            return u;
        });

        return userFound;
    }

    /**
     * Delete a specific user from the system.
     *
     * @param id id of the user to delete
     */
    public async deleteUser(id: string): Promise<boolean> {
        const len = this.users.length;
        this.users = this.users.filter(u => u.id !== id);
        return len > this.users.length;
    }
}

import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { User } from "../models/User";
import { randomUUID } from "crypto";

@Resolver()

export class UseResolver {
    private data: User[] = [];

    @Query(() => [User])
    async users() {
        return this.data
    }

    @Mutation(() => User)
    async createUser(
        @Arg('name') name: string
    ) {
        const user = { id: randomUUID().toString(), name }

        this.data.push(user)

        return user
    }
}
import { ApolloDriverConfig } from "@nestjs/apollo";
import { ConfigService } from "@nestjs/config";
import { Request, Response } from "express";

interface GraphQLContext {
    req: Request;
    res: Response;
}

export const getGraphQLConfig = (
    ConfigService: ConfigService
): ApolloDriverConfig => ({
    autoSchemaFile: true,
    sortSchema: true,
    playground: ConfigService.get<string>('MODE') === 'development',
    context: ({ req, res }: GraphQLContext): GraphQLContext => ({ req, res }),
})
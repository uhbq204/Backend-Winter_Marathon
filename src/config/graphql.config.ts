import { ApolloDriverConfig } from "@nestjs/apollo";
import { ConfigService } from "@nestjs/config";
import type { IGqlContext } from "src/app.interface";

export const getGraphQLConfig = (
    ConfigService: ConfigService
): ApolloDriverConfig => ({
    autoSchemaFile: true,
    sortSchema: true,
    playground: ConfigService.get<string>('MODE') === 'development',
    context: ({ req, res }: IGqlContext): IGqlContext => ({ req, res })
})
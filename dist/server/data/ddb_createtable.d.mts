export namespace params {
    const AttributeDefinitions: {
        AttributeName: string;
        AttributeType: string;
    }[];
    const KeySchema: {
        AttributeName: string;
        KeyType: string;
    }[];
    namespace ProvisionedThroughput {
        const ReadCapacityUnits: number;
        const WriteCapacityUnits: number;
    }
    const TableName: string;
    namespace StreamSpecification {
        const StreamEnabled: boolean;
    }
}
export function run(): Promise<import("@aws-sdk/client-dynamodb").CreateTableCommandOutput>;

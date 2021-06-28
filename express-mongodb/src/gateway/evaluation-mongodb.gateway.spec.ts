import { EvaluationGateway } from './evaluation-mongodb.gateway';
import { setupCollection, mongoCollectionMock, mongoDbConfiguration } from '../../tests/mocks/config/database/mongodb.config.mock'; 
import { newEvaluationEntity } from '../../tests/fixtures/gateway/entity/evaluation-entity.fixture';

describe('EvaluationMongoDBGateway - Unit Tests', () => {
    let gateway: EvaluationGateway;
    const randomUUID = '60ca91c80e1c3346e32b9798';

    beforeEach(() => {
        jest.clearAllMocks();
        jest.resetAllMocks();
        gateway = new EvaluationGateway(mongoDbConfiguration);
        setupCollection();
    });

    it('should find evaluation by id successfully', async () => {
        // given: theres data on collection
        mongoCollectionMock.findOne = jest.fn().mockResolvedValue(newEvaluationEntity(randomUUID));

        // when: finding evaluation by id
        const result = await gateway.findEvaluationById(randomUUID);

        // then: should return value
        expect(result).toBeDefined();
    });

});
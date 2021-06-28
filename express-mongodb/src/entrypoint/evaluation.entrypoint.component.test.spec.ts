import supertest from 'supertest';
import { IEvaluationEntity } from 'gateway/entity/evaluation-entity';
import { insertData } from '../../tests/utils/database-utils';
import { integrationTest } from '../../tests/utils/component-test';
import { newEvaluationEntity } from '../../tests/fixtures/gateway/entity/evaluation-entity.fixture';

integrationTest(
    {
        testSuiteName: 'EvaluationEntrypoint - Unit Tests',
        resetDatabaseAfterTests: true,
        dbName: 'yduqs-local'
    },
    (appContext) => {
        
        beforeEach(async () => {
            await insertData<IEvaluationEntity>('evaluation', [newEvaluationEntity('60ca91c80e1c3346e32b9798')]);
        });

        it('should get an evaluation by id sucessfully', (done) => {    
            supertest(appContext.getApplication()).get('/evaluation/60ca91c80e1c3346e32b9798').expect(200).then(result => {
                expect(result.body).toBeDefined();
                done();
            });
        });

        it('should save evaluation successfully', (done) => {
            supertest(appContext.getApplication()).post('/evaluation')
                                                  .send(newEvaluationEntity())
                                                  .expect(201, done);    
        });
    }
);
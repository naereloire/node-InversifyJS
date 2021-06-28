import { MongoDbConfiguration } from '../database/mongodb.config';
import { Container } from 'inversify';
import { IEvaluationGateway } from '../../usecase/interfaces/evaluation.gateway';
import { EvaluationGateway } from '../../gateway/evaluation-mongodb.gateway';
import { Identifiers } from './dependency-identifiers';
import { IConnectable } from 'config/connectable';

export class DependencyInjectionProvider {
    diContainer: Container;

    constructor() {}

    registerDependencies(): void {
        this.diContainer = new Container();
        this.registerSingletons();
        this.registerServices();
    }

    private registerSingletons(): void {
        this.diContainer.bind<IConnectable>(Identifiers.connectable).to(MongoDbConfiguration).inSingletonScope().whenTargetNamed(Identifiers.MongoDbConfiguration);
    }

    private registerServices(): void {
        this.diContainer.bind<IEvaluationGateway>(Identifiers.evaluationGateway).to(EvaluationGateway);
    }
}

const diConfig = new DependencyInjectionProvider();
export { diConfig };
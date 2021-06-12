import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BdEduiseDataSource} from '../datasources';
import {Type, TypeRelations} from '../models';

export class TypeRepository extends DefaultCrudRepository<
  Type,
  typeof Type.prototype.id,
  TypeRelations
> {
  constructor(
    @inject('datasources.bd_eduise') dataSource: BdEduiseDataSource,
  ) {
    super(Type, dataSource);
  }
}

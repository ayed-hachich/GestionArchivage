import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BdEduiseDataSource} from '../datasources';
import {Fichier, FichierRelations} from '../models';

export class FichierRepository extends DefaultCrudRepository<
  Fichier,
  typeof Fichier.prototype.id,
  FichierRelations
> {
  constructor(
    @inject('datasources.bd_eduise') dataSource: BdEduiseDataSource,
  ) {
    super(Fichier, dataSource);
  }
}

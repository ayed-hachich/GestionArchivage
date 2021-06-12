import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Fichier extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  nom_fichier?: string;

  @property({
    type: 'string',
  })
  societe?: string;

  @property({
    type: 'string',
  })
  type_fichier?: string;

  @property({
    type: 'string',
  })
  fichier?: string;

  @property({
    type: 'string',
  })
  extension?: string;

  @property({
    type: 'string',
  })
  date_installation?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Fichier>) {
    super(data);
  }
}

export interface FichierRelations {
  // describe navigational properties here
}

export type FichierWithRelations = Fichier & FichierRelations;

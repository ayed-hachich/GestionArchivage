import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Fichier} from '../models';
import {FichierRepository} from '../repositories';

export class FichierController {
  constructor(
    @repository(FichierRepository)
    public fichierRepository : FichierRepository,
  ) {}

  @post('/fichiers')
  @response(200, {
    description: 'Fichier model instance',
    content: {'application/json': {schema: getModelSchemaRef(Fichier)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Fichier, {
            title: 'NewFichier',
            exclude: ['id'],
          }),
        },
      },
    })
    fichier: Omit<Fichier, 'id'>,
  ): Promise<Fichier> {
    return this.fichierRepository.create(fichier);
  }

  @get('/fichiers/count')
  @response(200, {
    description: 'Fichier model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Fichier) where?: Where<Fichier>,
  ): Promise<Count> {
    return this.fichierRepository.count(where);
  }

  @get('/fichiers')
  @response(200, {
    description: 'Array of Fichier model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Fichier, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Fichier) filter?: Filter<Fichier>,
  ): Promise<Fichier[]> {
    return this.fichierRepository.find(filter);
  }

  @patch('/fichiers')
  @response(200, {
    description: 'Fichier PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Fichier, {partial: true}),
        },
      },
    })
    fichier: Fichier,
    @param.where(Fichier) where?: Where<Fichier>,
  ): Promise<Count> {
    return this.fichierRepository.updateAll(fichier, where);
  }

  @get('/fichiers/{id}')
  @response(200, {
    description: 'Fichier model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Fichier, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Fichier, {exclude: 'where'}) filter?: FilterExcludingWhere<Fichier>
  ): Promise<Fichier> {
    return this.fichierRepository.findById(id, filter);
  }

  @patch('/fichiers/{id}')
  @response(204, {
    description: 'Fichier PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Fichier, {partial: true}),
        },
      },
    })
    fichier: Fichier,
  ): Promise<void> {
    await this.fichierRepository.updateById(id, fichier);
  }

  @put('/fichiers/{id}')
  @response(204, {
    description: 'Fichier PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() fichier: Fichier,
  ): Promise<void> {
    await this.fichierRepository.replaceById(id, fichier);
  }

  @del('/fichiers/{id}')
  @response(204, {
    description: 'Fichier DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.fichierRepository.deleteById(id);
  }
}

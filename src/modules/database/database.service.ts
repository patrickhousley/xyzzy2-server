import { Component, Logger } from '@nestjs/common';
import {
  Connection,
  createConnection,
  EntityManager,
  ObjectType,
  Repository
} from 'typeorm';
import { DatabaseConfig } from './database.config';

@Component()
export class DatabaseService {
  /**
     * A Connection reference which is reused by all consumers of the database service
     */
  private _connection: Connection;

  /**
     * Abstract injection so it is possible to use several databases
     * @param databaseConfig
     */
  constructor(
    private readonly databaseConfig: DatabaseConfig,
    private readonly logger: Logger
  ) {}

  /**
     * An async getter for the Connection which creates the connection if needed.
     * @returns {Promise<Connection>}
     */
  private get connection(): Promise<Connection> {
    // return the connection if it's been created already
    if (this._connection) return Promise.resolve(this._connection);
    // otherwise create it
    return createConnection(this.databaseConfig.getConfiguration())
      .then(connection => {
        this._connection = connection;
        return connection;
      })
      .catch((error: Error) => {
        this.logger.error(error.message, error.stack);
        throw error;
      });
  }

  /**
     * An async getter for the entity manager.
     *
     * Connects to the database if needed and returns a reference to the EntityManager
     * @returns {Promise<EntityManager>}
     */
  public async getEntityManager(): Promise<EntityManager> {
    return (await this.connection).manager;
  }

  /**
     * An async getter for repositories.
     *
     * Connects to the database if needed and returns a reference to a Repository for the specified Entity
     * @param entityClassOrName
     * @returns {Promise<Repository<T>>}
     */
  public async getRepository<T>(
    entityClassOrName: ObjectType<T> | string
  ): Promise<Repository<T>> {
    return (await this.connection).getRepository<T>(entityClassOrName);
  }
}

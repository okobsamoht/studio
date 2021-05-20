import { RedisLock } from 'botpress/sdk'
import { injectable } from 'inversify'
import { Redis } from 'ioredis'
import moment from 'moment'

export interface JobService {
  /**
   * * In Botpress Pro, this allows to broadcast a job to execute to all distributed nodes.
   * It returns a function that returns a promise.
   * The promise will succeed if all nodes have run the job and will fail otherwise.
   *
   * * In Botpress CE, the function will be returned directly.
   * @param fn The function or "job" to execute
   * @param T The return type of the returned function
   */
  broadcast<T>(fn: Function): Promise<Function>
}

@injectable()
export class CEJobService implements JobService {
  private locks: { [key: string]: Date } = {}

  async broadcast<T>(fn: Function): Promise<Function> {
    return fn
  }
}
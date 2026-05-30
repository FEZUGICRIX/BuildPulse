
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model WorkType
 * 
 */
export type WorkType = $Result.DefaultSelection<Prisma.$WorkTypePayload>
/**
 * Model WorkLog
 * 
 */
export type WorkLog = $Result.DefaultSelection<Prisma.$WorkLogPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more WorkTypes
 * const workTypes = await prisma.workType.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more WorkTypes
   * const workTypes = await prisma.workType.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.workType`: Exposes CRUD operations for the **WorkType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkTypes
    * const workTypes = await prisma.workType.findMany()
    * ```
    */
  get workType(): Prisma.WorkTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workLog`: Exposes CRUD operations for the **WorkLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkLogs
    * const workLogs = await prisma.workLog.findMany()
    * ```
    */
  get workLog(): Prisma.WorkLogDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    WorkType: 'WorkType',
    WorkLog: 'WorkLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "workType" | "workLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      WorkType: {
        payload: Prisma.$WorkTypePayload<ExtArgs>
        fields: Prisma.WorkTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkTypePayload>
          }
          findFirst: {
            args: Prisma.WorkTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkTypePayload>
          }
          findMany: {
            args: Prisma.WorkTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkTypePayload>[]
          }
          create: {
            args: Prisma.WorkTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkTypePayload>
          }
          createMany: {
            args: Prisma.WorkTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkTypePayload>[]
          }
          delete: {
            args: Prisma.WorkTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkTypePayload>
          }
          update: {
            args: Prisma.WorkTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkTypePayload>
          }
          deleteMany: {
            args: Prisma.WorkTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkTypePayload>[]
          }
          upsert: {
            args: Prisma.WorkTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkTypePayload>
          }
          aggregate: {
            args: Prisma.WorkTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkType>
          }
          groupBy: {
            args: Prisma.WorkTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkTypeCountArgs<ExtArgs>
            result: $Utils.Optional<WorkTypeCountAggregateOutputType> | number
          }
        }
      }
      WorkLog: {
        payload: Prisma.$WorkLogPayload<ExtArgs>
        fields: Prisma.WorkLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkLogPayload>
          }
          findFirst: {
            args: Prisma.WorkLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkLogPayload>
          }
          findMany: {
            args: Prisma.WorkLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkLogPayload>[]
          }
          create: {
            args: Prisma.WorkLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkLogPayload>
          }
          createMany: {
            args: Prisma.WorkLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkLogPayload>[]
          }
          delete: {
            args: Prisma.WorkLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkLogPayload>
          }
          update: {
            args: Prisma.WorkLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkLogPayload>
          }
          deleteMany: {
            args: Prisma.WorkLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkLogPayload>[]
          }
          upsert: {
            args: Prisma.WorkLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkLogPayload>
          }
          aggregate: {
            args: Prisma.WorkLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkLog>
          }
          groupBy: {
            args: Prisma.WorkLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkLogCountArgs<ExtArgs>
            result: $Utils.Optional<WorkLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    workType?: WorkTypeOmit
    workLog?: WorkLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type WorkTypeCountOutputType
   */

  export type WorkTypeCountOutputType = {
    workLogs: number
  }

  export type WorkTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workLogs?: boolean | WorkTypeCountOutputTypeCountWorkLogsArgs
  }

  // Custom InputTypes
  /**
   * WorkTypeCountOutputType without action
   */
  export type WorkTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkTypeCountOutputType
     */
    select?: WorkTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkTypeCountOutputType without action
   */
  export type WorkTypeCountOutputTypeCountWorkLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model WorkType
   */

  export type AggregateWorkType = {
    _count: WorkTypeCountAggregateOutputType | null
    _min: WorkTypeMinAggregateOutputType | null
    _max: WorkTypeMaxAggregateOutputType | null
  }

  export type WorkTypeMinAggregateOutputType = {
    id: string | null
    name: string | null
    unit: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkTypeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    unit: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkTypeCountAggregateOutputType = {
    id: number
    name: number
    unit: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkTypeMinAggregateInputType = {
    id?: true
    name?: true
    unit?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkTypeMaxAggregateInputType = {
    id?: true
    name?: true
    unit?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkTypeCountAggregateInputType = {
    id?: true
    name?: true
    unit?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkType to aggregate.
     */
    where?: WorkTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkTypes to fetch.
     */
    orderBy?: WorkTypeOrderByWithRelationInput | WorkTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkTypes
    **/
    _count?: true | WorkTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkTypeMaxAggregateInputType
  }

  export type GetWorkTypeAggregateType<T extends WorkTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkType[P]>
      : GetScalarType<T[P], AggregateWorkType[P]>
  }




  export type WorkTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkTypeWhereInput
    orderBy?: WorkTypeOrderByWithAggregationInput | WorkTypeOrderByWithAggregationInput[]
    by: WorkTypeScalarFieldEnum[] | WorkTypeScalarFieldEnum
    having?: WorkTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkTypeCountAggregateInputType | true
    _min?: WorkTypeMinAggregateInputType
    _max?: WorkTypeMaxAggregateInputType
  }

  export type WorkTypeGroupByOutputType = {
    id: string
    name: string
    unit: string
    createdAt: Date
    updatedAt: Date
    _count: WorkTypeCountAggregateOutputType | null
    _min: WorkTypeMinAggregateOutputType | null
    _max: WorkTypeMaxAggregateOutputType | null
  }

  type GetWorkTypeGroupByPayload<T extends WorkTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkTypeGroupByOutputType[P]>
            : GetScalarType<T[P], WorkTypeGroupByOutputType[P]>
        }
      >
    >


  export type WorkTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    unit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workLogs?: boolean | WorkType$workLogsArgs<ExtArgs>
    _count?: boolean | WorkTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workType"]>

  export type WorkTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    unit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["workType"]>

  export type WorkTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    unit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["workType"]>

  export type WorkTypeSelectScalar = {
    id?: boolean
    name?: boolean
    unit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WorkTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "unit" | "createdAt" | "updatedAt", ExtArgs["result"]["workType"]>
  export type WorkTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workLogs?: boolean | WorkType$workLogsArgs<ExtArgs>
    _count?: boolean | WorkTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type WorkTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WorkTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkType"
    objects: {
      workLogs: Prisma.$WorkLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      unit: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["workType"]>
    composites: {}
  }

  type WorkTypeGetPayload<S extends boolean | null | undefined | WorkTypeDefaultArgs> = $Result.GetResult<Prisma.$WorkTypePayload, S>

  type WorkTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkTypeCountAggregateInputType | true
    }

  export interface WorkTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkType'], meta: { name: 'WorkType' } }
    /**
     * Find zero or one WorkType that matches the filter.
     * @param {WorkTypeFindUniqueArgs} args - Arguments to find a WorkType
     * @example
     * // Get one WorkType
     * const workType = await prisma.workType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkTypeFindUniqueArgs>(args: SelectSubset<T, WorkTypeFindUniqueArgs<ExtArgs>>): Prisma__WorkTypeClient<$Result.GetResult<Prisma.$WorkTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkTypeFindUniqueOrThrowArgs} args - Arguments to find a WorkType
     * @example
     * // Get one WorkType
     * const workType = await prisma.workType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkTypeClient<$Result.GetResult<Prisma.$WorkTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkTypeFindFirstArgs} args - Arguments to find a WorkType
     * @example
     * // Get one WorkType
     * const workType = await prisma.workType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkTypeFindFirstArgs>(args?: SelectSubset<T, WorkTypeFindFirstArgs<ExtArgs>>): Prisma__WorkTypeClient<$Result.GetResult<Prisma.$WorkTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkTypeFindFirstOrThrowArgs} args - Arguments to find a WorkType
     * @example
     * // Get one WorkType
     * const workType = await prisma.workType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkTypeClient<$Result.GetResult<Prisma.$WorkTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkTypes
     * const workTypes = await prisma.workType.findMany()
     * 
     * // Get first 10 WorkTypes
     * const workTypes = await prisma.workType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workTypeWithIdOnly = await prisma.workType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkTypeFindManyArgs>(args?: SelectSubset<T, WorkTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkType.
     * @param {WorkTypeCreateArgs} args - Arguments to create a WorkType.
     * @example
     * // Create one WorkType
     * const WorkType = await prisma.workType.create({
     *   data: {
     *     // ... data to create a WorkType
     *   }
     * })
     * 
     */
    create<T extends WorkTypeCreateArgs>(args: SelectSubset<T, WorkTypeCreateArgs<ExtArgs>>): Prisma__WorkTypeClient<$Result.GetResult<Prisma.$WorkTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkTypes.
     * @param {WorkTypeCreateManyArgs} args - Arguments to create many WorkTypes.
     * @example
     * // Create many WorkTypes
     * const workType = await prisma.workType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkTypeCreateManyArgs>(args?: SelectSubset<T, WorkTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkTypes and returns the data saved in the database.
     * @param {WorkTypeCreateManyAndReturnArgs} args - Arguments to create many WorkTypes.
     * @example
     * // Create many WorkTypes
     * const workType = await prisma.workType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkTypes and only return the `id`
     * const workTypeWithIdOnly = await prisma.workType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkType.
     * @param {WorkTypeDeleteArgs} args - Arguments to delete one WorkType.
     * @example
     * // Delete one WorkType
     * const WorkType = await prisma.workType.delete({
     *   where: {
     *     // ... filter to delete one WorkType
     *   }
     * })
     * 
     */
    delete<T extends WorkTypeDeleteArgs>(args: SelectSubset<T, WorkTypeDeleteArgs<ExtArgs>>): Prisma__WorkTypeClient<$Result.GetResult<Prisma.$WorkTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkType.
     * @param {WorkTypeUpdateArgs} args - Arguments to update one WorkType.
     * @example
     * // Update one WorkType
     * const workType = await prisma.workType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkTypeUpdateArgs>(args: SelectSubset<T, WorkTypeUpdateArgs<ExtArgs>>): Prisma__WorkTypeClient<$Result.GetResult<Prisma.$WorkTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkTypes.
     * @param {WorkTypeDeleteManyArgs} args - Arguments to filter WorkTypes to delete.
     * @example
     * // Delete a few WorkTypes
     * const { count } = await prisma.workType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkTypeDeleteManyArgs>(args?: SelectSubset<T, WorkTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkTypes
     * const workType = await prisma.workType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkTypeUpdateManyArgs>(args: SelectSubset<T, WorkTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkTypes and returns the data updated in the database.
     * @param {WorkTypeUpdateManyAndReturnArgs} args - Arguments to update many WorkTypes.
     * @example
     * // Update many WorkTypes
     * const workType = await prisma.workType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkTypes and only return the `id`
     * const workTypeWithIdOnly = await prisma.workType.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkType.
     * @param {WorkTypeUpsertArgs} args - Arguments to update or create a WorkType.
     * @example
     * // Update or create a WorkType
     * const workType = await prisma.workType.upsert({
     *   create: {
     *     // ... data to create a WorkType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkType we want to update
     *   }
     * })
     */
    upsert<T extends WorkTypeUpsertArgs>(args: SelectSubset<T, WorkTypeUpsertArgs<ExtArgs>>): Prisma__WorkTypeClient<$Result.GetResult<Prisma.$WorkTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkTypeCountArgs} args - Arguments to filter WorkTypes to count.
     * @example
     * // Count the number of WorkTypes
     * const count = await prisma.workType.count({
     *   where: {
     *     // ... the filter for the WorkTypes we want to count
     *   }
     * })
    **/
    count<T extends WorkTypeCountArgs>(
      args?: Subset<T, WorkTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkTypeAggregateArgs>(args: Subset<T, WorkTypeAggregateArgs>): Prisma.PrismaPromise<GetWorkTypeAggregateType<T>>

    /**
     * Group by WorkType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkTypeGroupByArgs['orderBy'] }
        : { orderBy?: WorkTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkType model
   */
  readonly fields: WorkTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workLogs<T extends WorkType$workLogsArgs<ExtArgs> = {}>(args?: Subset<T, WorkType$workLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkType model
   */
  interface WorkTypeFieldRefs {
    readonly id: FieldRef<"WorkType", 'String'>
    readonly name: FieldRef<"WorkType", 'String'>
    readonly unit: FieldRef<"WorkType", 'String'>
    readonly createdAt: FieldRef<"WorkType", 'DateTime'>
    readonly updatedAt: FieldRef<"WorkType", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkType findUnique
   */
  export type WorkTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkType
     */
    select?: WorkTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkType
     */
    omit?: WorkTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkTypeInclude<ExtArgs> | null
    /**
     * Filter, which WorkType to fetch.
     */
    where: WorkTypeWhereUniqueInput
  }

  /**
   * WorkType findUniqueOrThrow
   */
  export type WorkTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkType
     */
    select?: WorkTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkType
     */
    omit?: WorkTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkTypeInclude<ExtArgs> | null
    /**
     * Filter, which WorkType to fetch.
     */
    where: WorkTypeWhereUniqueInput
  }

  /**
   * WorkType findFirst
   */
  export type WorkTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkType
     */
    select?: WorkTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkType
     */
    omit?: WorkTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkTypeInclude<ExtArgs> | null
    /**
     * Filter, which WorkType to fetch.
     */
    where?: WorkTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkTypes to fetch.
     */
    orderBy?: WorkTypeOrderByWithRelationInput | WorkTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkTypes.
     */
    cursor?: WorkTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkTypes.
     */
    distinct?: WorkTypeScalarFieldEnum | WorkTypeScalarFieldEnum[]
  }

  /**
   * WorkType findFirstOrThrow
   */
  export type WorkTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkType
     */
    select?: WorkTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkType
     */
    omit?: WorkTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkTypeInclude<ExtArgs> | null
    /**
     * Filter, which WorkType to fetch.
     */
    where?: WorkTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkTypes to fetch.
     */
    orderBy?: WorkTypeOrderByWithRelationInput | WorkTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkTypes.
     */
    cursor?: WorkTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkTypes.
     */
    distinct?: WorkTypeScalarFieldEnum | WorkTypeScalarFieldEnum[]
  }

  /**
   * WorkType findMany
   */
  export type WorkTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkType
     */
    select?: WorkTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkType
     */
    omit?: WorkTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkTypeInclude<ExtArgs> | null
    /**
     * Filter, which WorkTypes to fetch.
     */
    where?: WorkTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkTypes to fetch.
     */
    orderBy?: WorkTypeOrderByWithRelationInput | WorkTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkTypes.
     */
    cursor?: WorkTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkTypes.
     */
    distinct?: WorkTypeScalarFieldEnum | WorkTypeScalarFieldEnum[]
  }

  /**
   * WorkType create
   */
  export type WorkTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkType
     */
    select?: WorkTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkType
     */
    omit?: WorkTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkType.
     */
    data: XOR<WorkTypeCreateInput, WorkTypeUncheckedCreateInput>
  }

  /**
   * WorkType createMany
   */
  export type WorkTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkTypes.
     */
    data: WorkTypeCreateManyInput | WorkTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkType createManyAndReturn
   */
  export type WorkTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkType
     */
    select?: WorkTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkType
     */
    omit?: WorkTypeOmit<ExtArgs> | null
    /**
     * The data used to create many WorkTypes.
     */
    data: WorkTypeCreateManyInput | WorkTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkType update
   */
  export type WorkTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkType
     */
    select?: WorkTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkType
     */
    omit?: WorkTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkType.
     */
    data: XOR<WorkTypeUpdateInput, WorkTypeUncheckedUpdateInput>
    /**
     * Choose, which WorkType to update.
     */
    where: WorkTypeWhereUniqueInput
  }

  /**
   * WorkType updateMany
   */
  export type WorkTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkTypes.
     */
    data: XOR<WorkTypeUpdateManyMutationInput, WorkTypeUncheckedUpdateManyInput>
    /**
     * Filter which WorkTypes to update
     */
    where?: WorkTypeWhereInput
    /**
     * Limit how many WorkTypes to update.
     */
    limit?: number
  }

  /**
   * WorkType updateManyAndReturn
   */
  export type WorkTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkType
     */
    select?: WorkTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkType
     */
    omit?: WorkTypeOmit<ExtArgs> | null
    /**
     * The data used to update WorkTypes.
     */
    data: XOR<WorkTypeUpdateManyMutationInput, WorkTypeUncheckedUpdateManyInput>
    /**
     * Filter which WorkTypes to update
     */
    where?: WorkTypeWhereInput
    /**
     * Limit how many WorkTypes to update.
     */
    limit?: number
  }

  /**
   * WorkType upsert
   */
  export type WorkTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkType
     */
    select?: WorkTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkType
     */
    omit?: WorkTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkType to update in case it exists.
     */
    where: WorkTypeWhereUniqueInput
    /**
     * In case the WorkType found by the `where` argument doesn't exist, create a new WorkType with this data.
     */
    create: XOR<WorkTypeCreateInput, WorkTypeUncheckedCreateInput>
    /**
     * In case the WorkType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkTypeUpdateInput, WorkTypeUncheckedUpdateInput>
  }

  /**
   * WorkType delete
   */
  export type WorkTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkType
     */
    select?: WorkTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkType
     */
    omit?: WorkTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkTypeInclude<ExtArgs> | null
    /**
     * Filter which WorkType to delete.
     */
    where: WorkTypeWhereUniqueInput
  }

  /**
   * WorkType deleteMany
   */
  export type WorkTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkTypes to delete
     */
    where?: WorkTypeWhereInput
    /**
     * Limit how many WorkTypes to delete.
     */
    limit?: number
  }

  /**
   * WorkType.workLogs
   */
  export type WorkType$workLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkLog
     */
    select?: WorkLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkLog
     */
    omit?: WorkLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkLogInclude<ExtArgs> | null
    where?: WorkLogWhereInput
    orderBy?: WorkLogOrderByWithRelationInput | WorkLogOrderByWithRelationInput[]
    cursor?: WorkLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkLogScalarFieldEnum | WorkLogScalarFieldEnum[]
  }

  /**
   * WorkType without action
   */
  export type WorkTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkType
     */
    select?: WorkTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkType
     */
    omit?: WorkTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkTypeInclude<ExtArgs> | null
  }


  /**
   * Model WorkLog
   */

  export type AggregateWorkLog = {
    _count: WorkLogCountAggregateOutputType | null
    _avg: WorkLogAvgAggregateOutputType | null
    _sum: WorkLogSumAggregateOutputType | null
    _min: WorkLogMinAggregateOutputType | null
    _max: WorkLogMaxAggregateOutputType | null
  }

  export type WorkLogAvgAggregateOutputType = {
    volume: Decimal | null
  }

  export type WorkLogSumAggregateOutputType = {
    volume: Decimal | null
  }

  export type WorkLogMinAggregateOutputType = {
    id: string | null
    date: Date | null
    workTypeId: string | null
    volume: Decimal | null
    executorName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkLogMaxAggregateOutputType = {
    id: string | null
    date: Date | null
    workTypeId: string | null
    volume: Decimal | null
    executorName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkLogCountAggregateOutputType = {
    id: number
    date: number
    workTypeId: number
    volume: number
    executorName: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkLogAvgAggregateInputType = {
    volume?: true
  }

  export type WorkLogSumAggregateInputType = {
    volume?: true
  }

  export type WorkLogMinAggregateInputType = {
    id?: true
    date?: true
    workTypeId?: true
    volume?: true
    executorName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkLogMaxAggregateInputType = {
    id?: true
    date?: true
    workTypeId?: true
    volume?: true
    executorName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkLogCountAggregateInputType = {
    id?: true
    date?: true
    workTypeId?: true
    volume?: true
    executorName?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkLog to aggregate.
     */
    where?: WorkLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkLogs to fetch.
     */
    orderBy?: WorkLogOrderByWithRelationInput | WorkLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkLogs
    **/
    _count?: true | WorkLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkLogMaxAggregateInputType
  }

  export type GetWorkLogAggregateType<T extends WorkLogAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkLog[P]>
      : GetScalarType<T[P], AggregateWorkLog[P]>
  }




  export type WorkLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkLogWhereInput
    orderBy?: WorkLogOrderByWithAggregationInput | WorkLogOrderByWithAggregationInput[]
    by: WorkLogScalarFieldEnum[] | WorkLogScalarFieldEnum
    having?: WorkLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkLogCountAggregateInputType | true
    _avg?: WorkLogAvgAggregateInputType
    _sum?: WorkLogSumAggregateInputType
    _min?: WorkLogMinAggregateInputType
    _max?: WorkLogMaxAggregateInputType
  }

  export type WorkLogGroupByOutputType = {
    id: string
    date: Date
    workTypeId: string
    volume: Decimal
    executorName: string
    createdAt: Date
    updatedAt: Date
    _count: WorkLogCountAggregateOutputType | null
    _avg: WorkLogAvgAggregateOutputType | null
    _sum: WorkLogSumAggregateOutputType | null
    _min: WorkLogMinAggregateOutputType | null
    _max: WorkLogMaxAggregateOutputType | null
  }

  type GetWorkLogGroupByPayload<T extends WorkLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkLogGroupByOutputType[P]>
            : GetScalarType<T[P], WorkLogGroupByOutputType[P]>
        }
      >
    >


  export type WorkLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    workTypeId?: boolean
    volume?: boolean
    executorName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workType?: boolean | WorkTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workLog"]>

  export type WorkLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    workTypeId?: boolean
    volume?: boolean
    executorName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workType?: boolean | WorkTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workLog"]>

  export type WorkLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    workTypeId?: boolean
    volume?: boolean
    executorName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workType?: boolean | WorkTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workLog"]>

  export type WorkLogSelectScalar = {
    id?: boolean
    date?: boolean
    workTypeId?: boolean
    volume?: boolean
    executorName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WorkLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "workTypeId" | "volume" | "executorName" | "createdAt" | "updatedAt", ExtArgs["result"]["workLog"]>
  export type WorkLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workType?: boolean | WorkTypeDefaultArgs<ExtArgs>
  }
  export type WorkLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workType?: boolean | WorkTypeDefaultArgs<ExtArgs>
  }
  export type WorkLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workType?: boolean | WorkTypeDefaultArgs<ExtArgs>
  }

  export type $WorkLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkLog"
    objects: {
      workType: Prisma.$WorkTypePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      date: Date
      workTypeId: string
      volume: Prisma.Decimal
      executorName: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["workLog"]>
    composites: {}
  }

  type WorkLogGetPayload<S extends boolean | null | undefined | WorkLogDefaultArgs> = $Result.GetResult<Prisma.$WorkLogPayload, S>

  type WorkLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkLogCountAggregateInputType | true
    }

  export interface WorkLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkLog'], meta: { name: 'WorkLog' } }
    /**
     * Find zero or one WorkLog that matches the filter.
     * @param {WorkLogFindUniqueArgs} args - Arguments to find a WorkLog
     * @example
     * // Get one WorkLog
     * const workLog = await prisma.workLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkLogFindUniqueArgs>(args: SelectSubset<T, WorkLogFindUniqueArgs<ExtArgs>>): Prisma__WorkLogClient<$Result.GetResult<Prisma.$WorkLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkLogFindUniqueOrThrowArgs} args - Arguments to find a WorkLog
     * @example
     * // Get one WorkLog
     * const workLog = await prisma.workLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkLogFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkLogClient<$Result.GetResult<Prisma.$WorkLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkLogFindFirstArgs} args - Arguments to find a WorkLog
     * @example
     * // Get one WorkLog
     * const workLog = await prisma.workLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkLogFindFirstArgs>(args?: SelectSubset<T, WorkLogFindFirstArgs<ExtArgs>>): Prisma__WorkLogClient<$Result.GetResult<Prisma.$WorkLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkLogFindFirstOrThrowArgs} args - Arguments to find a WorkLog
     * @example
     * // Get one WorkLog
     * const workLog = await prisma.workLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkLogFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkLogClient<$Result.GetResult<Prisma.$WorkLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkLogs
     * const workLogs = await prisma.workLog.findMany()
     * 
     * // Get first 10 WorkLogs
     * const workLogs = await prisma.workLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workLogWithIdOnly = await prisma.workLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkLogFindManyArgs>(args?: SelectSubset<T, WorkLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkLog.
     * @param {WorkLogCreateArgs} args - Arguments to create a WorkLog.
     * @example
     * // Create one WorkLog
     * const WorkLog = await prisma.workLog.create({
     *   data: {
     *     // ... data to create a WorkLog
     *   }
     * })
     * 
     */
    create<T extends WorkLogCreateArgs>(args: SelectSubset<T, WorkLogCreateArgs<ExtArgs>>): Prisma__WorkLogClient<$Result.GetResult<Prisma.$WorkLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkLogs.
     * @param {WorkLogCreateManyArgs} args - Arguments to create many WorkLogs.
     * @example
     * // Create many WorkLogs
     * const workLog = await prisma.workLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkLogCreateManyArgs>(args?: SelectSubset<T, WorkLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkLogs and returns the data saved in the database.
     * @param {WorkLogCreateManyAndReturnArgs} args - Arguments to create many WorkLogs.
     * @example
     * // Create many WorkLogs
     * const workLog = await prisma.workLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkLogs and only return the `id`
     * const workLogWithIdOnly = await prisma.workLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkLogCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkLog.
     * @param {WorkLogDeleteArgs} args - Arguments to delete one WorkLog.
     * @example
     * // Delete one WorkLog
     * const WorkLog = await prisma.workLog.delete({
     *   where: {
     *     // ... filter to delete one WorkLog
     *   }
     * })
     * 
     */
    delete<T extends WorkLogDeleteArgs>(args: SelectSubset<T, WorkLogDeleteArgs<ExtArgs>>): Prisma__WorkLogClient<$Result.GetResult<Prisma.$WorkLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkLog.
     * @param {WorkLogUpdateArgs} args - Arguments to update one WorkLog.
     * @example
     * // Update one WorkLog
     * const workLog = await prisma.workLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkLogUpdateArgs>(args: SelectSubset<T, WorkLogUpdateArgs<ExtArgs>>): Prisma__WorkLogClient<$Result.GetResult<Prisma.$WorkLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkLogs.
     * @param {WorkLogDeleteManyArgs} args - Arguments to filter WorkLogs to delete.
     * @example
     * // Delete a few WorkLogs
     * const { count } = await prisma.workLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkLogDeleteManyArgs>(args?: SelectSubset<T, WorkLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkLogs
     * const workLog = await prisma.workLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkLogUpdateManyArgs>(args: SelectSubset<T, WorkLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkLogs and returns the data updated in the database.
     * @param {WorkLogUpdateManyAndReturnArgs} args - Arguments to update many WorkLogs.
     * @example
     * // Update many WorkLogs
     * const workLog = await prisma.workLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkLogs and only return the `id`
     * const workLogWithIdOnly = await prisma.workLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkLogUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkLog.
     * @param {WorkLogUpsertArgs} args - Arguments to update or create a WorkLog.
     * @example
     * // Update or create a WorkLog
     * const workLog = await prisma.workLog.upsert({
     *   create: {
     *     // ... data to create a WorkLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkLog we want to update
     *   }
     * })
     */
    upsert<T extends WorkLogUpsertArgs>(args: SelectSubset<T, WorkLogUpsertArgs<ExtArgs>>): Prisma__WorkLogClient<$Result.GetResult<Prisma.$WorkLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkLogCountArgs} args - Arguments to filter WorkLogs to count.
     * @example
     * // Count the number of WorkLogs
     * const count = await prisma.workLog.count({
     *   where: {
     *     // ... the filter for the WorkLogs we want to count
     *   }
     * })
    **/
    count<T extends WorkLogCountArgs>(
      args?: Subset<T, WorkLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkLogAggregateArgs>(args: Subset<T, WorkLogAggregateArgs>): Prisma.PrismaPromise<GetWorkLogAggregateType<T>>

    /**
     * Group by WorkLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkLogGroupByArgs['orderBy'] }
        : { orderBy?: WorkLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkLog model
   */
  readonly fields: WorkLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workType<T extends WorkTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkTypeDefaultArgs<ExtArgs>>): Prisma__WorkTypeClient<$Result.GetResult<Prisma.$WorkTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkLog model
   */
  interface WorkLogFieldRefs {
    readonly id: FieldRef<"WorkLog", 'String'>
    readonly date: FieldRef<"WorkLog", 'DateTime'>
    readonly workTypeId: FieldRef<"WorkLog", 'String'>
    readonly volume: FieldRef<"WorkLog", 'Decimal'>
    readonly executorName: FieldRef<"WorkLog", 'String'>
    readonly createdAt: FieldRef<"WorkLog", 'DateTime'>
    readonly updatedAt: FieldRef<"WorkLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkLog findUnique
   */
  export type WorkLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkLog
     */
    select?: WorkLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkLog
     */
    omit?: WorkLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkLogInclude<ExtArgs> | null
    /**
     * Filter, which WorkLog to fetch.
     */
    where: WorkLogWhereUniqueInput
  }

  /**
   * WorkLog findUniqueOrThrow
   */
  export type WorkLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkLog
     */
    select?: WorkLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkLog
     */
    omit?: WorkLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkLogInclude<ExtArgs> | null
    /**
     * Filter, which WorkLog to fetch.
     */
    where: WorkLogWhereUniqueInput
  }

  /**
   * WorkLog findFirst
   */
  export type WorkLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkLog
     */
    select?: WorkLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkLog
     */
    omit?: WorkLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkLogInclude<ExtArgs> | null
    /**
     * Filter, which WorkLog to fetch.
     */
    where?: WorkLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkLogs to fetch.
     */
    orderBy?: WorkLogOrderByWithRelationInput | WorkLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkLogs.
     */
    cursor?: WorkLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkLogs.
     */
    distinct?: WorkLogScalarFieldEnum | WorkLogScalarFieldEnum[]
  }

  /**
   * WorkLog findFirstOrThrow
   */
  export type WorkLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkLog
     */
    select?: WorkLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkLog
     */
    omit?: WorkLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkLogInclude<ExtArgs> | null
    /**
     * Filter, which WorkLog to fetch.
     */
    where?: WorkLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkLogs to fetch.
     */
    orderBy?: WorkLogOrderByWithRelationInput | WorkLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkLogs.
     */
    cursor?: WorkLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkLogs.
     */
    distinct?: WorkLogScalarFieldEnum | WorkLogScalarFieldEnum[]
  }

  /**
   * WorkLog findMany
   */
  export type WorkLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkLog
     */
    select?: WorkLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkLog
     */
    omit?: WorkLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkLogInclude<ExtArgs> | null
    /**
     * Filter, which WorkLogs to fetch.
     */
    where?: WorkLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkLogs to fetch.
     */
    orderBy?: WorkLogOrderByWithRelationInput | WorkLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkLogs.
     */
    cursor?: WorkLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkLogs.
     */
    distinct?: WorkLogScalarFieldEnum | WorkLogScalarFieldEnum[]
  }

  /**
   * WorkLog create
   */
  export type WorkLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkLog
     */
    select?: WorkLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkLog
     */
    omit?: WorkLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkLogInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkLog.
     */
    data: XOR<WorkLogCreateInput, WorkLogUncheckedCreateInput>
  }

  /**
   * WorkLog createMany
   */
  export type WorkLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkLogs.
     */
    data: WorkLogCreateManyInput | WorkLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkLog createManyAndReturn
   */
  export type WorkLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkLog
     */
    select?: WorkLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkLog
     */
    omit?: WorkLogOmit<ExtArgs> | null
    /**
     * The data used to create many WorkLogs.
     */
    data: WorkLogCreateManyInput | WorkLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkLog update
   */
  export type WorkLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkLog
     */
    select?: WorkLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkLog
     */
    omit?: WorkLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkLogInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkLog.
     */
    data: XOR<WorkLogUpdateInput, WorkLogUncheckedUpdateInput>
    /**
     * Choose, which WorkLog to update.
     */
    where: WorkLogWhereUniqueInput
  }

  /**
   * WorkLog updateMany
   */
  export type WorkLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkLogs.
     */
    data: XOR<WorkLogUpdateManyMutationInput, WorkLogUncheckedUpdateManyInput>
    /**
     * Filter which WorkLogs to update
     */
    where?: WorkLogWhereInput
    /**
     * Limit how many WorkLogs to update.
     */
    limit?: number
  }

  /**
   * WorkLog updateManyAndReturn
   */
  export type WorkLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkLog
     */
    select?: WorkLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkLog
     */
    omit?: WorkLogOmit<ExtArgs> | null
    /**
     * The data used to update WorkLogs.
     */
    data: XOR<WorkLogUpdateManyMutationInput, WorkLogUncheckedUpdateManyInput>
    /**
     * Filter which WorkLogs to update
     */
    where?: WorkLogWhereInput
    /**
     * Limit how many WorkLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkLog upsert
   */
  export type WorkLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkLog
     */
    select?: WorkLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkLog
     */
    omit?: WorkLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkLogInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkLog to update in case it exists.
     */
    where: WorkLogWhereUniqueInput
    /**
     * In case the WorkLog found by the `where` argument doesn't exist, create a new WorkLog with this data.
     */
    create: XOR<WorkLogCreateInput, WorkLogUncheckedCreateInput>
    /**
     * In case the WorkLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkLogUpdateInput, WorkLogUncheckedUpdateInput>
  }

  /**
   * WorkLog delete
   */
  export type WorkLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkLog
     */
    select?: WorkLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkLog
     */
    omit?: WorkLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkLogInclude<ExtArgs> | null
    /**
     * Filter which WorkLog to delete.
     */
    where: WorkLogWhereUniqueInput
  }

  /**
   * WorkLog deleteMany
   */
  export type WorkLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkLogs to delete
     */
    where?: WorkLogWhereInput
    /**
     * Limit how many WorkLogs to delete.
     */
    limit?: number
  }

  /**
   * WorkLog without action
   */
  export type WorkLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkLog
     */
    select?: WorkLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkLog
     */
    omit?: WorkLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkLogInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const WorkTypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    unit: 'unit',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkTypeScalarFieldEnum = (typeof WorkTypeScalarFieldEnum)[keyof typeof WorkTypeScalarFieldEnum]


  export const WorkLogScalarFieldEnum: {
    id: 'id',
    date: 'date',
    workTypeId: 'workTypeId',
    volume: 'volume',
    executorName: 'executorName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkLogScalarFieldEnum = (typeof WorkLogScalarFieldEnum)[keyof typeof WorkLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type WorkTypeWhereInput = {
    AND?: WorkTypeWhereInput | WorkTypeWhereInput[]
    OR?: WorkTypeWhereInput[]
    NOT?: WorkTypeWhereInput | WorkTypeWhereInput[]
    id?: UuidFilter<"WorkType"> | string
    name?: StringFilter<"WorkType"> | string
    unit?: StringFilter<"WorkType"> | string
    createdAt?: DateTimeFilter<"WorkType"> | Date | string
    updatedAt?: DateTimeFilter<"WorkType"> | Date | string
    workLogs?: WorkLogListRelationFilter
  }

  export type WorkTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    unit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workLogs?: WorkLogOrderByRelationAggregateInput
  }

  export type WorkTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: WorkTypeWhereInput | WorkTypeWhereInput[]
    OR?: WorkTypeWhereInput[]
    NOT?: WorkTypeWhereInput | WorkTypeWhereInput[]
    unit?: StringFilter<"WorkType"> | string
    createdAt?: DateTimeFilter<"WorkType"> | Date | string
    updatedAt?: DateTimeFilter<"WorkType"> | Date | string
    workLogs?: WorkLogListRelationFilter
  }, "id" | "name">

  export type WorkTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    unit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorkTypeCountOrderByAggregateInput
    _max?: WorkTypeMaxOrderByAggregateInput
    _min?: WorkTypeMinOrderByAggregateInput
  }

  export type WorkTypeScalarWhereWithAggregatesInput = {
    AND?: WorkTypeScalarWhereWithAggregatesInput | WorkTypeScalarWhereWithAggregatesInput[]
    OR?: WorkTypeScalarWhereWithAggregatesInput[]
    NOT?: WorkTypeScalarWhereWithAggregatesInput | WorkTypeScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"WorkType"> | string
    name?: StringWithAggregatesFilter<"WorkType"> | string
    unit?: StringWithAggregatesFilter<"WorkType"> | string
    createdAt?: DateTimeWithAggregatesFilter<"WorkType"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WorkType"> | Date | string
  }

  export type WorkLogWhereInput = {
    AND?: WorkLogWhereInput | WorkLogWhereInput[]
    OR?: WorkLogWhereInput[]
    NOT?: WorkLogWhereInput | WorkLogWhereInput[]
    id?: UuidFilter<"WorkLog"> | string
    date?: DateTimeFilter<"WorkLog"> | Date | string
    workTypeId?: UuidFilter<"WorkLog"> | string
    volume?: DecimalFilter<"WorkLog"> | Decimal | DecimalJsLike | number | string
    executorName?: StringFilter<"WorkLog"> | string
    createdAt?: DateTimeFilter<"WorkLog"> | Date | string
    updatedAt?: DateTimeFilter<"WorkLog"> | Date | string
    workType?: XOR<WorkTypeScalarRelationFilter, WorkTypeWhereInput>
  }

  export type WorkLogOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    workTypeId?: SortOrder
    volume?: SortOrder
    executorName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workType?: WorkTypeOrderByWithRelationInput
  }

  export type WorkLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkLogWhereInput | WorkLogWhereInput[]
    OR?: WorkLogWhereInput[]
    NOT?: WorkLogWhereInput | WorkLogWhereInput[]
    date?: DateTimeFilter<"WorkLog"> | Date | string
    workTypeId?: UuidFilter<"WorkLog"> | string
    volume?: DecimalFilter<"WorkLog"> | Decimal | DecimalJsLike | number | string
    executorName?: StringFilter<"WorkLog"> | string
    createdAt?: DateTimeFilter<"WorkLog"> | Date | string
    updatedAt?: DateTimeFilter<"WorkLog"> | Date | string
    workType?: XOR<WorkTypeScalarRelationFilter, WorkTypeWhereInput>
  }, "id">

  export type WorkLogOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    workTypeId?: SortOrder
    volume?: SortOrder
    executorName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorkLogCountOrderByAggregateInput
    _avg?: WorkLogAvgOrderByAggregateInput
    _max?: WorkLogMaxOrderByAggregateInput
    _min?: WorkLogMinOrderByAggregateInput
    _sum?: WorkLogSumOrderByAggregateInput
  }

  export type WorkLogScalarWhereWithAggregatesInput = {
    AND?: WorkLogScalarWhereWithAggregatesInput | WorkLogScalarWhereWithAggregatesInput[]
    OR?: WorkLogScalarWhereWithAggregatesInput[]
    NOT?: WorkLogScalarWhereWithAggregatesInput | WorkLogScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"WorkLog"> | string
    date?: DateTimeWithAggregatesFilter<"WorkLog"> | Date | string
    workTypeId?: UuidWithAggregatesFilter<"WorkLog"> | string
    volume?: DecimalWithAggregatesFilter<"WorkLog"> | Decimal | DecimalJsLike | number | string
    executorName?: StringWithAggregatesFilter<"WorkLog"> | string
    createdAt?: DateTimeWithAggregatesFilter<"WorkLog"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WorkLog"> | Date | string
  }

  export type WorkTypeCreateInput = {
    id?: string
    name: string
    unit: string
    createdAt?: Date | string
    updatedAt?: Date | string
    workLogs?: WorkLogCreateNestedManyWithoutWorkTypeInput
  }

  export type WorkTypeUncheckedCreateInput = {
    id?: string
    name: string
    unit: string
    createdAt?: Date | string
    updatedAt?: Date | string
    workLogs?: WorkLogUncheckedCreateNestedManyWithoutWorkTypeInput
  }

  export type WorkTypeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workLogs?: WorkLogUpdateManyWithoutWorkTypeNestedInput
  }

  export type WorkTypeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workLogs?: WorkLogUncheckedUpdateManyWithoutWorkTypeNestedInput
  }

  export type WorkTypeCreateManyInput = {
    id?: string
    name: string
    unit: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkTypeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkTypeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkLogCreateInput = {
    id?: string
    date: Date | string
    volume: Decimal | DecimalJsLike | number | string
    executorName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    workType: WorkTypeCreateNestedOneWithoutWorkLogsInput
  }

  export type WorkLogUncheckedCreateInput = {
    id?: string
    date: Date | string
    workTypeId: string
    volume: Decimal | DecimalJsLike | number | string
    executorName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    volume?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    executorName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workType?: WorkTypeUpdateOneRequiredWithoutWorkLogsNestedInput
  }

  export type WorkLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    workTypeId?: StringFieldUpdateOperationsInput | string
    volume?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    executorName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkLogCreateManyInput = {
    id?: string
    date: Date | string
    workTypeId: string
    volume: Decimal | DecimalJsLike | number | string
    executorName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    volume?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    executorName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    workTypeId?: StringFieldUpdateOperationsInput | string
    volume?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    executorName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type WorkLogListRelationFilter = {
    every?: WorkLogWhereInput
    some?: WorkLogWhereInput
    none?: WorkLogWhereInput
  }

  export type WorkLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    unit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    unit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    unit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type WorkTypeScalarRelationFilter = {
    is?: WorkTypeWhereInput
    isNot?: WorkTypeWhereInput
  }

  export type WorkLogCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    workTypeId?: SortOrder
    volume?: SortOrder
    executorName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkLogAvgOrderByAggregateInput = {
    volume?: SortOrder
  }

  export type WorkLogMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    workTypeId?: SortOrder
    volume?: SortOrder
    executorName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkLogMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    workTypeId?: SortOrder
    volume?: SortOrder
    executorName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkLogSumOrderByAggregateInput = {
    volume?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type WorkLogCreateNestedManyWithoutWorkTypeInput = {
    create?: XOR<WorkLogCreateWithoutWorkTypeInput, WorkLogUncheckedCreateWithoutWorkTypeInput> | WorkLogCreateWithoutWorkTypeInput[] | WorkLogUncheckedCreateWithoutWorkTypeInput[]
    connectOrCreate?: WorkLogCreateOrConnectWithoutWorkTypeInput | WorkLogCreateOrConnectWithoutWorkTypeInput[]
    createMany?: WorkLogCreateManyWorkTypeInputEnvelope
    connect?: WorkLogWhereUniqueInput | WorkLogWhereUniqueInput[]
  }

  export type WorkLogUncheckedCreateNestedManyWithoutWorkTypeInput = {
    create?: XOR<WorkLogCreateWithoutWorkTypeInput, WorkLogUncheckedCreateWithoutWorkTypeInput> | WorkLogCreateWithoutWorkTypeInput[] | WorkLogUncheckedCreateWithoutWorkTypeInput[]
    connectOrCreate?: WorkLogCreateOrConnectWithoutWorkTypeInput | WorkLogCreateOrConnectWithoutWorkTypeInput[]
    createMany?: WorkLogCreateManyWorkTypeInputEnvelope
    connect?: WorkLogWhereUniqueInput | WorkLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type WorkLogUpdateManyWithoutWorkTypeNestedInput = {
    create?: XOR<WorkLogCreateWithoutWorkTypeInput, WorkLogUncheckedCreateWithoutWorkTypeInput> | WorkLogCreateWithoutWorkTypeInput[] | WorkLogUncheckedCreateWithoutWorkTypeInput[]
    connectOrCreate?: WorkLogCreateOrConnectWithoutWorkTypeInput | WorkLogCreateOrConnectWithoutWorkTypeInput[]
    upsert?: WorkLogUpsertWithWhereUniqueWithoutWorkTypeInput | WorkLogUpsertWithWhereUniqueWithoutWorkTypeInput[]
    createMany?: WorkLogCreateManyWorkTypeInputEnvelope
    set?: WorkLogWhereUniqueInput | WorkLogWhereUniqueInput[]
    disconnect?: WorkLogWhereUniqueInput | WorkLogWhereUniqueInput[]
    delete?: WorkLogWhereUniqueInput | WorkLogWhereUniqueInput[]
    connect?: WorkLogWhereUniqueInput | WorkLogWhereUniqueInput[]
    update?: WorkLogUpdateWithWhereUniqueWithoutWorkTypeInput | WorkLogUpdateWithWhereUniqueWithoutWorkTypeInput[]
    updateMany?: WorkLogUpdateManyWithWhereWithoutWorkTypeInput | WorkLogUpdateManyWithWhereWithoutWorkTypeInput[]
    deleteMany?: WorkLogScalarWhereInput | WorkLogScalarWhereInput[]
  }

  export type WorkLogUncheckedUpdateManyWithoutWorkTypeNestedInput = {
    create?: XOR<WorkLogCreateWithoutWorkTypeInput, WorkLogUncheckedCreateWithoutWorkTypeInput> | WorkLogCreateWithoutWorkTypeInput[] | WorkLogUncheckedCreateWithoutWorkTypeInput[]
    connectOrCreate?: WorkLogCreateOrConnectWithoutWorkTypeInput | WorkLogCreateOrConnectWithoutWorkTypeInput[]
    upsert?: WorkLogUpsertWithWhereUniqueWithoutWorkTypeInput | WorkLogUpsertWithWhereUniqueWithoutWorkTypeInput[]
    createMany?: WorkLogCreateManyWorkTypeInputEnvelope
    set?: WorkLogWhereUniqueInput | WorkLogWhereUniqueInput[]
    disconnect?: WorkLogWhereUniqueInput | WorkLogWhereUniqueInput[]
    delete?: WorkLogWhereUniqueInput | WorkLogWhereUniqueInput[]
    connect?: WorkLogWhereUniqueInput | WorkLogWhereUniqueInput[]
    update?: WorkLogUpdateWithWhereUniqueWithoutWorkTypeInput | WorkLogUpdateWithWhereUniqueWithoutWorkTypeInput[]
    updateMany?: WorkLogUpdateManyWithWhereWithoutWorkTypeInput | WorkLogUpdateManyWithWhereWithoutWorkTypeInput[]
    deleteMany?: WorkLogScalarWhereInput | WorkLogScalarWhereInput[]
  }

  export type WorkTypeCreateNestedOneWithoutWorkLogsInput = {
    create?: XOR<WorkTypeCreateWithoutWorkLogsInput, WorkTypeUncheckedCreateWithoutWorkLogsInput>
    connectOrCreate?: WorkTypeCreateOrConnectWithoutWorkLogsInput
    connect?: WorkTypeWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type WorkTypeUpdateOneRequiredWithoutWorkLogsNestedInput = {
    create?: XOR<WorkTypeCreateWithoutWorkLogsInput, WorkTypeUncheckedCreateWithoutWorkLogsInput>
    connectOrCreate?: WorkTypeCreateOrConnectWithoutWorkLogsInput
    upsert?: WorkTypeUpsertWithoutWorkLogsInput
    connect?: WorkTypeWhereUniqueInput
    update?: XOR<XOR<WorkTypeUpdateToOneWithWhereWithoutWorkLogsInput, WorkTypeUpdateWithoutWorkLogsInput>, WorkTypeUncheckedUpdateWithoutWorkLogsInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type WorkLogCreateWithoutWorkTypeInput = {
    id?: string
    date: Date | string
    volume: Decimal | DecimalJsLike | number | string
    executorName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkLogUncheckedCreateWithoutWorkTypeInput = {
    id?: string
    date: Date | string
    volume: Decimal | DecimalJsLike | number | string
    executorName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkLogCreateOrConnectWithoutWorkTypeInput = {
    where: WorkLogWhereUniqueInput
    create: XOR<WorkLogCreateWithoutWorkTypeInput, WorkLogUncheckedCreateWithoutWorkTypeInput>
  }

  export type WorkLogCreateManyWorkTypeInputEnvelope = {
    data: WorkLogCreateManyWorkTypeInput | WorkLogCreateManyWorkTypeInput[]
    skipDuplicates?: boolean
  }

  export type WorkLogUpsertWithWhereUniqueWithoutWorkTypeInput = {
    where: WorkLogWhereUniqueInput
    update: XOR<WorkLogUpdateWithoutWorkTypeInput, WorkLogUncheckedUpdateWithoutWorkTypeInput>
    create: XOR<WorkLogCreateWithoutWorkTypeInput, WorkLogUncheckedCreateWithoutWorkTypeInput>
  }

  export type WorkLogUpdateWithWhereUniqueWithoutWorkTypeInput = {
    where: WorkLogWhereUniqueInput
    data: XOR<WorkLogUpdateWithoutWorkTypeInput, WorkLogUncheckedUpdateWithoutWorkTypeInput>
  }

  export type WorkLogUpdateManyWithWhereWithoutWorkTypeInput = {
    where: WorkLogScalarWhereInput
    data: XOR<WorkLogUpdateManyMutationInput, WorkLogUncheckedUpdateManyWithoutWorkTypeInput>
  }

  export type WorkLogScalarWhereInput = {
    AND?: WorkLogScalarWhereInput | WorkLogScalarWhereInput[]
    OR?: WorkLogScalarWhereInput[]
    NOT?: WorkLogScalarWhereInput | WorkLogScalarWhereInput[]
    id?: UuidFilter<"WorkLog"> | string
    date?: DateTimeFilter<"WorkLog"> | Date | string
    workTypeId?: UuidFilter<"WorkLog"> | string
    volume?: DecimalFilter<"WorkLog"> | Decimal | DecimalJsLike | number | string
    executorName?: StringFilter<"WorkLog"> | string
    createdAt?: DateTimeFilter<"WorkLog"> | Date | string
    updatedAt?: DateTimeFilter<"WorkLog"> | Date | string
  }

  export type WorkTypeCreateWithoutWorkLogsInput = {
    id?: string
    name: string
    unit: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkTypeUncheckedCreateWithoutWorkLogsInput = {
    id?: string
    name: string
    unit: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkTypeCreateOrConnectWithoutWorkLogsInput = {
    where: WorkTypeWhereUniqueInput
    create: XOR<WorkTypeCreateWithoutWorkLogsInput, WorkTypeUncheckedCreateWithoutWorkLogsInput>
  }

  export type WorkTypeUpsertWithoutWorkLogsInput = {
    update: XOR<WorkTypeUpdateWithoutWorkLogsInput, WorkTypeUncheckedUpdateWithoutWorkLogsInput>
    create: XOR<WorkTypeCreateWithoutWorkLogsInput, WorkTypeUncheckedCreateWithoutWorkLogsInput>
    where?: WorkTypeWhereInput
  }

  export type WorkTypeUpdateToOneWithWhereWithoutWorkLogsInput = {
    where?: WorkTypeWhereInput
    data: XOR<WorkTypeUpdateWithoutWorkLogsInput, WorkTypeUncheckedUpdateWithoutWorkLogsInput>
  }

  export type WorkTypeUpdateWithoutWorkLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkTypeUncheckedUpdateWithoutWorkLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkLogCreateManyWorkTypeInput = {
    id?: string
    date: Date | string
    volume: Decimal | DecimalJsLike | number | string
    executorName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkLogUpdateWithoutWorkTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    volume?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    executorName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkLogUncheckedUpdateWithoutWorkTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    volume?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    executorName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkLogUncheckedUpdateManyWithoutWorkTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    volume?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    executorName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
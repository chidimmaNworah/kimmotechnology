
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model abouts
 * 
 */
export type abouts = $Result.DefaultSelection<Prisma.$aboutsPayload>
/**
 * Model career_categories
 * 
 */
export type career_categories = $Result.DefaultSelection<Prisma.$career_categoriesPayload>
/**
 * Model careers
 * 
 */
export type careers = $Result.DefaultSelection<Prisma.$careersPayload>
/**
 * Model categories
 * 
 */
export type categories = $Result.DefaultSelection<Prisma.$categoriesPayload>
/**
 * Model comments
 * 
 */
export type comments = $Result.DefaultSelection<Prisma.$commentsPayload>
/**
 * Model expertise
 * 
 */
export type expertise = $Result.DefaultSelection<Prisma.$expertisePayload>
/**
 * Model jobs
 * 
 */
export type jobs = $Result.DefaultSelection<Prisma.$jobsPayload>
/**
 * Model messages
 * 
 */
export type messages = $Result.DefaultSelection<Prisma.$messagesPayload>
/**
 * Model newsletters
 * 
 */
export type newsletters = $Result.DefaultSelection<Prisma.$newslettersPayload>
/**
 * Model projects
 * 
 */
export type projects = $Result.DefaultSelection<Prisma.$projectsPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Abouts
 * const abouts = await prisma.abouts.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more Abouts
   * const abouts = await prisma.abouts.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.abouts`: Exposes CRUD operations for the **abouts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Abouts
    * const abouts = await prisma.abouts.findMany()
    * ```
    */
  get abouts(): Prisma.aboutsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.career_categories`: Exposes CRUD operations for the **career_categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Career_categories
    * const career_categories = await prisma.career_categories.findMany()
    * ```
    */
  get career_categories(): Prisma.career_categoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.careers`: Exposes CRUD operations for the **careers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Careers
    * const careers = await prisma.careers.findMany()
    * ```
    */
  get careers(): Prisma.careersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categories`: Exposes CRUD operations for the **categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categories.findMany()
    * ```
    */
  get categories(): Prisma.categoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comments`: Exposes CRUD operations for the **comments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comments.findMany()
    * ```
    */
  get comments(): Prisma.commentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.expertise`: Exposes CRUD operations for the **expertise** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Expertise
    * const expertise = await prisma.expertise.findMany()
    * ```
    */
  get expertise(): Prisma.expertiseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jobs`: Exposes CRUD operations for the **jobs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jobs
    * const jobs = await prisma.jobs.findMany()
    * ```
    */
  get jobs(): Prisma.jobsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.messages`: Exposes CRUD operations for the **messages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.messages.findMany()
    * ```
    */
  get messages(): Prisma.messagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.newsletters`: Exposes CRUD operations for the **newsletters** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Newsletters
    * const newsletters = await prisma.newsletters.findMany()
    * ```
    */
  get newsletters(): Prisma.newslettersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projects`: Exposes CRUD operations for the **projects** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.projects.findMany()
    * ```
    */
  get projects(): Prisma.projectsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.18.0
   * Query Engine version: 34b5a692b7bd79939a9a2c3ef97d816e749cda2f
   */
  export type PrismaVersion = {
    client: string
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
    abouts: 'abouts',
    career_categories: 'career_categories',
    careers: 'careers',
    categories: 'categories',
    comments: 'comments',
    expertise: 'expertise',
    jobs: 'jobs',
    messages: 'messages',
    newsletters: 'newsletters',
    projects: 'projects',
    users: 'users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "abouts" | "career_categories" | "careers" | "categories" | "comments" | "expertise" | "jobs" | "messages" | "newsletters" | "projects" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      abouts: {
        payload: Prisma.$aboutsPayload<ExtArgs>
        fields: Prisma.aboutsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.aboutsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aboutsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.aboutsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aboutsPayload>
          }
          findFirst: {
            args: Prisma.aboutsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aboutsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.aboutsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aboutsPayload>
          }
          findMany: {
            args: Prisma.aboutsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aboutsPayload>[]
          }
          create: {
            args: Prisma.aboutsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aboutsPayload>
          }
          createMany: {
            args: Prisma.aboutsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.aboutsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aboutsPayload>[]
          }
          delete: {
            args: Prisma.aboutsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aboutsPayload>
          }
          update: {
            args: Prisma.aboutsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aboutsPayload>
          }
          deleteMany: {
            args: Prisma.aboutsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.aboutsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.aboutsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aboutsPayload>[]
          }
          upsert: {
            args: Prisma.aboutsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aboutsPayload>
          }
          aggregate: {
            args: Prisma.AboutsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAbouts>
          }
          groupBy: {
            args: Prisma.aboutsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AboutsGroupByOutputType>[]
          }
          count: {
            args: Prisma.aboutsCountArgs<ExtArgs>
            result: $Utils.Optional<AboutsCountAggregateOutputType> | number
          }
        }
      }
      career_categories: {
        payload: Prisma.$career_categoriesPayload<ExtArgs>
        fields: Prisma.career_categoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.career_categoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$career_categoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.career_categoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$career_categoriesPayload>
          }
          findFirst: {
            args: Prisma.career_categoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$career_categoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.career_categoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$career_categoriesPayload>
          }
          findMany: {
            args: Prisma.career_categoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$career_categoriesPayload>[]
          }
          create: {
            args: Prisma.career_categoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$career_categoriesPayload>
          }
          createMany: {
            args: Prisma.career_categoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.career_categoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$career_categoriesPayload>[]
          }
          delete: {
            args: Prisma.career_categoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$career_categoriesPayload>
          }
          update: {
            args: Prisma.career_categoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$career_categoriesPayload>
          }
          deleteMany: {
            args: Prisma.career_categoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.career_categoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.career_categoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$career_categoriesPayload>[]
          }
          upsert: {
            args: Prisma.career_categoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$career_categoriesPayload>
          }
          aggregate: {
            args: Prisma.Career_categoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCareer_categories>
          }
          groupBy: {
            args: Prisma.career_categoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Career_categoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.career_categoriesCountArgs<ExtArgs>
            result: $Utils.Optional<Career_categoriesCountAggregateOutputType> | number
          }
        }
      }
      careers: {
        payload: Prisma.$careersPayload<ExtArgs>
        fields: Prisma.careersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.careersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$careersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.careersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$careersPayload>
          }
          findFirst: {
            args: Prisma.careersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$careersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.careersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$careersPayload>
          }
          findMany: {
            args: Prisma.careersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$careersPayload>[]
          }
          create: {
            args: Prisma.careersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$careersPayload>
          }
          createMany: {
            args: Prisma.careersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.careersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$careersPayload>[]
          }
          delete: {
            args: Prisma.careersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$careersPayload>
          }
          update: {
            args: Prisma.careersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$careersPayload>
          }
          deleteMany: {
            args: Prisma.careersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.careersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.careersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$careersPayload>[]
          }
          upsert: {
            args: Prisma.careersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$careersPayload>
          }
          aggregate: {
            args: Prisma.CareersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCareers>
          }
          groupBy: {
            args: Prisma.careersGroupByArgs<ExtArgs>
            result: $Utils.Optional<CareersGroupByOutputType>[]
          }
          count: {
            args: Prisma.careersCountArgs<ExtArgs>
            result: $Utils.Optional<CareersCountAggregateOutputType> | number
          }
        }
      }
      categories: {
        payload: Prisma.$categoriesPayload<ExtArgs>
        fields: Prisma.categoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          findFirst: {
            args: Prisma.categoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          findMany: {
            args: Prisma.categoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          create: {
            args: Prisma.categoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          createMany: {
            args: Prisma.categoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.categoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          delete: {
            args: Prisma.categoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          update: {
            args: Prisma.categoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          deleteMany: {
            args: Prisma.categoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.categoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          upsert: {
            args: Prisma.categoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          aggregate: {
            args: Prisma.CategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategories>
          }
          groupBy: {
            args: Prisma.categoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoriesCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriesCountAggregateOutputType> | number
          }
        }
      }
      comments: {
        payload: Prisma.$commentsPayload<ExtArgs>
        fields: Prisma.commentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.commentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.commentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          findFirst: {
            args: Prisma.commentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.commentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          findMany: {
            args: Prisma.commentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>[]
          }
          create: {
            args: Prisma.commentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          createMany: {
            args: Prisma.commentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.commentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>[]
          }
          delete: {
            args: Prisma.commentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          update: {
            args: Prisma.commentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          deleteMany: {
            args: Prisma.commentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.commentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.commentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>[]
          }
          upsert: {
            args: Prisma.commentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          aggregate: {
            args: Prisma.CommentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComments>
          }
          groupBy: {
            args: Prisma.commentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.commentsCountArgs<ExtArgs>
            result: $Utils.Optional<CommentsCountAggregateOutputType> | number
          }
        }
      }
      expertise: {
        payload: Prisma.$expertisePayload<ExtArgs>
        fields: Prisma.expertiseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.expertiseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expertisePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.expertiseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expertisePayload>
          }
          findFirst: {
            args: Prisma.expertiseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expertisePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.expertiseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expertisePayload>
          }
          findMany: {
            args: Prisma.expertiseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expertisePayload>[]
          }
          create: {
            args: Prisma.expertiseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expertisePayload>
          }
          createMany: {
            args: Prisma.expertiseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.expertiseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expertisePayload>[]
          }
          delete: {
            args: Prisma.expertiseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expertisePayload>
          }
          update: {
            args: Prisma.expertiseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expertisePayload>
          }
          deleteMany: {
            args: Prisma.expertiseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.expertiseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.expertiseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expertisePayload>[]
          }
          upsert: {
            args: Prisma.expertiseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expertisePayload>
          }
          aggregate: {
            args: Prisma.ExpertiseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpertise>
          }
          groupBy: {
            args: Prisma.expertiseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpertiseGroupByOutputType>[]
          }
          count: {
            args: Prisma.expertiseCountArgs<ExtArgs>
            result: $Utils.Optional<ExpertiseCountAggregateOutputType> | number
          }
        }
      }
      jobs: {
        payload: Prisma.$jobsPayload<ExtArgs>
        fields: Prisma.jobsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.jobsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.jobsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>
          }
          findFirst: {
            args: Prisma.jobsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.jobsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>
          }
          findMany: {
            args: Prisma.jobsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>[]
          }
          create: {
            args: Prisma.jobsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>
          }
          createMany: {
            args: Prisma.jobsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.jobsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>[]
          }
          delete: {
            args: Prisma.jobsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>
          }
          update: {
            args: Prisma.jobsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>
          }
          deleteMany: {
            args: Prisma.jobsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.jobsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.jobsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>[]
          }
          upsert: {
            args: Prisma.jobsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>
          }
          aggregate: {
            args: Prisma.JobsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobs>
          }
          groupBy: {
            args: Prisma.jobsGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobsGroupByOutputType>[]
          }
          count: {
            args: Prisma.jobsCountArgs<ExtArgs>
            result: $Utils.Optional<JobsCountAggregateOutputType> | number
          }
        }
      }
      messages: {
        payload: Prisma.$messagesPayload<ExtArgs>
        fields: Prisma.messagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.messagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.messagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          findFirst: {
            args: Prisma.messagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.messagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          findMany: {
            args: Prisma.messagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>[]
          }
          create: {
            args: Prisma.messagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          createMany: {
            args: Prisma.messagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.messagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>[]
          }
          delete: {
            args: Prisma.messagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          update: {
            args: Prisma.messagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          deleteMany: {
            args: Prisma.messagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.messagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.messagesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>[]
          }
          upsert: {
            args: Prisma.messagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          aggregate: {
            args: Prisma.MessagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessages>
          }
          groupBy: {
            args: Prisma.messagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.messagesCountArgs<ExtArgs>
            result: $Utils.Optional<MessagesCountAggregateOutputType> | number
          }
        }
      }
      newsletters: {
        payload: Prisma.$newslettersPayload<ExtArgs>
        fields: Prisma.newslettersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.newslettersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$newslettersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.newslettersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$newslettersPayload>
          }
          findFirst: {
            args: Prisma.newslettersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$newslettersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.newslettersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$newslettersPayload>
          }
          findMany: {
            args: Prisma.newslettersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$newslettersPayload>[]
          }
          create: {
            args: Prisma.newslettersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$newslettersPayload>
          }
          createMany: {
            args: Prisma.newslettersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.newslettersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$newslettersPayload>[]
          }
          delete: {
            args: Prisma.newslettersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$newslettersPayload>
          }
          update: {
            args: Prisma.newslettersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$newslettersPayload>
          }
          deleteMany: {
            args: Prisma.newslettersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.newslettersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.newslettersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$newslettersPayload>[]
          }
          upsert: {
            args: Prisma.newslettersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$newslettersPayload>
          }
          aggregate: {
            args: Prisma.NewslettersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNewsletters>
          }
          groupBy: {
            args: Prisma.newslettersGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewslettersGroupByOutputType>[]
          }
          count: {
            args: Prisma.newslettersCountArgs<ExtArgs>
            result: $Utils.Optional<NewslettersCountAggregateOutputType> | number
          }
        }
      }
      projects: {
        payload: Prisma.$projectsPayload<ExtArgs>
        fields: Prisma.projectsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.projectsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.projectsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          findFirst: {
            args: Prisma.projectsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.projectsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          findMany: {
            args: Prisma.projectsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>[]
          }
          create: {
            args: Prisma.projectsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          createMany: {
            args: Prisma.projectsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.projectsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>[]
          }
          delete: {
            args: Prisma.projectsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          update: {
            args: Prisma.projectsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          deleteMany: {
            args: Prisma.projectsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.projectsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.projectsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>[]
          }
          upsert: {
            args: Prisma.projectsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          aggregate: {
            args: Prisma.ProjectsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjects>
          }
          groupBy: {
            args: Prisma.projectsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectsGroupByOutputType>[]
          }
          count: {
            args: Prisma.projectsCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
    adapter?: runtime.SqlDriverAdapterFactory | null
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
  }
  export type GlobalOmitConfig = {
    abouts?: aboutsOmit
    career_categories?: career_categoriesOmit
    careers?: careersOmit
    categories?: categoriesOmit
    comments?: commentsOmit
    expertise?: expertiseOmit
    jobs?: jobsOmit
    messages?: messagesOmit
    newsletters?: newslettersOmit
    projects?: projectsOmit
    users?: usersOmit
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
   * Count Type Career_categoriesCountOutputType
   */

  export type Career_categoriesCountOutputType = {
    careers: number
  }

  export type Career_categoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    careers?: boolean | Career_categoriesCountOutputTypeCountCareersArgs
  }

  // Custom InputTypes
  /**
   * Career_categoriesCountOutputType without action
   */
  export type Career_categoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career_categoriesCountOutputType
     */
    select?: Career_categoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Career_categoriesCountOutputType without action
   */
  export type Career_categoriesCountOutputTypeCountCareersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: careersWhereInput
  }


  /**
   * Count Type CareersCountOutputType
   */

  export type CareersCountOutputType = {
    comments: number
  }

  export type CareersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | CareersCountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes
  /**
   * CareersCountOutputType without action
   */
  export type CareersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareersCountOutputType
     */
    select?: CareersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CareersCountOutputType without action
   */
  export type CareersCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentsWhereInput
  }


  /**
   * Count Type CategoriesCountOutputType
   */

  export type CategoriesCountOutputType = {
    projects: number
  }

  export type CategoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | CategoriesCountOutputTypeCountProjectsArgs
  }

  // Custom InputTypes
  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesCountOutputType
     */
    select?: CategoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model abouts
   */

  export type AggregateAbouts = {
    _count: AboutsCountAggregateOutputType | null
    _avg: AboutsAvgAggregateOutputType | null
    _sum: AboutsSumAggregateOutputType | null
    _min: AboutsMinAggregateOutputType | null
    _max: AboutsMaxAggregateOutputType | null
  }

  export type AboutsAvgAggregateOutputType = {
    id: number | null
  }

  export type AboutsSumAggregateOutputType = {
    id: number | null
  }

  export type AboutsMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    img_url: string | null
  }

  export type AboutsMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    img_url: string | null
  }

  export type AboutsCountAggregateOutputType = {
    id: number
    title: number
    description: number
    img_url: number
    _all: number
  }


  export type AboutsAvgAggregateInputType = {
    id?: true
  }

  export type AboutsSumAggregateInputType = {
    id?: true
  }

  export type AboutsMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    img_url?: true
  }

  export type AboutsMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    img_url?: true
  }

  export type AboutsCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    img_url?: true
    _all?: true
  }

  export type AboutsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which abouts to aggregate.
     */
    where?: aboutsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of abouts to fetch.
     */
    orderBy?: aboutsOrderByWithRelationInput | aboutsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: aboutsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` abouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` abouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned abouts
    **/
    _count?: true | AboutsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AboutsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AboutsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AboutsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AboutsMaxAggregateInputType
  }

  export type GetAboutsAggregateType<T extends AboutsAggregateArgs> = {
        [P in keyof T & keyof AggregateAbouts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAbouts[P]>
      : GetScalarType<T[P], AggregateAbouts[P]>
  }




  export type aboutsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: aboutsWhereInput
    orderBy?: aboutsOrderByWithAggregationInput | aboutsOrderByWithAggregationInput[]
    by: AboutsScalarFieldEnum[] | AboutsScalarFieldEnum
    having?: aboutsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AboutsCountAggregateInputType | true
    _avg?: AboutsAvgAggregateInputType
    _sum?: AboutsSumAggregateInputType
    _min?: AboutsMinAggregateInputType
    _max?: AboutsMaxAggregateInputType
  }

  export type AboutsGroupByOutputType = {
    id: number
    title: string
    description: string
    img_url: string
    _count: AboutsCountAggregateOutputType | null
    _avg: AboutsAvgAggregateOutputType | null
    _sum: AboutsSumAggregateOutputType | null
    _min: AboutsMinAggregateOutputType | null
    _max: AboutsMaxAggregateOutputType | null
  }

  type GetAboutsGroupByPayload<T extends aboutsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AboutsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AboutsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AboutsGroupByOutputType[P]>
            : GetScalarType<T[P], AboutsGroupByOutputType[P]>
        }
      >
    >


  export type aboutsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    img_url?: boolean
  }, ExtArgs["result"]["abouts"]>

  export type aboutsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    img_url?: boolean
  }, ExtArgs["result"]["abouts"]>

  export type aboutsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    img_url?: boolean
  }, ExtArgs["result"]["abouts"]>

  export type aboutsSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    img_url?: boolean
  }

  export type aboutsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "img_url", ExtArgs["result"]["abouts"]>

  export type $aboutsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "abouts"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      img_url: string
    }, ExtArgs["result"]["abouts"]>
    composites: {}
  }

  type aboutsGetPayload<S extends boolean | null | undefined | aboutsDefaultArgs> = $Result.GetResult<Prisma.$aboutsPayload, S>

  type aboutsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<aboutsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AboutsCountAggregateInputType | true
    }

  export interface aboutsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['abouts'], meta: { name: 'abouts' } }
    /**
     * Find zero or one Abouts that matches the filter.
     * @param {aboutsFindUniqueArgs} args - Arguments to find a Abouts
     * @example
     * // Get one Abouts
     * const abouts = await prisma.abouts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends aboutsFindUniqueArgs>(args: SelectSubset<T, aboutsFindUniqueArgs<ExtArgs>>): Prisma__aboutsClient<$Result.GetResult<Prisma.$aboutsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Abouts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {aboutsFindUniqueOrThrowArgs} args - Arguments to find a Abouts
     * @example
     * // Get one Abouts
     * const abouts = await prisma.abouts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends aboutsFindUniqueOrThrowArgs>(args: SelectSubset<T, aboutsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__aboutsClient<$Result.GetResult<Prisma.$aboutsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Abouts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aboutsFindFirstArgs} args - Arguments to find a Abouts
     * @example
     * // Get one Abouts
     * const abouts = await prisma.abouts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends aboutsFindFirstArgs>(args?: SelectSubset<T, aboutsFindFirstArgs<ExtArgs>>): Prisma__aboutsClient<$Result.GetResult<Prisma.$aboutsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Abouts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aboutsFindFirstOrThrowArgs} args - Arguments to find a Abouts
     * @example
     * // Get one Abouts
     * const abouts = await prisma.abouts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends aboutsFindFirstOrThrowArgs>(args?: SelectSubset<T, aboutsFindFirstOrThrowArgs<ExtArgs>>): Prisma__aboutsClient<$Result.GetResult<Prisma.$aboutsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Abouts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aboutsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Abouts
     * const abouts = await prisma.abouts.findMany()
     * 
     * // Get first 10 Abouts
     * const abouts = await prisma.abouts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aboutsWithIdOnly = await prisma.abouts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends aboutsFindManyArgs>(args?: SelectSubset<T, aboutsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$aboutsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Abouts.
     * @param {aboutsCreateArgs} args - Arguments to create a Abouts.
     * @example
     * // Create one Abouts
     * const Abouts = await prisma.abouts.create({
     *   data: {
     *     // ... data to create a Abouts
     *   }
     * })
     * 
     */
    create<T extends aboutsCreateArgs>(args: SelectSubset<T, aboutsCreateArgs<ExtArgs>>): Prisma__aboutsClient<$Result.GetResult<Prisma.$aboutsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Abouts.
     * @param {aboutsCreateManyArgs} args - Arguments to create many Abouts.
     * @example
     * // Create many Abouts
     * const abouts = await prisma.abouts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends aboutsCreateManyArgs>(args?: SelectSubset<T, aboutsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Abouts and returns the data saved in the database.
     * @param {aboutsCreateManyAndReturnArgs} args - Arguments to create many Abouts.
     * @example
     * // Create many Abouts
     * const abouts = await prisma.abouts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Abouts and only return the `id`
     * const aboutsWithIdOnly = await prisma.abouts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends aboutsCreateManyAndReturnArgs>(args?: SelectSubset<T, aboutsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$aboutsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Abouts.
     * @param {aboutsDeleteArgs} args - Arguments to delete one Abouts.
     * @example
     * // Delete one Abouts
     * const Abouts = await prisma.abouts.delete({
     *   where: {
     *     // ... filter to delete one Abouts
     *   }
     * })
     * 
     */
    delete<T extends aboutsDeleteArgs>(args: SelectSubset<T, aboutsDeleteArgs<ExtArgs>>): Prisma__aboutsClient<$Result.GetResult<Prisma.$aboutsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Abouts.
     * @param {aboutsUpdateArgs} args - Arguments to update one Abouts.
     * @example
     * // Update one Abouts
     * const abouts = await prisma.abouts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends aboutsUpdateArgs>(args: SelectSubset<T, aboutsUpdateArgs<ExtArgs>>): Prisma__aboutsClient<$Result.GetResult<Prisma.$aboutsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Abouts.
     * @param {aboutsDeleteManyArgs} args - Arguments to filter Abouts to delete.
     * @example
     * // Delete a few Abouts
     * const { count } = await prisma.abouts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends aboutsDeleteManyArgs>(args?: SelectSubset<T, aboutsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Abouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aboutsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Abouts
     * const abouts = await prisma.abouts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends aboutsUpdateManyArgs>(args: SelectSubset<T, aboutsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Abouts and returns the data updated in the database.
     * @param {aboutsUpdateManyAndReturnArgs} args - Arguments to update many Abouts.
     * @example
     * // Update many Abouts
     * const abouts = await prisma.abouts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Abouts and only return the `id`
     * const aboutsWithIdOnly = await prisma.abouts.updateManyAndReturn({
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
    updateManyAndReturn<T extends aboutsUpdateManyAndReturnArgs>(args: SelectSubset<T, aboutsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$aboutsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Abouts.
     * @param {aboutsUpsertArgs} args - Arguments to update or create a Abouts.
     * @example
     * // Update or create a Abouts
     * const abouts = await prisma.abouts.upsert({
     *   create: {
     *     // ... data to create a Abouts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Abouts we want to update
     *   }
     * })
     */
    upsert<T extends aboutsUpsertArgs>(args: SelectSubset<T, aboutsUpsertArgs<ExtArgs>>): Prisma__aboutsClient<$Result.GetResult<Prisma.$aboutsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Abouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aboutsCountArgs} args - Arguments to filter Abouts to count.
     * @example
     * // Count the number of Abouts
     * const count = await prisma.abouts.count({
     *   where: {
     *     // ... the filter for the Abouts we want to count
     *   }
     * })
    **/
    count<T extends aboutsCountArgs>(
      args?: Subset<T, aboutsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AboutsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Abouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AboutsAggregateArgs>(args: Subset<T, AboutsAggregateArgs>): Prisma.PrismaPromise<GetAboutsAggregateType<T>>

    /**
     * Group by Abouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aboutsGroupByArgs} args - Group by arguments.
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
      T extends aboutsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: aboutsGroupByArgs['orderBy'] }
        : { orderBy?: aboutsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, aboutsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAboutsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the abouts model
   */
  readonly fields: aboutsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for abouts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__aboutsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the abouts model
   */
  interface aboutsFieldRefs {
    readonly id: FieldRef<"abouts", 'Int'>
    readonly title: FieldRef<"abouts", 'String'>
    readonly description: FieldRef<"abouts", 'String'>
    readonly img_url: FieldRef<"abouts", 'String'>
  }
    

  // Custom InputTypes
  /**
   * abouts findUnique
   */
  export type aboutsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the abouts
     */
    select?: aboutsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the abouts
     */
    omit?: aboutsOmit<ExtArgs> | null
    /**
     * Filter, which abouts to fetch.
     */
    where: aboutsWhereUniqueInput
  }

  /**
   * abouts findUniqueOrThrow
   */
  export type aboutsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the abouts
     */
    select?: aboutsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the abouts
     */
    omit?: aboutsOmit<ExtArgs> | null
    /**
     * Filter, which abouts to fetch.
     */
    where: aboutsWhereUniqueInput
  }

  /**
   * abouts findFirst
   */
  export type aboutsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the abouts
     */
    select?: aboutsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the abouts
     */
    omit?: aboutsOmit<ExtArgs> | null
    /**
     * Filter, which abouts to fetch.
     */
    where?: aboutsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of abouts to fetch.
     */
    orderBy?: aboutsOrderByWithRelationInput | aboutsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for abouts.
     */
    cursor?: aboutsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` abouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` abouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of abouts.
     */
    distinct?: AboutsScalarFieldEnum | AboutsScalarFieldEnum[]
  }

  /**
   * abouts findFirstOrThrow
   */
  export type aboutsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the abouts
     */
    select?: aboutsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the abouts
     */
    omit?: aboutsOmit<ExtArgs> | null
    /**
     * Filter, which abouts to fetch.
     */
    where?: aboutsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of abouts to fetch.
     */
    orderBy?: aboutsOrderByWithRelationInput | aboutsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for abouts.
     */
    cursor?: aboutsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` abouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` abouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of abouts.
     */
    distinct?: AboutsScalarFieldEnum | AboutsScalarFieldEnum[]
  }

  /**
   * abouts findMany
   */
  export type aboutsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the abouts
     */
    select?: aboutsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the abouts
     */
    omit?: aboutsOmit<ExtArgs> | null
    /**
     * Filter, which abouts to fetch.
     */
    where?: aboutsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of abouts to fetch.
     */
    orderBy?: aboutsOrderByWithRelationInput | aboutsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing abouts.
     */
    cursor?: aboutsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` abouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` abouts.
     */
    skip?: number
    distinct?: AboutsScalarFieldEnum | AboutsScalarFieldEnum[]
  }

  /**
   * abouts create
   */
  export type aboutsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the abouts
     */
    select?: aboutsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the abouts
     */
    omit?: aboutsOmit<ExtArgs> | null
    /**
     * The data needed to create a abouts.
     */
    data: XOR<aboutsCreateInput, aboutsUncheckedCreateInput>
  }

  /**
   * abouts createMany
   */
  export type aboutsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many abouts.
     */
    data: aboutsCreateManyInput | aboutsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * abouts createManyAndReturn
   */
  export type aboutsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the abouts
     */
    select?: aboutsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the abouts
     */
    omit?: aboutsOmit<ExtArgs> | null
    /**
     * The data used to create many abouts.
     */
    data: aboutsCreateManyInput | aboutsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * abouts update
   */
  export type aboutsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the abouts
     */
    select?: aboutsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the abouts
     */
    omit?: aboutsOmit<ExtArgs> | null
    /**
     * The data needed to update a abouts.
     */
    data: XOR<aboutsUpdateInput, aboutsUncheckedUpdateInput>
    /**
     * Choose, which abouts to update.
     */
    where: aboutsWhereUniqueInput
  }

  /**
   * abouts updateMany
   */
  export type aboutsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update abouts.
     */
    data: XOR<aboutsUpdateManyMutationInput, aboutsUncheckedUpdateManyInput>
    /**
     * Filter which abouts to update
     */
    where?: aboutsWhereInput
    /**
     * Limit how many abouts to update.
     */
    limit?: number
  }

  /**
   * abouts updateManyAndReturn
   */
  export type aboutsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the abouts
     */
    select?: aboutsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the abouts
     */
    omit?: aboutsOmit<ExtArgs> | null
    /**
     * The data used to update abouts.
     */
    data: XOR<aboutsUpdateManyMutationInput, aboutsUncheckedUpdateManyInput>
    /**
     * Filter which abouts to update
     */
    where?: aboutsWhereInput
    /**
     * Limit how many abouts to update.
     */
    limit?: number
  }

  /**
   * abouts upsert
   */
  export type aboutsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the abouts
     */
    select?: aboutsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the abouts
     */
    omit?: aboutsOmit<ExtArgs> | null
    /**
     * The filter to search for the abouts to update in case it exists.
     */
    where: aboutsWhereUniqueInput
    /**
     * In case the abouts found by the `where` argument doesn't exist, create a new abouts with this data.
     */
    create: XOR<aboutsCreateInput, aboutsUncheckedCreateInput>
    /**
     * In case the abouts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<aboutsUpdateInput, aboutsUncheckedUpdateInput>
  }

  /**
   * abouts delete
   */
  export type aboutsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the abouts
     */
    select?: aboutsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the abouts
     */
    omit?: aboutsOmit<ExtArgs> | null
    /**
     * Filter which abouts to delete.
     */
    where: aboutsWhereUniqueInput
  }

  /**
   * abouts deleteMany
   */
  export type aboutsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which abouts to delete
     */
    where?: aboutsWhereInput
    /**
     * Limit how many abouts to delete.
     */
    limit?: number
  }

  /**
   * abouts without action
   */
  export type aboutsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the abouts
     */
    select?: aboutsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the abouts
     */
    omit?: aboutsOmit<ExtArgs> | null
  }


  /**
   * Model career_categories
   */

  export type AggregateCareer_categories = {
    _count: Career_categoriesCountAggregateOutputType | null
    _avg: Career_categoriesAvgAggregateOutputType | null
    _sum: Career_categoriesSumAggregateOutputType | null
    _min: Career_categoriesMinAggregateOutputType | null
    _max: Career_categoriesMaxAggregateOutputType | null
  }

  export type Career_categoriesAvgAggregateOutputType = {
    id: number | null
  }

  export type Career_categoriesSumAggregateOutputType = {
    id: number | null
  }

  export type Career_categoriesMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type Career_categoriesMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type Career_categoriesCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type Career_categoriesAvgAggregateInputType = {
    id?: true
  }

  export type Career_categoriesSumAggregateInputType = {
    id?: true
  }

  export type Career_categoriesMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type Career_categoriesMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type Career_categoriesCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type Career_categoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which career_categories to aggregate.
     */
    where?: career_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of career_categories to fetch.
     */
    orderBy?: career_categoriesOrderByWithRelationInput | career_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: career_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` career_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` career_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned career_categories
    **/
    _count?: true | Career_categoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Career_categoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Career_categoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Career_categoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Career_categoriesMaxAggregateInputType
  }

  export type GetCareer_categoriesAggregateType<T extends Career_categoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCareer_categories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCareer_categories[P]>
      : GetScalarType<T[P], AggregateCareer_categories[P]>
  }




  export type career_categoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: career_categoriesWhereInput
    orderBy?: career_categoriesOrderByWithAggregationInput | career_categoriesOrderByWithAggregationInput[]
    by: Career_categoriesScalarFieldEnum[] | Career_categoriesScalarFieldEnum
    having?: career_categoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Career_categoriesCountAggregateInputType | true
    _avg?: Career_categoriesAvgAggregateInputType
    _sum?: Career_categoriesSumAggregateInputType
    _min?: Career_categoriesMinAggregateInputType
    _max?: Career_categoriesMaxAggregateInputType
  }

  export type Career_categoriesGroupByOutputType = {
    id: number
    name: string
    _count: Career_categoriesCountAggregateOutputType | null
    _avg: Career_categoriesAvgAggregateOutputType | null
    _sum: Career_categoriesSumAggregateOutputType | null
    _min: Career_categoriesMinAggregateOutputType | null
    _max: Career_categoriesMaxAggregateOutputType | null
  }

  type GetCareer_categoriesGroupByPayload<T extends career_categoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Career_categoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Career_categoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Career_categoriesGroupByOutputType[P]>
            : GetScalarType<T[P], Career_categoriesGroupByOutputType[P]>
        }
      >
    >


  export type career_categoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    careers?: boolean | career_categories$careersArgs<ExtArgs>
    _count?: boolean | Career_categoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["career_categories"]>

  export type career_categoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["career_categories"]>

  export type career_categoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["career_categories"]>

  export type career_categoriesSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type career_categoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["career_categories"]>
  export type career_categoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    careers?: boolean | career_categories$careersArgs<ExtArgs>
    _count?: boolean | Career_categoriesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type career_categoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type career_categoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $career_categoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "career_categories"
    objects: {
      careers: Prisma.$careersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["career_categories"]>
    composites: {}
  }

  type career_categoriesGetPayload<S extends boolean | null | undefined | career_categoriesDefaultArgs> = $Result.GetResult<Prisma.$career_categoriesPayload, S>

  type career_categoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<career_categoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Career_categoriesCountAggregateInputType | true
    }

  export interface career_categoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['career_categories'], meta: { name: 'career_categories' } }
    /**
     * Find zero or one Career_categories that matches the filter.
     * @param {career_categoriesFindUniqueArgs} args - Arguments to find a Career_categories
     * @example
     * // Get one Career_categories
     * const career_categories = await prisma.career_categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends career_categoriesFindUniqueArgs>(args: SelectSubset<T, career_categoriesFindUniqueArgs<ExtArgs>>): Prisma__career_categoriesClient<$Result.GetResult<Prisma.$career_categoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Career_categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {career_categoriesFindUniqueOrThrowArgs} args - Arguments to find a Career_categories
     * @example
     * // Get one Career_categories
     * const career_categories = await prisma.career_categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends career_categoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, career_categoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__career_categoriesClient<$Result.GetResult<Prisma.$career_categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Career_categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {career_categoriesFindFirstArgs} args - Arguments to find a Career_categories
     * @example
     * // Get one Career_categories
     * const career_categories = await prisma.career_categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends career_categoriesFindFirstArgs>(args?: SelectSubset<T, career_categoriesFindFirstArgs<ExtArgs>>): Prisma__career_categoriesClient<$Result.GetResult<Prisma.$career_categoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Career_categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {career_categoriesFindFirstOrThrowArgs} args - Arguments to find a Career_categories
     * @example
     * // Get one Career_categories
     * const career_categories = await prisma.career_categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends career_categoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, career_categoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__career_categoriesClient<$Result.GetResult<Prisma.$career_categoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Career_categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {career_categoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Career_categories
     * const career_categories = await prisma.career_categories.findMany()
     * 
     * // Get first 10 Career_categories
     * const career_categories = await prisma.career_categories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const career_categoriesWithIdOnly = await prisma.career_categories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends career_categoriesFindManyArgs>(args?: SelectSubset<T, career_categoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$career_categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Career_categories.
     * @param {career_categoriesCreateArgs} args - Arguments to create a Career_categories.
     * @example
     * // Create one Career_categories
     * const Career_categories = await prisma.career_categories.create({
     *   data: {
     *     // ... data to create a Career_categories
     *   }
     * })
     * 
     */
    create<T extends career_categoriesCreateArgs>(args: SelectSubset<T, career_categoriesCreateArgs<ExtArgs>>): Prisma__career_categoriesClient<$Result.GetResult<Prisma.$career_categoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Career_categories.
     * @param {career_categoriesCreateManyArgs} args - Arguments to create many Career_categories.
     * @example
     * // Create many Career_categories
     * const career_categories = await prisma.career_categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends career_categoriesCreateManyArgs>(args?: SelectSubset<T, career_categoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Career_categories and returns the data saved in the database.
     * @param {career_categoriesCreateManyAndReturnArgs} args - Arguments to create many Career_categories.
     * @example
     * // Create many Career_categories
     * const career_categories = await prisma.career_categories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Career_categories and only return the `id`
     * const career_categoriesWithIdOnly = await prisma.career_categories.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends career_categoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, career_categoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$career_categoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Career_categories.
     * @param {career_categoriesDeleteArgs} args - Arguments to delete one Career_categories.
     * @example
     * // Delete one Career_categories
     * const Career_categories = await prisma.career_categories.delete({
     *   where: {
     *     // ... filter to delete one Career_categories
     *   }
     * })
     * 
     */
    delete<T extends career_categoriesDeleteArgs>(args: SelectSubset<T, career_categoriesDeleteArgs<ExtArgs>>): Prisma__career_categoriesClient<$Result.GetResult<Prisma.$career_categoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Career_categories.
     * @param {career_categoriesUpdateArgs} args - Arguments to update one Career_categories.
     * @example
     * // Update one Career_categories
     * const career_categories = await prisma.career_categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends career_categoriesUpdateArgs>(args: SelectSubset<T, career_categoriesUpdateArgs<ExtArgs>>): Prisma__career_categoriesClient<$Result.GetResult<Prisma.$career_categoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Career_categories.
     * @param {career_categoriesDeleteManyArgs} args - Arguments to filter Career_categories to delete.
     * @example
     * // Delete a few Career_categories
     * const { count } = await prisma.career_categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends career_categoriesDeleteManyArgs>(args?: SelectSubset<T, career_categoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Career_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {career_categoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Career_categories
     * const career_categories = await prisma.career_categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends career_categoriesUpdateManyArgs>(args: SelectSubset<T, career_categoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Career_categories and returns the data updated in the database.
     * @param {career_categoriesUpdateManyAndReturnArgs} args - Arguments to update many Career_categories.
     * @example
     * // Update many Career_categories
     * const career_categories = await prisma.career_categories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Career_categories and only return the `id`
     * const career_categoriesWithIdOnly = await prisma.career_categories.updateManyAndReturn({
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
    updateManyAndReturn<T extends career_categoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, career_categoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$career_categoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Career_categories.
     * @param {career_categoriesUpsertArgs} args - Arguments to update or create a Career_categories.
     * @example
     * // Update or create a Career_categories
     * const career_categories = await prisma.career_categories.upsert({
     *   create: {
     *     // ... data to create a Career_categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Career_categories we want to update
     *   }
     * })
     */
    upsert<T extends career_categoriesUpsertArgs>(args: SelectSubset<T, career_categoriesUpsertArgs<ExtArgs>>): Prisma__career_categoriesClient<$Result.GetResult<Prisma.$career_categoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Career_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {career_categoriesCountArgs} args - Arguments to filter Career_categories to count.
     * @example
     * // Count the number of Career_categories
     * const count = await prisma.career_categories.count({
     *   where: {
     *     // ... the filter for the Career_categories we want to count
     *   }
     * })
    **/
    count<T extends career_categoriesCountArgs>(
      args?: Subset<T, career_categoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Career_categoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Career_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Career_categoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Career_categoriesAggregateArgs>(args: Subset<T, Career_categoriesAggregateArgs>): Prisma.PrismaPromise<GetCareer_categoriesAggregateType<T>>

    /**
     * Group by Career_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {career_categoriesGroupByArgs} args - Group by arguments.
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
      T extends career_categoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: career_categoriesGroupByArgs['orderBy'] }
        : { orderBy?: career_categoriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, career_categoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCareer_categoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the career_categories model
   */
  readonly fields: career_categoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for career_categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__career_categoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    careers<T extends career_categories$careersArgs<ExtArgs> = {}>(args?: Subset<T, career_categories$careersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$careersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the career_categories model
   */
  interface career_categoriesFieldRefs {
    readonly id: FieldRef<"career_categories", 'Int'>
    readonly name: FieldRef<"career_categories", 'String'>
  }
    

  // Custom InputTypes
  /**
   * career_categories findUnique
   */
  export type career_categoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the career_categories
     */
    select?: career_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the career_categories
     */
    omit?: career_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: career_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which career_categories to fetch.
     */
    where: career_categoriesWhereUniqueInput
  }

  /**
   * career_categories findUniqueOrThrow
   */
  export type career_categoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the career_categories
     */
    select?: career_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the career_categories
     */
    omit?: career_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: career_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which career_categories to fetch.
     */
    where: career_categoriesWhereUniqueInput
  }

  /**
   * career_categories findFirst
   */
  export type career_categoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the career_categories
     */
    select?: career_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the career_categories
     */
    omit?: career_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: career_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which career_categories to fetch.
     */
    where?: career_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of career_categories to fetch.
     */
    orderBy?: career_categoriesOrderByWithRelationInput | career_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for career_categories.
     */
    cursor?: career_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` career_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` career_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of career_categories.
     */
    distinct?: Career_categoriesScalarFieldEnum | Career_categoriesScalarFieldEnum[]
  }

  /**
   * career_categories findFirstOrThrow
   */
  export type career_categoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the career_categories
     */
    select?: career_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the career_categories
     */
    omit?: career_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: career_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which career_categories to fetch.
     */
    where?: career_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of career_categories to fetch.
     */
    orderBy?: career_categoriesOrderByWithRelationInput | career_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for career_categories.
     */
    cursor?: career_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` career_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` career_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of career_categories.
     */
    distinct?: Career_categoriesScalarFieldEnum | Career_categoriesScalarFieldEnum[]
  }

  /**
   * career_categories findMany
   */
  export type career_categoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the career_categories
     */
    select?: career_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the career_categories
     */
    omit?: career_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: career_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which career_categories to fetch.
     */
    where?: career_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of career_categories to fetch.
     */
    orderBy?: career_categoriesOrderByWithRelationInput | career_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing career_categories.
     */
    cursor?: career_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` career_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` career_categories.
     */
    skip?: number
    distinct?: Career_categoriesScalarFieldEnum | Career_categoriesScalarFieldEnum[]
  }

  /**
   * career_categories create
   */
  export type career_categoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the career_categories
     */
    select?: career_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the career_categories
     */
    omit?: career_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: career_categoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a career_categories.
     */
    data: XOR<career_categoriesCreateInput, career_categoriesUncheckedCreateInput>
  }

  /**
   * career_categories createMany
   */
  export type career_categoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many career_categories.
     */
    data: career_categoriesCreateManyInput | career_categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * career_categories createManyAndReturn
   */
  export type career_categoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the career_categories
     */
    select?: career_categoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the career_categories
     */
    omit?: career_categoriesOmit<ExtArgs> | null
    /**
     * The data used to create many career_categories.
     */
    data: career_categoriesCreateManyInput | career_categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * career_categories update
   */
  export type career_categoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the career_categories
     */
    select?: career_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the career_categories
     */
    omit?: career_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: career_categoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a career_categories.
     */
    data: XOR<career_categoriesUpdateInput, career_categoriesUncheckedUpdateInput>
    /**
     * Choose, which career_categories to update.
     */
    where: career_categoriesWhereUniqueInput
  }

  /**
   * career_categories updateMany
   */
  export type career_categoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update career_categories.
     */
    data: XOR<career_categoriesUpdateManyMutationInput, career_categoriesUncheckedUpdateManyInput>
    /**
     * Filter which career_categories to update
     */
    where?: career_categoriesWhereInput
    /**
     * Limit how many career_categories to update.
     */
    limit?: number
  }

  /**
   * career_categories updateManyAndReturn
   */
  export type career_categoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the career_categories
     */
    select?: career_categoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the career_categories
     */
    omit?: career_categoriesOmit<ExtArgs> | null
    /**
     * The data used to update career_categories.
     */
    data: XOR<career_categoriesUpdateManyMutationInput, career_categoriesUncheckedUpdateManyInput>
    /**
     * Filter which career_categories to update
     */
    where?: career_categoriesWhereInput
    /**
     * Limit how many career_categories to update.
     */
    limit?: number
  }

  /**
   * career_categories upsert
   */
  export type career_categoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the career_categories
     */
    select?: career_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the career_categories
     */
    omit?: career_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: career_categoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the career_categories to update in case it exists.
     */
    where: career_categoriesWhereUniqueInput
    /**
     * In case the career_categories found by the `where` argument doesn't exist, create a new career_categories with this data.
     */
    create: XOR<career_categoriesCreateInput, career_categoriesUncheckedCreateInput>
    /**
     * In case the career_categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<career_categoriesUpdateInput, career_categoriesUncheckedUpdateInput>
  }

  /**
   * career_categories delete
   */
  export type career_categoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the career_categories
     */
    select?: career_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the career_categories
     */
    omit?: career_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: career_categoriesInclude<ExtArgs> | null
    /**
     * Filter which career_categories to delete.
     */
    where: career_categoriesWhereUniqueInput
  }

  /**
   * career_categories deleteMany
   */
  export type career_categoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which career_categories to delete
     */
    where?: career_categoriesWhereInput
    /**
     * Limit how many career_categories to delete.
     */
    limit?: number
  }

  /**
   * career_categories.careers
   */
  export type career_categories$careersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the careers
     */
    select?: careersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the careers
     */
    omit?: careersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: careersInclude<ExtArgs> | null
    where?: careersWhereInput
    orderBy?: careersOrderByWithRelationInput | careersOrderByWithRelationInput[]
    cursor?: careersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CareersScalarFieldEnum | CareersScalarFieldEnum[]
  }

  /**
   * career_categories without action
   */
  export type career_categoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the career_categories
     */
    select?: career_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the career_categories
     */
    omit?: career_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: career_categoriesInclude<ExtArgs> | null
  }


  /**
   * Model careers
   */

  export type AggregateCareers = {
    _count: CareersCountAggregateOutputType | null
    _avg: CareersAvgAggregateOutputType | null
    _sum: CareersSumAggregateOutputType | null
    _min: CareersMinAggregateOutputType | null
    _max: CareersMaxAggregateOutputType | null
  }

  export type CareersAvgAggregateOutputType = {
    id: number | null
    category_id: number | null
  }

  export type CareersSumAggregateOutputType = {
    id: number | null
    category_id: number | null
  }

  export type CareersMinAggregateOutputType = {
    id: number | null
    title: string | null
    slug: string | null
    excerpt: string | null
    description: string | null
    industry: string | null
    state: string | null
    region: string | null
    created_at: Date | null
    updated_at: Date | null
    category_id: number | null
  }

  export type CareersMaxAggregateOutputType = {
    id: number | null
    title: string | null
    slug: string | null
    excerpt: string | null
    description: string | null
    industry: string | null
    state: string | null
    region: string | null
    created_at: Date | null
    updated_at: Date | null
    category_id: number | null
  }

  export type CareersCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    excerpt: number
    description: number
    industry: number
    field: number
    state: number
    region: number
    created_at: number
    updated_at: number
    category_id: number
    _all: number
  }


  export type CareersAvgAggregateInputType = {
    id?: true
    category_id?: true
  }

  export type CareersSumAggregateInputType = {
    id?: true
    category_id?: true
  }

  export type CareersMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    excerpt?: true
    description?: true
    industry?: true
    state?: true
    region?: true
    created_at?: true
    updated_at?: true
    category_id?: true
  }

  export type CareersMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    excerpt?: true
    description?: true
    industry?: true
    state?: true
    region?: true
    created_at?: true
    updated_at?: true
    category_id?: true
  }

  export type CareersCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    excerpt?: true
    description?: true
    industry?: true
    field?: true
    state?: true
    region?: true
    created_at?: true
    updated_at?: true
    category_id?: true
    _all?: true
  }

  export type CareersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which careers to aggregate.
     */
    where?: careersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of careers to fetch.
     */
    orderBy?: careersOrderByWithRelationInput | careersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: careersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` careers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` careers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned careers
    **/
    _count?: true | CareersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CareersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CareersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CareersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CareersMaxAggregateInputType
  }

  export type GetCareersAggregateType<T extends CareersAggregateArgs> = {
        [P in keyof T & keyof AggregateCareers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCareers[P]>
      : GetScalarType<T[P], AggregateCareers[P]>
  }




  export type careersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: careersWhereInput
    orderBy?: careersOrderByWithAggregationInput | careersOrderByWithAggregationInput[]
    by: CareersScalarFieldEnum[] | CareersScalarFieldEnum
    having?: careersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CareersCountAggregateInputType | true
    _avg?: CareersAvgAggregateInputType
    _sum?: CareersSumAggregateInputType
    _min?: CareersMinAggregateInputType
    _max?: CareersMaxAggregateInputType
  }

  export type CareersGroupByOutputType = {
    id: number
    title: string
    slug: string
    excerpt: string
    description: string
    industry: string | null
    field: string[]
    state: string | null
    region: string | null
    created_at: Date | null
    updated_at: Date | null
    category_id: number
    _count: CareersCountAggregateOutputType | null
    _avg: CareersAvgAggregateOutputType | null
    _sum: CareersSumAggregateOutputType | null
    _min: CareersMinAggregateOutputType | null
    _max: CareersMaxAggregateOutputType | null
  }

  type GetCareersGroupByPayload<T extends careersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CareersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CareersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CareersGroupByOutputType[P]>
            : GetScalarType<T[P], CareersGroupByOutputType[P]>
        }
      >
    >


  export type careersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    excerpt?: boolean
    description?: boolean
    industry?: boolean
    field?: boolean
    state?: boolean
    region?: boolean
    created_at?: boolean
    updated_at?: boolean
    category_id?: boolean
    career_categories?: boolean | career_categoriesDefaultArgs<ExtArgs>
    comments?: boolean | careers$commentsArgs<ExtArgs>
    _count?: boolean | CareersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["careers"]>

  export type careersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    excerpt?: boolean
    description?: boolean
    industry?: boolean
    field?: boolean
    state?: boolean
    region?: boolean
    created_at?: boolean
    updated_at?: boolean
    category_id?: boolean
    career_categories?: boolean | career_categoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["careers"]>

  export type careersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    excerpt?: boolean
    description?: boolean
    industry?: boolean
    field?: boolean
    state?: boolean
    region?: boolean
    created_at?: boolean
    updated_at?: boolean
    category_id?: boolean
    career_categories?: boolean | career_categoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["careers"]>

  export type careersSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    excerpt?: boolean
    description?: boolean
    industry?: boolean
    field?: boolean
    state?: boolean
    region?: boolean
    created_at?: boolean
    updated_at?: boolean
    category_id?: boolean
  }

  export type careersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "slug" | "excerpt" | "description" | "industry" | "field" | "state" | "region" | "created_at" | "updated_at" | "category_id", ExtArgs["result"]["careers"]>
  export type careersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    career_categories?: boolean | career_categoriesDefaultArgs<ExtArgs>
    comments?: boolean | careers$commentsArgs<ExtArgs>
    _count?: boolean | CareersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type careersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    career_categories?: boolean | career_categoriesDefaultArgs<ExtArgs>
  }
  export type careersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    career_categories?: boolean | career_categoriesDefaultArgs<ExtArgs>
  }

  export type $careersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "careers"
    objects: {
      career_categories: Prisma.$career_categoriesPayload<ExtArgs>
      comments: Prisma.$commentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      slug: string
      excerpt: string
      description: string
      industry: string | null
      field: string[]
      state: string | null
      region: string | null
      created_at: Date | null
      updated_at: Date | null
      category_id: number
    }, ExtArgs["result"]["careers"]>
    composites: {}
  }

  type careersGetPayload<S extends boolean | null | undefined | careersDefaultArgs> = $Result.GetResult<Prisma.$careersPayload, S>

  type careersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<careersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CareersCountAggregateInputType | true
    }

  export interface careersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['careers'], meta: { name: 'careers' } }
    /**
     * Find zero or one Careers that matches the filter.
     * @param {careersFindUniqueArgs} args - Arguments to find a Careers
     * @example
     * // Get one Careers
     * const careers = await prisma.careers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends careersFindUniqueArgs>(args: SelectSubset<T, careersFindUniqueArgs<ExtArgs>>): Prisma__careersClient<$Result.GetResult<Prisma.$careersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Careers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {careersFindUniqueOrThrowArgs} args - Arguments to find a Careers
     * @example
     * // Get one Careers
     * const careers = await prisma.careers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends careersFindUniqueOrThrowArgs>(args: SelectSubset<T, careersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__careersClient<$Result.GetResult<Prisma.$careersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Careers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {careersFindFirstArgs} args - Arguments to find a Careers
     * @example
     * // Get one Careers
     * const careers = await prisma.careers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends careersFindFirstArgs>(args?: SelectSubset<T, careersFindFirstArgs<ExtArgs>>): Prisma__careersClient<$Result.GetResult<Prisma.$careersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Careers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {careersFindFirstOrThrowArgs} args - Arguments to find a Careers
     * @example
     * // Get one Careers
     * const careers = await prisma.careers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends careersFindFirstOrThrowArgs>(args?: SelectSubset<T, careersFindFirstOrThrowArgs<ExtArgs>>): Prisma__careersClient<$Result.GetResult<Prisma.$careersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Careers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {careersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Careers
     * const careers = await prisma.careers.findMany()
     * 
     * // Get first 10 Careers
     * const careers = await prisma.careers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const careersWithIdOnly = await prisma.careers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends careersFindManyArgs>(args?: SelectSubset<T, careersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$careersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Careers.
     * @param {careersCreateArgs} args - Arguments to create a Careers.
     * @example
     * // Create one Careers
     * const Careers = await prisma.careers.create({
     *   data: {
     *     // ... data to create a Careers
     *   }
     * })
     * 
     */
    create<T extends careersCreateArgs>(args: SelectSubset<T, careersCreateArgs<ExtArgs>>): Prisma__careersClient<$Result.GetResult<Prisma.$careersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Careers.
     * @param {careersCreateManyArgs} args - Arguments to create many Careers.
     * @example
     * // Create many Careers
     * const careers = await prisma.careers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends careersCreateManyArgs>(args?: SelectSubset<T, careersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Careers and returns the data saved in the database.
     * @param {careersCreateManyAndReturnArgs} args - Arguments to create many Careers.
     * @example
     * // Create many Careers
     * const careers = await prisma.careers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Careers and only return the `id`
     * const careersWithIdOnly = await prisma.careers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends careersCreateManyAndReturnArgs>(args?: SelectSubset<T, careersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$careersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Careers.
     * @param {careersDeleteArgs} args - Arguments to delete one Careers.
     * @example
     * // Delete one Careers
     * const Careers = await prisma.careers.delete({
     *   where: {
     *     // ... filter to delete one Careers
     *   }
     * })
     * 
     */
    delete<T extends careersDeleteArgs>(args: SelectSubset<T, careersDeleteArgs<ExtArgs>>): Prisma__careersClient<$Result.GetResult<Prisma.$careersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Careers.
     * @param {careersUpdateArgs} args - Arguments to update one Careers.
     * @example
     * // Update one Careers
     * const careers = await prisma.careers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends careersUpdateArgs>(args: SelectSubset<T, careersUpdateArgs<ExtArgs>>): Prisma__careersClient<$Result.GetResult<Prisma.$careersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Careers.
     * @param {careersDeleteManyArgs} args - Arguments to filter Careers to delete.
     * @example
     * // Delete a few Careers
     * const { count } = await prisma.careers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends careersDeleteManyArgs>(args?: SelectSubset<T, careersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Careers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {careersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Careers
     * const careers = await prisma.careers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends careersUpdateManyArgs>(args: SelectSubset<T, careersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Careers and returns the data updated in the database.
     * @param {careersUpdateManyAndReturnArgs} args - Arguments to update many Careers.
     * @example
     * // Update many Careers
     * const careers = await prisma.careers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Careers and only return the `id`
     * const careersWithIdOnly = await prisma.careers.updateManyAndReturn({
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
    updateManyAndReturn<T extends careersUpdateManyAndReturnArgs>(args: SelectSubset<T, careersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$careersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Careers.
     * @param {careersUpsertArgs} args - Arguments to update or create a Careers.
     * @example
     * // Update or create a Careers
     * const careers = await prisma.careers.upsert({
     *   create: {
     *     // ... data to create a Careers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Careers we want to update
     *   }
     * })
     */
    upsert<T extends careersUpsertArgs>(args: SelectSubset<T, careersUpsertArgs<ExtArgs>>): Prisma__careersClient<$Result.GetResult<Prisma.$careersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Careers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {careersCountArgs} args - Arguments to filter Careers to count.
     * @example
     * // Count the number of Careers
     * const count = await prisma.careers.count({
     *   where: {
     *     // ... the filter for the Careers we want to count
     *   }
     * })
    **/
    count<T extends careersCountArgs>(
      args?: Subset<T, careersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CareersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Careers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CareersAggregateArgs>(args: Subset<T, CareersAggregateArgs>): Prisma.PrismaPromise<GetCareersAggregateType<T>>

    /**
     * Group by Careers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {careersGroupByArgs} args - Group by arguments.
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
      T extends careersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: careersGroupByArgs['orderBy'] }
        : { orderBy?: careersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, careersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCareersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the careers model
   */
  readonly fields: careersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for careers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__careersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    career_categories<T extends career_categoriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, career_categoriesDefaultArgs<ExtArgs>>): Prisma__career_categoriesClient<$Result.GetResult<Prisma.$career_categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comments<T extends careers$commentsArgs<ExtArgs> = {}>(args?: Subset<T, careers$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the careers model
   */
  interface careersFieldRefs {
    readonly id: FieldRef<"careers", 'Int'>
    readonly title: FieldRef<"careers", 'String'>
    readonly slug: FieldRef<"careers", 'String'>
    readonly excerpt: FieldRef<"careers", 'String'>
    readonly description: FieldRef<"careers", 'String'>
    readonly industry: FieldRef<"careers", 'String'>
    readonly field: FieldRef<"careers", 'String[]'>
    readonly state: FieldRef<"careers", 'String'>
    readonly region: FieldRef<"careers", 'String'>
    readonly created_at: FieldRef<"careers", 'DateTime'>
    readonly updated_at: FieldRef<"careers", 'DateTime'>
    readonly category_id: FieldRef<"careers", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * careers findUnique
   */
  export type careersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the careers
     */
    select?: careersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the careers
     */
    omit?: careersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: careersInclude<ExtArgs> | null
    /**
     * Filter, which careers to fetch.
     */
    where: careersWhereUniqueInput
  }

  /**
   * careers findUniqueOrThrow
   */
  export type careersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the careers
     */
    select?: careersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the careers
     */
    omit?: careersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: careersInclude<ExtArgs> | null
    /**
     * Filter, which careers to fetch.
     */
    where: careersWhereUniqueInput
  }

  /**
   * careers findFirst
   */
  export type careersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the careers
     */
    select?: careersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the careers
     */
    omit?: careersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: careersInclude<ExtArgs> | null
    /**
     * Filter, which careers to fetch.
     */
    where?: careersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of careers to fetch.
     */
    orderBy?: careersOrderByWithRelationInput | careersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for careers.
     */
    cursor?: careersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` careers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` careers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of careers.
     */
    distinct?: CareersScalarFieldEnum | CareersScalarFieldEnum[]
  }

  /**
   * careers findFirstOrThrow
   */
  export type careersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the careers
     */
    select?: careersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the careers
     */
    omit?: careersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: careersInclude<ExtArgs> | null
    /**
     * Filter, which careers to fetch.
     */
    where?: careersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of careers to fetch.
     */
    orderBy?: careersOrderByWithRelationInput | careersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for careers.
     */
    cursor?: careersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` careers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` careers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of careers.
     */
    distinct?: CareersScalarFieldEnum | CareersScalarFieldEnum[]
  }

  /**
   * careers findMany
   */
  export type careersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the careers
     */
    select?: careersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the careers
     */
    omit?: careersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: careersInclude<ExtArgs> | null
    /**
     * Filter, which careers to fetch.
     */
    where?: careersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of careers to fetch.
     */
    orderBy?: careersOrderByWithRelationInput | careersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing careers.
     */
    cursor?: careersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` careers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` careers.
     */
    skip?: number
    distinct?: CareersScalarFieldEnum | CareersScalarFieldEnum[]
  }

  /**
   * careers create
   */
  export type careersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the careers
     */
    select?: careersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the careers
     */
    omit?: careersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: careersInclude<ExtArgs> | null
    /**
     * The data needed to create a careers.
     */
    data: XOR<careersCreateInput, careersUncheckedCreateInput>
  }

  /**
   * careers createMany
   */
  export type careersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many careers.
     */
    data: careersCreateManyInput | careersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * careers createManyAndReturn
   */
  export type careersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the careers
     */
    select?: careersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the careers
     */
    omit?: careersOmit<ExtArgs> | null
    /**
     * The data used to create many careers.
     */
    data: careersCreateManyInput | careersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: careersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * careers update
   */
  export type careersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the careers
     */
    select?: careersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the careers
     */
    omit?: careersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: careersInclude<ExtArgs> | null
    /**
     * The data needed to update a careers.
     */
    data: XOR<careersUpdateInput, careersUncheckedUpdateInput>
    /**
     * Choose, which careers to update.
     */
    where: careersWhereUniqueInput
  }

  /**
   * careers updateMany
   */
  export type careersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update careers.
     */
    data: XOR<careersUpdateManyMutationInput, careersUncheckedUpdateManyInput>
    /**
     * Filter which careers to update
     */
    where?: careersWhereInput
    /**
     * Limit how many careers to update.
     */
    limit?: number
  }

  /**
   * careers updateManyAndReturn
   */
  export type careersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the careers
     */
    select?: careersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the careers
     */
    omit?: careersOmit<ExtArgs> | null
    /**
     * The data used to update careers.
     */
    data: XOR<careersUpdateManyMutationInput, careersUncheckedUpdateManyInput>
    /**
     * Filter which careers to update
     */
    where?: careersWhereInput
    /**
     * Limit how many careers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: careersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * careers upsert
   */
  export type careersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the careers
     */
    select?: careersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the careers
     */
    omit?: careersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: careersInclude<ExtArgs> | null
    /**
     * The filter to search for the careers to update in case it exists.
     */
    where: careersWhereUniqueInput
    /**
     * In case the careers found by the `where` argument doesn't exist, create a new careers with this data.
     */
    create: XOR<careersCreateInput, careersUncheckedCreateInput>
    /**
     * In case the careers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<careersUpdateInput, careersUncheckedUpdateInput>
  }

  /**
   * careers delete
   */
  export type careersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the careers
     */
    select?: careersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the careers
     */
    omit?: careersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: careersInclude<ExtArgs> | null
    /**
     * Filter which careers to delete.
     */
    where: careersWhereUniqueInput
  }

  /**
   * careers deleteMany
   */
  export type careersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which careers to delete
     */
    where?: careersWhereInput
    /**
     * Limit how many careers to delete.
     */
    limit?: number
  }

  /**
   * careers.comments
   */
  export type careers$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    where?: commentsWhereInput
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    cursor?: commentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * careers without action
   */
  export type careersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the careers
     */
    select?: careersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the careers
     */
    omit?: careersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: careersInclude<ExtArgs> | null
  }


  /**
   * Model categories
   */

  export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  export type CategoriesAvgAggregateOutputType = {
    id: number | null
  }

  export type CategoriesSumAggregateOutputType = {
    id: number | null
  }

  export type CategoriesMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CategoriesMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CategoriesCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type CategoriesAvgAggregateInputType = {
    id?: true
  }

  export type CategoriesSumAggregateInputType = {
    id?: true
  }

  export type CategoriesMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoriesMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoriesCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type CategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to aggregate.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories
    **/
    _count?: true | CategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesMaxAggregateInputType
  }

  export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategories[P]>
      : GetScalarType<T[P], AggregateCategories[P]>
  }




  export type categoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriesWhereInput
    orderBy?: categoriesOrderByWithAggregationInput | categoriesOrderByWithAggregationInput[]
    by: CategoriesScalarFieldEnum[] | CategoriesScalarFieldEnum
    having?: categoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesCountAggregateInputType | true
    _avg?: CategoriesAvgAggregateInputType
    _sum?: CategoriesSumAggregateInputType
    _min?: CategoriesMinAggregateInputType
    _max?: CategoriesMaxAggregateInputType
  }

  export type CategoriesGroupByOutputType = {
    id: number
    name: string
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  type GetCategoriesGroupByPayload<T extends categoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
        }
      >
    >


  export type categoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    projects?: boolean | categories$projectsArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type categoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["categories"]>
  export type categoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | categories$projectsArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type categoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type categoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $categoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "categories"
    objects: {
      projects: Prisma.$projectsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["categories"]>
    composites: {}
  }

  type categoriesGetPayload<S extends boolean | null | undefined | categoriesDefaultArgs> = $Result.GetResult<Prisma.$categoriesPayload, S>

  type categoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriesCountAggregateInputType | true
    }

  export interface categoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['categories'], meta: { name: 'categories' } }
    /**
     * Find zero or one Categories that matches the filter.
     * @param {categoriesFindUniqueArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoriesFindUniqueArgs>(args: SelectSubset<T, categoriesFindUniqueArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoriesFindUniqueOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, categoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoriesFindFirstArgs>(args?: SelectSubset<T, categoriesFindFirstArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, categoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categories.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriesWithIdOnly = await prisma.categories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends categoriesFindManyArgs>(args?: SelectSubset<T, categoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categories.
     * @param {categoriesCreateArgs} args - Arguments to create a Categories.
     * @example
     * // Create one Categories
     * const Categories = await prisma.categories.create({
     *   data: {
     *     // ... data to create a Categories
     *   }
     * })
     * 
     */
    create<T extends categoriesCreateArgs>(args: SelectSubset<T, categoriesCreateArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {categoriesCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoriesCreateManyArgs>(args?: SelectSubset<T, categoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {categoriesCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends categoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, categoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categories.
     * @param {categoriesDeleteArgs} args - Arguments to delete one Categories.
     * @example
     * // Delete one Categories
     * const Categories = await prisma.categories.delete({
     *   where: {
     *     // ... filter to delete one Categories
     *   }
     * })
     * 
     */
    delete<T extends categoriesDeleteArgs>(args: SelectSubset<T, categoriesDeleteArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categories.
     * @param {categoriesUpdateArgs} args - Arguments to update one Categories.
     * @example
     * // Update one Categories
     * const categories = await prisma.categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoriesUpdateArgs>(args: SelectSubset<T, categoriesUpdateArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {categoriesDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoriesDeleteManyArgs>(args?: SelectSubset<T, categoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoriesUpdateManyArgs>(args: SelectSubset<T, categoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {categoriesUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.updateManyAndReturn({
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
    updateManyAndReturn<T extends categoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, categoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categories.
     * @param {categoriesUpsertArgs} args - Arguments to update or create a Categories.
     * @example
     * // Update or create a Categories
     * const categories = await prisma.categories.upsert({
     *   create: {
     *     // ... data to create a Categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categories we want to update
     *   }
     * })
     */
    upsert<T extends categoriesUpsertArgs>(args: SelectSubset<T, categoriesUpsertArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categories.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends categoriesCountArgs>(
      args?: Subset<T, categoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriesAggregateArgs>(args: Subset<T, CategoriesAggregateArgs>): Prisma.PrismaPromise<GetCategoriesAggregateType<T>>

    /**
     * Group by Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesGroupByArgs} args - Group by arguments.
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
      T extends categoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoriesGroupByArgs['orderBy'] }
        : { orderBy?: categoriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, categoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the categories model
   */
  readonly fields: categoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projects<T extends categories$projectsArgs<ExtArgs> = {}>(args?: Subset<T, categories$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the categories model
   */
  interface categoriesFieldRefs {
    readonly id: FieldRef<"categories", 'Int'>
    readonly name: FieldRef<"categories", 'String'>
  }
    

  // Custom InputTypes
  /**
   * categories findUnique
   */
  export type categoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories findUniqueOrThrow
   */
  export type categoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories findFirst
   */
  export type categoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories findFirstOrThrow
   */
  export type categoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories findMany
   */
  export type categoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories create
   */
  export type categoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a categories.
     */
    data: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
  }

  /**
   * categories createMany
   */
  export type categoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categories.
     */
    data: categoriesCreateManyInput | categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categories createManyAndReturn
   */
  export type categoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * The data used to create many categories.
     */
    data: categoriesCreateManyInput | categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categories update
   */
  export type categoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a categories.
     */
    data: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
    /**
     * Choose, which categories to update.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories updateMany
   */
  export type categoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categories.
     */
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * categories updateManyAndReturn
   */
  export type categoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * The data used to update categories.
     */
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * categories upsert
   */
  export type categoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the categories to update in case it exists.
     */
    where: categoriesWhereUniqueInput
    /**
     * In case the categories found by the `where` argument doesn't exist, create a new categories with this data.
     */
    create: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
    /**
     * In case the categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
  }

  /**
   * categories delete
   */
  export type categoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter which categories to delete.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories deleteMany
   */
  export type categoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to delete
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to delete.
     */
    limit?: number
  }

  /**
   * categories.projects
   */
  export type categories$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    where?: projectsWhereInput
    orderBy?: projectsOrderByWithRelationInput | projectsOrderByWithRelationInput[]
    cursor?: projectsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * categories without action
   */
  export type categoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
  }


  /**
   * Model comments
   */

  export type AggregateComments = {
    _count: CommentsCountAggregateOutputType | null
    _avg: CommentsAvgAggregateOutputType | null
    _sum: CommentsSumAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  export type CommentsAvgAggregateOutputType = {
    id: number | null
    career_id: number | null
  }

  export type CommentsSumAggregateOutputType = {
    id: number | null
    career_id: number | null
  }

  export type CommentsMinAggregateOutputType = {
    id: number | null
    career_id: number | null
    name: string | null
    email: string | null
    content: string | null
    created_at: Date | null
  }

  export type CommentsMaxAggregateOutputType = {
    id: number | null
    career_id: number | null
    name: string | null
    email: string | null
    content: string | null
    created_at: Date | null
  }

  export type CommentsCountAggregateOutputType = {
    id: number
    career_id: number
    name: number
    email: number
    content: number
    created_at: number
    _all: number
  }


  export type CommentsAvgAggregateInputType = {
    id?: true
    career_id?: true
  }

  export type CommentsSumAggregateInputType = {
    id?: true
    career_id?: true
  }

  export type CommentsMinAggregateInputType = {
    id?: true
    career_id?: true
    name?: true
    email?: true
    content?: true
    created_at?: true
  }

  export type CommentsMaxAggregateInputType = {
    id?: true
    career_id?: true
    name?: true
    email?: true
    content?: true
    created_at?: true
  }

  export type CommentsCountAggregateInputType = {
    id?: true
    career_id?: true
    name?: true
    email?: true
    content?: true
    created_at?: true
    _all?: true
  }

  export type CommentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comments to aggregate.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned comments
    **/
    _count?: true | CommentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentsMaxAggregateInputType
  }

  export type GetCommentsAggregateType<T extends CommentsAggregateArgs> = {
        [P in keyof T & keyof AggregateComments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComments[P]>
      : GetScalarType<T[P], AggregateComments[P]>
  }




  export type commentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentsWhereInput
    orderBy?: commentsOrderByWithAggregationInput | commentsOrderByWithAggregationInput[]
    by: CommentsScalarFieldEnum[] | CommentsScalarFieldEnum
    having?: commentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentsCountAggregateInputType | true
    _avg?: CommentsAvgAggregateInputType
    _sum?: CommentsSumAggregateInputType
    _min?: CommentsMinAggregateInputType
    _max?: CommentsMaxAggregateInputType
  }

  export type CommentsGroupByOutputType = {
    id: number
    career_id: number
    name: string
    email: string
    content: string
    created_at: Date | null
    _count: CommentsCountAggregateOutputType | null
    _avg: CommentsAvgAggregateOutputType | null
    _sum: CommentsSumAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  type GetCommentsGroupByPayload<T extends commentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentsGroupByOutputType[P]>
            : GetScalarType<T[P], CommentsGroupByOutputType[P]>
        }
      >
    >


  export type commentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    career_id?: boolean
    name?: boolean
    email?: boolean
    content?: boolean
    created_at?: boolean
    careers?: boolean | careersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type commentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    career_id?: boolean
    name?: boolean
    email?: boolean
    content?: boolean
    created_at?: boolean
    careers?: boolean | careersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type commentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    career_id?: boolean
    name?: boolean
    email?: boolean
    content?: boolean
    created_at?: boolean
    careers?: boolean | careersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type commentsSelectScalar = {
    id?: boolean
    career_id?: boolean
    name?: boolean
    email?: boolean
    content?: boolean
    created_at?: boolean
  }

  export type commentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "career_id" | "name" | "email" | "content" | "created_at", ExtArgs["result"]["comments"]>
  export type commentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    careers?: boolean | careersDefaultArgs<ExtArgs>
  }
  export type commentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    careers?: boolean | careersDefaultArgs<ExtArgs>
  }
  export type commentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    careers?: boolean | careersDefaultArgs<ExtArgs>
  }

  export type $commentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "comments"
    objects: {
      careers: Prisma.$careersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      career_id: number
      name: string
      email: string
      content: string
      created_at: Date | null
    }, ExtArgs["result"]["comments"]>
    composites: {}
  }

  type commentsGetPayload<S extends boolean | null | undefined | commentsDefaultArgs> = $Result.GetResult<Prisma.$commentsPayload, S>

  type commentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<commentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentsCountAggregateInputType | true
    }

  export interface commentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['comments'], meta: { name: 'comments' } }
    /**
     * Find zero or one Comments that matches the filter.
     * @param {commentsFindUniqueArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends commentsFindUniqueArgs>(args: SelectSubset<T, commentsFindUniqueArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {commentsFindUniqueOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends commentsFindUniqueOrThrowArgs>(args: SelectSubset<T, commentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsFindFirstArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends commentsFindFirstArgs>(args?: SelectSubset<T, commentsFindFirstArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsFindFirstOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends commentsFindFirstOrThrowArgs>(args?: SelectSubset<T, commentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comments.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentsWithIdOnly = await prisma.comments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends commentsFindManyArgs>(args?: SelectSubset<T, commentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comments.
     * @param {commentsCreateArgs} args - Arguments to create a Comments.
     * @example
     * // Create one Comments
     * const Comments = await prisma.comments.create({
     *   data: {
     *     // ... data to create a Comments
     *   }
     * })
     * 
     */
    create<T extends commentsCreateArgs>(args: SelectSubset<T, commentsCreateArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {commentsCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comments = await prisma.comments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends commentsCreateManyArgs>(args?: SelectSubset<T, commentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {commentsCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comments = await prisma.comments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentsWithIdOnly = await prisma.comments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends commentsCreateManyAndReturnArgs>(args?: SelectSubset<T, commentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comments.
     * @param {commentsDeleteArgs} args - Arguments to delete one Comments.
     * @example
     * // Delete one Comments
     * const Comments = await prisma.comments.delete({
     *   where: {
     *     // ... filter to delete one Comments
     *   }
     * })
     * 
     */
    delete<T extends commentsDeleteArgs>(args: SelectSubset<T, commentsDeleteArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comments.
     * @param {commentsUpdateArgs} args - Arguments to update one Comments.
     * @example
     * // Update one Comments
     * const comments = await prisma.comments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends commentsUpdateArgs>(args: SelectSubset<T, commentsUpdateArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {commentsDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends commentsDeleteManyArgs>(args?: SelectSubset<T, commentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comments = await prisma.comments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends commentsUpdateManyArgs>(args: SelectSubset<T, commentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {commentsUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comments = await prisma.comments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentsWithIdOnly = await prisma.comments.updateManyAndReturn({
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
    updateManyAndReturn<T extends commentsUpdateManyAndReturnArgs>(args: SelectSubset<T, commentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comments.
     * @param {commentsUpsertArgs} args - Arguments to update or create a Comments.
     * @example
     * // Update or create a Comments
     * const comments = await prisma.comments.upsert({
     *   create: {
     *     // ... data to create a Comments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comments we want to update
     *   }
     * })
     */
    upsert<T extends commentsUpsertArgs>(args: SelectSubset<T, commentsUpsertArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comments.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends commentsCountArgs>(
      args?: Subset<T, commentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentsAggregateArgs>(args: Subset<T, CommentsAggregateArgs>): Prisma.PrismaPromise<GetCommentsAggregateType<T>>

    /**
     * Group by Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsGroupByArgs} args - Group by arguments.
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
      T extends commentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: commentsGroupByArgs['orderBy'] }
        : { orderBy?: commentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, commentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the comments model
   */
  readonly fields: commentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for comments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__commentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    careers<T extends careersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, careersDefaultArgs<ExtArgs>>): Prisma__careersClient<$Result.GetResult<Prisma.$careersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the comments model
   */
  interface commentsFieldRefs {
    readonly id: FieldRef<"comments", 'Int'>
    readonly career_id: FieldRef<"comments", 'Int'>
    readonly name: FieldRef<"comments", 'String'>
    readonly email: FieldRef<"comments", 'String'>
    readonly content: FieldRef<"comments", 'String'>
    readonly created_at: FieldRef<"comments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * comments findUnique
   */
  export type commentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments findUniqueOrThrow
   */
  export type commentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments findFirst
   */
  export type commentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comments.
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * comments findFirstOrThrow
   */
  export type commentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comments.
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * comments findMany
   */
  export type commentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing comments.
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * comments create
   */
  export type commentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * The data needed to create a comments.
     */
    data: XOR<commentsCreateInput, commentsUncheckedCreateInput>
  }

  /**
   * comments createMany
   */
  export type commentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many comments.
     */
    data: commentsCreateManyInput | commentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * comments createManyAndReturn
   */
  export type commentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * The data used to create many comments.
     */
    data: commentsCreateManyInput | commentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * comments update
   */
  export type commentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * The data needed to update a comments.
     */
    data: XOR<commentsUpdateInput, commentsUncheckedUpdateInput>
    /**
     * Choose, which comments to update.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments updateMany
   */
  export type commentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update comments.
     */
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyInput>
    /**
     * Filter which comments to update
     */
    where?: commentsWhereInput
    /**
     * Limit how many comments to update.
     */
    limit?: number
  }

  /**
   * comments updateManyAndReturn
   */
  export type commentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * The data used to update comments.
     */
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyInput>
    /**
     * Filter which comments to update
     */
    where?: commentsWhereInput
    /**
     * Limit how many comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * comments upsert
   */
  export type commentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * The filter to search for the comments to update in case it exists.
     */
    where: commentsWhereUniqueInput
    /**
     * In case the comments found by the `where` argument doesn't exist, create a new comments with this data.
     */
    create: XOR<commentsCreateInput, commentsUncheckedCreateInput>
    /**
     * In case the comments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<commentsUpdateInput, commentsUncheckedUpdateInput>
  }

  /**
   * comments delete
   */
  export type commentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter which comments to delete.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments deleteMany
   */
  export type commentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comments to delete
     */
    where?: commentsWhereInput
    /**
     * Limit how many comments to delete.
     */
    limit?: number
  }

  /**
   * comments without action
   */
  export type commentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
  }


  /**
   * Model expertise
   */

  export type AggregateExpertise = {
    _count: ExpertiseCountAggregateOutputType | null
    _avg: ExpertiseAvgAggregateOutputType | null
    _sum: ExpertiseSumAggregateOutputType | null
    _min: ExpertiseMinAggregateOutputType | null
    _max: ExpertiseMaxAggregateOutputType | null
  }

  export type ExpertiseAvgAggregateOutputType = {
    id: number | null
  }

  export type ExpertiseSumAggregateOutputType = {
    id: number | null
  }

  export type ExpertiseMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type ExpertiseMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type ExpertiseCountAggregateOutputType = {
    id: number
    name: number
    description: number
    img_url: number
    _all: number
  }


  export type ExpertiseAvgAggregateInputType = {
    id?: true
  }

  export type ExpertiseSumAggregateInputType = {
    id?: true
  }

  export type ExpertiseMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type ExpertiseMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type ExpertiseCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    img_url?: true
    _all?: true
  }

  export type ExpertiseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which expertise to aggregate.
     */
    where?: expertiseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of expertise to fetch.
     */
    orderBy?: expertiseOrderByWithRelationInput | expertiseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: expertiseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` expertise from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` expertise.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned expertise
    **/
    _count?: true | ExpertiseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExpertiseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExpertiseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpertiseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpertiseMaxAggregateInputType
  }

  export type GetExpertiseAggregateType<T extends ExpertiseAggregateArgs> = {
        [P in keyof T & keyof AggregateExpertise]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpertise[P]>
      : GetScalarType<T[P], AggregateExpertise[P]>
  }




  export type expertiseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: expertiseWhereInput
    orderBy?: expertiseOrderByWithAggregationInput | expertiseOrderByWithAggregationInput[]
    by: ExpertiseScalarFieldEnum[] | ExpertiseScalarFieldEnum
    having?: expertiseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpertiseCountAggregateInputType | true
    _avg?: ExpertiseAvgAggregateInputType
    _sum?: ExpertiseSumAggregateInputType
    _min?: ExpertiseMinAggregateInputType
    _max?: ExpertiseMaxAggregateInputType
  }

  export type ExpertiseGroupByOutputType = {
    id: number
    name: string | null
    description: string | null
    img_url: JsonValue | null
    _count: ExpertiseCountAggregateOutputType | null
    _avg: ExpertiseAvgAggregateOutputType | null
    _sum: ExpertiseSumAggregateOutputType | null
    _min: ExpertiseMinAggregateOutputType | null
    _max: ExpertiseMaxAggregateOutputType | null
  }

  type GetExpertiseGroupByPayload<T extends expertiseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpertiseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpertiseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpertiseGroupByOutputType[P]>
            : GetScalarType<T[P], ExpertiseGroupByOutputType[P]>
        }
      >
    >


  export type expertiseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    img_url?: boolean
  }, ExtArgs["result"]["expertise"]>

  export type expertiseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    img_url?: boolean
  }, ExtArgs["result"]["expertise"]>

  export type expertiseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    img_url?: boolean
  }, ExtArgs["result"]["expertise"]>

  export type expertiseSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    img_url?: boolean
  }

  export type expertiseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "img_url", ExtArgs["result"]["expertise"]>

  export type $expertisePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "expertise"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      description: string | null
      img_url: Prisma.JsonValue | null
    }, ExtArgs["result"]["expertise"]>
    composites: {}
  }

  type expertiseGetPayload<S extends boolean | null | undefined | expertiseDefaultArgs> = $Result.GetResult<Prisma.$expertisePayload, S>

  type expertiseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<expertiseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExpertiseCountAggregateInputType | true
    }

  export interface expertiseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['expertise'], meta: { name: 'expertise' } }
    /**
     * Find zero or one Expertise that matches the filter.
     * @param {expertiseFindUniqueArgs} args - Arguments to find a Expertise
     * @example
     * // Get one Expertise
     * const expertise = await prisma.expertise.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends expertiseFindUniqueArgs>(args: SelectSubset<T, expertiseFindUniqueArgs<ExtArgs>>): Prisma__expertiseClient<$Result.GetResult<Prisma.$expertisePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Expertise that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {expertiseFindUniqueOrThrowArgs} args - Arguments to find a Expertise
     * @example
     * // Get one Expertise
     * const expertise = await prisma.expertise.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends expertiseFindUniqueOrThrowArgs>(args: SelectSubset<T, expertiseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__expertiseClient<$Result.GetResult<Prisma.$expertisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expertise that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expertiseFindFirstArgs} args - Arguments to find a Expertise
     * @example
     * // Get one Expertise
     * const expertise = await prisma.expertise.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends expertiseFindFirstArgs>(args?: SelectSubset<T, expertiseFindFirstArgs<ExtArgs>>): Prisma__expertiseClient<$Result.GetResult<Prisma.$expertisePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expertise that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expertiseFindFirstOrThrowArgs} args - Arguments to find a Expertise
     * @example
     * // Get one Expertise
     * const expertise = await prisma.expertise.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends expertiseFindFirstOrThrowArgs>(args?: SelectSubset<T, expertiseFindFirstOrThrowArgs<ExtArgs>>): Prisma__expertiseClient<$Result.GetResult<Prisma.$expertisePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Expertise that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expertiseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Expertise
     * const expertise = await prisma.expertise.findMany()
     * 
     * // Get first 10 Expertise
     * const expertise = await prisma.expertise.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const expertiseWithIdOnly = await prisma.expertise.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends expertiseFindManyArgs>(args?: SelectSubset<T, expertiseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$expertisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Expertise.
     * @param {expertiseCreateArgs} args - Arguments to create a Expertise.
     * @example
     * // Create one Expertise
     * const Expertise = await prisma.expertise.create({
     *   data: {
     *     // ... data to create a Expertise
     *   }
     * })
     * 
     */
    create<T extends expertiseCreateArgs>(args: SelectSubset<T, expertiseCreateArgs<ExtArgs>>): Prisma__expertiseClient<$Result.GetResult<Prisma.$expertisePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Expertise.
     * @param {expertiseCreateManyArgs} args - Arguments to create many Expertise.
     * @example
     * // Create many Expertise
     * const expertise = await prisma.expertise.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends expertiseCreateManyArgs>(args?: SelectSubset<T, expertiseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Expertise and returns the data saved in the database.
     * @param {expertiseCreateManyAndReturnArgs} args - Arguments to create many Expertise.
     * @example
     * // Create many Expertise
     * const expertise = await prisma.expertise.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Expertise and only return the `id`
     * const expertiseWithIdOnly = await prisma.expertise.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends expertiseCreateManyAndReturnArgs>(args?: SelectSubset<T, expertiseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$expertisePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Expertise.
     * @param {expertiseDeleteArgs} args - Arguments to delete one Expertise.
     * @example
     * // Delete one Expertise
     * const Expertise = await prisma.expertise.delete({
     *   where: {
     *     // ... filter to delete one Expertise
     *   }
     * })
     * 
     */
    delete<T extends expertiseDeleteArgs>(args: SelectSubset<T, expertiseDeleteArgs<ExtArgs>>): Prisma__expertiseClient<$Result.GetResult<Prisma.$expertisePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Expertise.
     * @param {expertiseUpdateArgs} args - Arguments to update one Expertise.
     * @example
     * // Update one Expertise
     * const expertise = await prisma.expertise.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends expertiseUpdateArgs>(args: SelectSubset<T, expertiseUpdateArgs<ExtArgs>>): Prisma__expertiseClient<$Result.GetResult<Prisma.$expertisePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Expertise.
     * @param {expertiseDeleteManyArgs} args - Arguments to filter Expertise to delete.
     * @example
     * // Delete a few Expertise
     * const { count } = await prisma.expertise.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends expertiseDeleteManyArgs>(args?: SelectSubset<T, expertiseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expertise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expertiseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Expertise
     * const expertise = await prisma.expertise.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends expertiseUpdateManyArgs>(args: SelectSubset<T, expertiseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expertise and returns the data updated in the database.
     * @param {expertiseUpdateManyAndReturnArgs} args - Arguments to update many Expertise.
     * @example
     * // Update many Expertise
     * const expertise = await prisma.expertise.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Expertise and only return the `id`
     * const expertiseWithIdOnly = await prisma.expertise.updateManyAndReturn({
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
    updateManyAndReturn<T extends expertiseUpdateManyAndReturnArgs>(args: SelectSubset<T, expertiseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$expertisePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Expertise.
     * @param {expertiseUpsertArgs} args - Arguments to update or create a Expertise.
     * @example
     * // Update or create a Expertise
     * const expertise = await prisma.expertise.upsert({
     *   create: {
     *     // ... data to create a Expertise
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Expertise we want to update
     *   }
     * })
     */
    upsert<T extends expertiseUpsertArgs>(args: SelectSubset<T, expertiseUpsertArgs<ExtArgs>>): Prisma__expertiseClient<$Result.GetResult<Prisma.$expertisePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Expertise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expertiseCountArgs} args - Arguments to filter Expertise to count.
     * @example
     * // Count the number of Expertise
     * const count = await prisma.expertise.count({
     *   where: {
     *     // ... the filter for the Expertise we want to count
     *   }
     * })
    **/
    count<T extends expertiseCountArgs>(
      args?: Subset<T, expertiseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpertiseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Expertise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertiseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExpertiseAggregateArgs>(args: Subset<T, ExpertiseAggregateArgs>): Prisma.PrismaPromise<GetExpertiseAggregateType<T>>

    /**
     * Group by Expertise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expertiseGroupByArgs} args - Group by arguments.
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
      T extends expertiseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: expertiseGroupByArgs['orderBy'] }
        : { orderBy?: expertiseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, expertiseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpertiseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the expertise model
   */
  readonly fields: expertiseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for expertise.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__expertiseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the expertise model
   */
  interface expertiseFieldRefs {
    readonly id: FieldRef<"expertise", 'Int'>
    readonly name: FieldRef<"expertise", 'String'>
    readonly description: FieldRef<"expertise", 'String'>
    readonly img_url: FieldRef<"expertise", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * expertise findUnique
   */
  export type expertiseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expertise
     */
    select?: expertiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expertise
     */
    omit?: expertiseOmit<ExtArgs> | null
    /**
     * Filter, which expertise to fetch.
     */
    where: expertiseWhereUniqueInput
  }

  /**
   * expertise findUniqueOrThrow
   */
  export type expertiseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expertise
     */
    select?: expertiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expertise
     */
    omit?: expertiseOmit<ExtArgs> | null
    /**
     * Filter, which expertise to fetch.
     */
    where: expertiseWhereUniqueInput
  }

  /**
   * expertise findFirst
   */
  export type expertiseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expertise
     */
    select?: expertiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expertise
     */
    omit?: expertiseOmit<ExtArgs> | null
    /**
     * Filter, which expertise to fetch.
     */
    where?: expertiseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of expertise to fetch.
     */
    orderBy?: expertiseOrderByWithRelationInput | expertiseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for expertise.
     */
    cursor?: expertiseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` expertise from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` expertise.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of expertise.
     */
    distinct?: ExpertiseScalarFieldEnum | ExpertiseScalarFieldEnum[]
  }

  /**
   * expertise findFirstOrThrow
   */
  export type expertiseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expertise
     */
    select?: expertiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expertise
     */
    omit?: expertiseOmit<ExtArgs> | null
    /**
     * Filter, which expertise to fetch.
     */
    where?: expertiseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of expertise to fetch.
     */
    orderBy?: expertiseOrderByWithRelationInput | expertiseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for expertise.
     */
    cursor?: expertiseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` expertise from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` expertise.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of expertise.
     */
    distinct?: ExpertiseScalarFieldEnum | ExpertiseScalarFieldEnum[]
  }

  /**
   * expertise findMany
   */
  export type expertiseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expertise
     */
    select?: expertiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expertise
     */
    omit?: expertiseOmit<ExtArgs> | null
    /**
     * Filter, which expertise to fetch.
     */
    where?: expertiseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of expertise to fetch.
     */
    orderBy?: expertiseOrderByWithRelationInput | expertiseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing expertise.
     */
    cursor?: expertiseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` expertise from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` expertise.
     */
    skip?: number
    distinct?: ExpertiseScalarFieldEnum | ExpertiseScalarFieldEnum[]
  }

  /**
   * expertise create
   */
  export type expertiseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expertise
     */
    select?: expertiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expertise
     */
    omit?: expertiseOmit<ExtArgs> | null
    /**
     * The data needed to create a expertise.
     */
    data?: XOR<expertiseCreateInput, expertiseUncheckedCreateInput>
  }

  /**
   * expertise createMany
   */
  export type expertiseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many expertise.
     */
    data: expertiseCreateManyInput | expertiseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * expertise createManyAndReturn
   */
  export type expertiseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expertise
     */
    select?: expertiseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the expertise
     */
    omit?: expertiseOmit<ExtArgs> | null
    /**
     * The data used to create many expertise.
     */
    data: expertiseCreateManyInput | expertiseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * expertise update
   */
  export type expertiseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expertise
     */
    select?: expertiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expertise
     */
    omit?: expertiseOmit<ExtArgs> | null
    /**
     * The data needed to update a expertise.
     */
    data: XOR<expertiseUpdateInput, expertiseUncheckedUpdateInput>
    /**
     * Choose, which expertise to update.
     */
    where: expertiseWhereUniqueInput
  }

  /**
   * expertise updateMany
   */
  export type expertiseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update expertise.
     */
    data: XOR<expertiseUpdateManyMutationInput, expertiseUncheckedUpdateManyInput>
    /**
     * Filter which expertise to update
     */
    where?: expertiseWhereInput
    /**
     * Limit how many expertise to update.
     */
    limit?: number
  }

  /**
   * expertise updateManyAndReturn
   */
  export type expertiseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expertise
     */
    select?: expertiseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the expertise
     */
    omit?: expertiseOmit<ExtArgs> | null
    /**
     * The data used to update expertise.
     */
    data: XOR<expertiseUpdateManyMutationInput, expertiseUncheckedUpdateManyInput>
    /**
     * Filter which expertise to update
     */
    where?: expertiseWhereInput
    /**
     * Limit how many expertise to update.
     */
    limit?: number
  }

  /**
   * expertise upsert
   */
  export type expertiseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expertise
     */
    select?: expertiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expertise
     */
    omit?: expertiseOmit<ExtArgs> | null
    /**
     * The filter to search for the expertise to update in case it exists.
     */
    where: expertiseWhereUniqueInput
    /**
     * In case the expertise found by the `where` argument doesn't exist, create a new expertise with this data.
     */
    create: XOR<expertiseCreateInput, expertiseUncheckedCreateInput>
    /**
     * In case the expertise was found with the provided `where` argument, update it with this data.
     */
    update: XOR<expertiseUpdateInput, expertiseUncheckedUpdateInput>
  }

  /**
   * expertise delete
   */
  export type expertiseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expertise
     */
    select?: expertiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expertise
     */
    omit?: expertiseOmit<ExtArgs> | null
    /**
     * Filter which expertise to delete.
     */
    where: expertiseWhereUniqueInput
  }

  /**
   * expertise deleteMany
   */
  export type expertiseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which expertise to delete
     */
    where?: expertiseWhereInput
    /**
     * Limit how many expertise to delete.
     */
    limit?: number
  }

  /**
   * expertise without action
   */
  export type expertiseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expertise
     */
    select?: expertiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expertise
     */
    omit?: expertiseOmit<ExtArgs> | null
  }


  /**
   * Model jobs
   */

  export type AggregateJobs = {
    _count: JobsCountAggregateOutputType | null
    _avg: JobsAvgAggregateOutputType | null
    _sum: JobsSumAggregateOutputType | null
    _min: JobsMinAggregateOutputType | null
    _max: JobsMaxAggregateOutputType | null
  }

  export type JobsAvgAggregateOutputType = {
    id: number | null
  }

  export type JobsSumAggregateOutputType = {
    id: number | null
  }

  export type JobsMinAggregateOutputType = {
    id: number | null
    title: string | null
    slug: string | null
    excerpt: string | null
    description: string | null
    industry: string | null
    state: string | null
    region: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type JobsMaxAggregateOutputType = {
    id: number | null
    title: string | null
    slug: string | null
    excerpt: string | null
    description: string | null
    industry: string | null
    state: string | null
    region: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type JobsCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    excerpt: number
    description: number
    categories: number
    industry: number
    field: number
    state: number
    region: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type JobsAvgAggregateInputType = {
    id?: true
  }

  export type JobsSumAggregateInputType = {
    id?: true
  }

  export type JobsMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    excerpt?: true
    description?: true
    industry?: true
    state?: true
    region?: true
    created_at?: true
    updated_at?: true
  }

  export type JobsMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    excerpt?: true
    description?: true
    industry?: true
    state?: true
    region?: true
    created_at?: true
    updated_at?: true
  }

  export type JobsCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    excerpt?: true
    description?: true
    categories?: true
    industry?: true
    field?: true
    state?: true
    region?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type JobsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which jobs to aggregate.
     */
    where?: jobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jobs to fetch.
     */
    orderBy?: jobsOrderByWithRelationInput | jobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: jobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned jobs
    **/
    _count?: true | JobsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobsMaxAggregateInputType
  }

  export type GetJobsAggregateType<T extends JobsAggregateArgs> = {
        [P in keyof T & keyof AggregateJobs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobs[P]>
      : GetScalarType<T[P], AggregateJobs[P]>
  }




  export type jobsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: jobsWhereInput
    orderBy?: jobsOrderByWithAggregationInput | jobsOrderByWithAggregationInput[]
    by: JobsScalarFieldEnum[] | JobsScalarFieldEnum
    having?: jobsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobsCountAggregateInputType | true
    _avg?: JobsAvgAggregateInputType
    _sum?: JobsSumAggregateInputType
    _min?: JobsMinAggregateInputType
    _max?: JobsMaxAggregateInputType
  }

  export type JobsGroupByOutputType = {
    id: number
    title: string
    slug: string
    excerpt: string
    description: string
    categories: string[]
    industry: string | null
    field: string[]
    state: string | null
    region: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: JobsCountAggregateOutputType | null
    _avg: JobsAvgAggregateOutputType | null
    _sum: JobsSumAggregateOutputType | null
    _min: JobsMinAggregateOutputType | null
    _max: JobsMaxAggregateOutputType | null
  }

  type GetJobsGroupByPayload<T extends jobsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobsGroupByOutputType[P]>
            : GetScalarType<T[P], JobsGroupByOutputType[P]>
        }
      >
    >


  export type jobsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    excerpt?: boolean
    description?: boolean
    categories?: boolean
    industry?: boolean
    field?: boolean
    state?: boolean
    region?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["jobs"]>

  export type jobsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    excerpt?: boolean
    description?: boolean
    categories?: boolean
    industry?: boolean
    field?: boolean
    state?: boolean
    region?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["jobs"]>

  export type jobsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    excerpt?: boolean
    description?: boolean
    categories?: boolean
    industry?: boolean
    field?: boolean
    state?: boolean
    region?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["jobs"]>

  export type jobsSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    excerpt?: boolean
    description?: boolean
    categories?: boolean
    industry?: boolean
    field?: boolean
    state?: boolean
    region?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type jobsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "slug" | "excerpt" | "description" | "categories" | "industry" | "field" | "state" | "region" | "created_at" | "updated_at", ExtArgs["result"]["jobs"]>

  export type $jobsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "jobs"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      slug: string
      excerpt: string
      description: string
      categories: string[]
      industry: string | null
      field: string[]
      state: string | null
      region: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["jobs"]>
    composites: {}
  }

  type jobsGetPayload<S extends boolean | null | undefined | jobsDefaultArgs> = $Result.GetResult<Prisma.$jobsPayload, S>

  type jobsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<jobsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobsCountAggregateInputType | true
    }

  export interface jobsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['jobs'], meta: { name: 'jobs' } }
    /**
     * Find zero or one Jobs that matches the filter.
     * @param {jobsFindUniqueArgs} args - Arguments to find a Jobs
     * @example
     * // Get one Jobs
     * const jobs = await prisma.jobs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends jobsFindUniqueArgs>(args: SelectSubset<T, jobsFindUniqueArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Jobs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {jobsFindUniqueOrThrowArgs} args - Arguments to find a Jobs
     * @example
     * // Get one Jobs
     * const jobs = await prisma.jobs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends jobsFindUniqueOrThrowArgs>(args: SelectSubset<T, jobsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobsFindFirstArgs} args - Arguments to find a Jobs
     * @example
     * // Get one Jobs
     * const jobs = await prisma.jobs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends jobsFindFirstArgs>(args?: SelectSubset<T, jobsFindFirstArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jobs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobsFindFirstOrThrowArgs} args - Arguments to find a Jobs
     * @example
     * // Get one Jobs
     * const jobs = await prisma.jobs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends jobsFindFirstOrThrowArgs>(args?: SelectSubset<T, jobsFindFirstOrThrowArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jobs
     * const jobs = await prisma.jobs.findMany()
     * 
     * // Get first 10 Jobs
     * const jobs = await prisma.jobs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobsWithIdOnly = await prisma.jobs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends jobsFindManyArgs>(args?: SelectSubset<T, jobsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Jobs.
     * @param {jobsCreateArgs} args - Arguments to create a Jobs.
     * @example
     * // Create one Jobs
     * const Jobs = await prisma.jobs.create({
     *   data: {
     *     // ... data to create a Jobs
     *   }
     * })
     * 
     */
    create<T extends jobsCreateArgs>(args: SelectSubset<T, jobsCreateArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Jobs.
     * @param {jobsCreateManyArgs} args - Arguments to create many Jobs.
     * @example
     * // Create many Jobs
     * const jobs = await prisma.jobs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends jobsCreateManyArgs>(args?: SelectSubset<T, jobsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Jobs and returns the data saved in the database.
     * @param {jobsCreateManyAndReturnArgs} args - Arguments to create many Jobs.
     * @example
     * // Create many Jobs
     * const jobs = await prisma.jobs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Jobs and only return the `id`
     * const jobsWithIdOnly = await prisma.jobs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends jobsCreateManyAndReturnArgs>(args?: SelectSubset<T, jobsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Jobs.
     * @param {jobsDeleteArgs} args - Arguments to delete one Jobs.
     * @example
     * // Delete one Jobs
     * const Jobs = await prisma.jobs.delete({
     *   where: {
     *     // ... filter to delete one Jobs
     *   }
     * })
     * 
     */
    delete<T extends jobsDeleteArgs>(args: SelectSubset<T, jobsDeleteArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Jobs.
     * @param {jobsUpdateArgs} args - Arguments to update one Jobs.
     * @example
     * // Update one Jobs
     * const jobs = await prisma.jobs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends jobsUpdateArgs>(args: SelectSubset<T, jobsUpdateArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Jobs.
     * @param {jobsDeleteManyArgs} args - Arguments to filter Jobs to delete.
     * @example
     * // Delete a few Jobs
     * const { count } = await prisma.jobs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends jobsDeleteManyArgs>(args?: SelectSubset<T, jobsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jobs
     * const jobs = await prisma.jobs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends jobsUpdateManyArgs>(args: SelectSubset<T, jobsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobs and returns the data updated in the database.
     * @param {jobsUpdateManyAndReturnArgs} args - Arguments to update many Jobs.
     * @example
     * // Update many Jobs
     * const jobs = await prisma.jobs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Jobs and only return the `id`
     * const jobsWithIdOnly = await prisma.jobs.updateManyAndReturn({
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
    updateManyAndReturn<T extends jobsUpdateManyAndReturnArgs>(args: SelectSubset<T, jobsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Jobs.
     * @param {jobsUpsertArgs} args - Arguments to update or create a Jobs.
     * @example
     * // Update or create a Jobs
     * const jobs = await prisma.jobs.upsert({
     *   create: {
     *     // ... data to create a Jobs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Jobs we want to update
     *   }
     * })
     */
    upsert<T extends jobsUpsertArgs>(args: SelectSubset<T, jobsUpsertArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobsCountArgs} args - Arguments to filter Jobs to count.
     * @example
     * // Count the number of Jobs
     * const count = await prisma.jobs.count({
     *   where: {
     *     // ... the filter for the Jobs we want to count
     *   }
     * })
    **/
    count<T extends jobsCountArgs>(
      args?: Subset<T, jobsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JobsAggregateArgs>(args: Subset<T, JobsAggregateArgs>): Prisma.PrismaPromise<GetJobsAggregateType<T>>

    /**
     * Group by Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobsGroupByArgs} args - Group by arguments.
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
      T extends jobsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: jobsGroupByArgs['orderBy'] }
        : { orderBy?: jobsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, jobsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the jobs model
   */
  readonly fields: jobsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for jobs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__jobsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the jobs model
   */
  interface jobsFieldRefs {
    readonly id: FieldRef<"jobs", 'Int'>
    readonly title: FieldRef<"jobs", 'String'>
    readonly slug: FieldRef<"jobs", 'String'>
    readonly excerpt: FieldRef<"jobs", 'String'>
    readonly description: FieldRef<"jobs", 'String'>
    readonly categories: FieldRef<"jobs", 'String[]'>
    readonly industry: FieldRef<"jobs", 'String'>
    readonly field: FieldRef<"jobs", 'String[]'>
    readonly state: FieldRef<"jobs", 'String'>
    readonly region: FieldRef<"jobs", 'String'>
    readonly created_at: FieldRef<"jobs", 'DateTime'>
    readonly updated_at: FieldRef<"jobs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * jobs findUnique
   */
  export type jobsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * Filter, which jobs to fetch.
     */
    where: jobsWhereUniqueInput
  }

  /**
   * jobs findUniqueOrThrow
   */
  export type jobsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * Filter, which jobs to fetch.
     */
    where: jobsWhereUniqueInput
  }

  /**
   * jobs findFirst
   */
  export type jobsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * Filter, which jobs to fetch.
     */
    where?: jobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jobs to fetch.
     */
    orderBy?: jobsOrderByWithRelationInput | jobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for jobs.
     */
    cursor?: jobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of jobs.
     */
    distinct?: JobsScalarFieldEnum | JobsScalarFieldEnum[]
  }

  /**
   * jobs findFirstOrThrow
   */
  export type jobsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * Filter, which jobs to fetch.
     */
    where?: jobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jobs to fetch.
     */
    orderBy?: jobsOrderByWithRelationInput | jobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for jobs.
     */
    cursor?: jobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of jobs.
     */
    distinct?: JobsScalarFieldEnum | JobsScalarFieldEnum[]
  }

  /**
   * jobs findMany
   */
  export type jobsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * Filter, which jobs to fetch.
     */
    where?: jobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jobs to fetch.
     */
    orderBy?: jobsOrderByWithRelationInput | jobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing jobs.
     */
    cursor?: jobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jobs.
     */
    skip?: number
    distinct?: JobsScalarFieldEnum | JobsScalarFieldEnum[]
  }

  /**
   * jobs create
   */
  export type jobsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * The data needed to create a jobs.
     */
    data: XOR<jobsCreateInput, jobsUncheckedCreateInput>
  }

  /**
   * jobs createMany
   */
  export type jobsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many jobs.
     */
    data: jobsCreateManyInput | jobsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * jobs createManyAndReturn
   */
  export type jobsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * The data used to create many jobs.
     */
    data: jobsCreateManyInput | jobsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * jobs update
   */
  export type jobsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * The data needed to update a jobs.
     */
    data: XOR<jobsUpdateInput, jobsUncheckedUpdateInput>
    /**
     * Choose, which jobs to update.
     */
    where: jobsWhereUniqueInput
  }

  /**
   * jobs updateMany
   */
  export type jobsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update jobs.
     */
    data: XOR<jobsUpdateManyMutationInput, jobsUncheckedUpdateManyInput>
    /**
     * Filter which jobs to update
     */
    where?: jobsWhereInput
    /**
     * Limit how many jobs to update.
     */
    limit?: number
  }

  /**
   * jobs updateManyAndReturn
   */
  export type jobsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * The data used to update jobs.
     */
    data: XOR<jobsUpdateManyMutationInput, jobsUncheckedUpdateManyInput>
    /**
     * Filter which jobs to update
     */
    where?: jobsWhereInput
    /**
     * Limit how many jobs to update.
     */
    limit?: number
  }

  /**
   * jobs upsert
   */
  export type jobsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * The filter to search for the jobs to update in case it exists.
     */
    where: jobsWhereUniqueInput
    /**
     * In case the jobs found by the `where` argument doesn't exist, create a new jobs with this data.
     */
    create: XOR<jobsCreateInput, jobsUncheckedCreateInput>
    /**
     * In case the jobs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<jobsUpdateInput, jobsUncheckedUpdateInput>
  }

  /**
   * jobs delete
   */
  export type jobsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * Filter which jobs to delete.
     */
    where: jobsWhereUniqueInput
  }

  /**
   * jobs deleteMany
   */
  export type jobsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which jobs to delete
     */
    where?: jobsWhereInput
    /**
     * Limit how many jobs to delete.
     */
    limit?: number
  }

  /**
   * jobs without action
   */
  export type jobsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
  }


  /**
   * Model messages
   */

  export type AggregateMessages = {
    _count: MessagesCountAggregateOutputType | null
    _avg: MessagesAvgAggregateOutputType | null
    _sum: MessagesSumAggregateOutputType | null
    _min: MessagesMinAggregateOutputType | null
    _max: MessagesMaxAggregateOutputType | null
  }

  export type MessagesAvgAggregateOutputType = {
    id: number | null
  }

  export type MessagesSumAggregateOutputType = {
    id: number | null
  }

  export type MessagesMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    message: string | null
    created_at: Date | null
  }

  export type MessagesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    message: string | null
    created_at: Date | null
  }

  export type MessagesCountAggregateOutputType = {
    id: number
    name: number
    email: number
    message: number
    created_at: number
    _all: number
  }


  export type MessagesAvgAggregateInputType = {
    id?: true
  }

  export type MessagesSumAggregateInputType = {
    id?: true
  }

  export type MessagesMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    message?: true
    created_at?: true
  }

  export type MessagesMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    message?: true
    created_at?: true
  }

  export type MessagesCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    message?: true
    created_at?: true
    _all?: true
  }

  export type MessagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which messages to aggregate.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned messages
    **/
    _count?: true | MessagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessagesMaxAggregateInputType
  }

  export type GetMessagesAggregateType<T extends MessagesAggregateArgs> = {
        [P in keyof T & keyof AggregateMessages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessages[P]>
      : GetScalarType<T[P], AggregateMessages[P]>
  }




  export type messagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: messagesWhereInput
    orderBy?: messagesOrderByWithAggregationInput | messagesOrderByWithAggregationInput[]
    by: MessagesScalarFieldEnum[] | MessagesScalarFieldEnum
    having?: messagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessagesCountAggregateInputType | true
    _avg?: MessagesAvgAggregateInputType
    _sum?: MessagesSumAggregateInputType
    _min?: MessagesMinAggregateInputType
    _max?: MessagesMaxAggregateInputType
  }

  export type MessagesGroupByOutputType = {
    id: number
    name: string
    email: string
    message: string
    created_at: Date | null
    _count: MessagesCountAggregateOutputType | null
    _avg: MessagesAvgAggregateOutputType | null
    _sum: MessagesSumAggregateOutputType | null
    _min: MessagesMinAggregateOutputType | null
    _max: MessagesMaxAggregateOutputType | null
  }

  type GetMessagesGroupByPayload<T extends messagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessagesGroupByOutputType[P]>
            : GetScalarType<T[P], MessagesGroupByOutputType[P]>
        }
      >
    >


  export type messagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    message?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["messages"]>

  export type messagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    message?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["messages"]>

  export type messagesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    message?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["messages"]>

  export type messagesSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    message?: boolean
    created_at?: boolean
  }

  export type messagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "message" | "created_at", ExtArgs["result"]["messages"]>

  export type $messagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "messages"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      message: string
      created_at: Date | null
    }, ExtArgs["result"]["messages"]>
    composites: {}
  }

  type messagesGetPayload<S extends boolean | null | undefined | messagesDefaultArgs> = $Result.GetResult<Prisma.$messagesPayload, S>

  type messagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<messagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessagesCountAggregateInputType | true
    }

  export interface messagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['messages'], meta: { name: 'messages' } }
    /**
     * Find zero or one Messages that matches the filter.
     * @param {messagesFindUniqueArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends messagesFindUniqueArgs>(args: SelectSubset<T, messagesFindUniqueArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Messages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {messagesFindUniqueOrThrowArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends messagesFindUniqueOrThrowArgs>(args: SelectSubset<T, messagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesFindFirstArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends messagesFindFirstArgs>(args?: SelectSubset<T, messagesFindFirstArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Messages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesFindFirstOrThrowArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends messagesFindFirstOrThrowArgs>(args?: SelectSubset<T, messagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.messages.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.messages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messagesWithIdOnly = await prisma.messages.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends messagesFindManyArgs>(args?: SelectSubset<T, messagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Messages.
     * @param {messagesCreateArgs} args - Arguments to create a Messages.
     * @example
     * // Create one Messages
     * const Messages = await prisma.messages.create({
     *   data: {
     *     // ... data to create a Messages
     *   }
     * })
     * 
     */
    create<T extends messagesCreateArgs>(args: SelectSubset<T, messagesCreateArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {messagesCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const messages = await prisma.messages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends messagesCreateManyArgs>(args?: SelectSubset<T, messagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {messagesCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const messages = await prisma.messages.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messagesWithIdOnly = await prisma.messages.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends messagesCreateManyAndReturnArgs>(args?: SelectSubset<T, messagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Messages.
     * @param {messagesDeleteArgs} args - Arguments to delete one Messages.
     * @example
     * // Delete one Messages
     * const Messages = await prisma.messages.delete({
     *   where: {
     *     // ... filter to delete one Messages
     *   }
     * })
     * 
     */
    delete<T extends messagesDeleteArgs>(args: SelectSubset<T, messagesDeleteArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Messages.
     * @param {messagesUpdateArgs} args - Arguments to update one Messages.
     * @example
     * // Update one Messages
     * const messages = await prisma.messages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends messagesUpdateArgs>(args: SelectSubset<T, messagesUpdateArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {messagesDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.messages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends messagesDeleteManyArgs>(args?: SelectSubset<T, messagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const messages = await prisma.messages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends messagesUpdateManyArgs>(args: SelectSubset<T, messagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {messagesUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const messages = await prisma.messages.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messagesWithIdOnly = await prisma.messages.updateManyAndReturn({
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
    updateManyAndReturn<T extends messagesUpdateManyAndReturnArgs>(args: SelectSubset<T, messagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Messages.
     * @param {messagesUpsertArgs} args - Arguments to update or create a Messages.
     * @example
     * // Update or create a Messages
     * const messages = await prisma.messages.upsert({
     *   create: {
     *     // ... data to create a Messages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Messages we want to update
     *   }
     * })
     */
    upsert<T extends messagesUpsertArgs>(args: SelectSubset<T, messagesUpsertArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.messages.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends messagesCountArgs>(
      args?: Subset<T, messagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessagesAggregateArgs>(args: Subset<T, MessagesAggregateArgs>): Prisma.PrismaPromise<GetMessagesAggregateType<T>>

    /**
     * Group by Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesGroupByArgs} args - Group by arguments.
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
      T extends messagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: messagesGroupByArgs['orderBy'] }
        : { orderBy?: messagesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, messagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the messages model
   */
  readonly fields: messagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for messages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__messagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the messages model
   */
  interface messagesFieldRefs {
    readonly id: FieldRef<"messages", 'Int'>
    readonly name: FieldRef<"messages", 'String'>
    readonly email: FieldRef<"messages", 'String'>
    readonly message: FieldRef<"messages", 'String'>
    readonly created_at: FieldRef<"messages", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * messages findUnique
   */
  export type messagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages findUniqueOrThrow
   */
  export type messagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages findFirst
   */
  export type messagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for messages.
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of messages.
     */
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * messages findFirstOrThrow
   */
  export type messagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for messages.
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of messages.
     */
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * messages findMany
   */
  export type messagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing messages.
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * messages create
   */
  export type messagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * The data needed to create a messages.
     */
    data: XOR<messagesCreateInput, messagesUncheckedCreateInput>
  }

  /**
   * messages createMany
   */
  export type messagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many messages.
     */
    data: messagesCreateManyInput | messagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * messages createManyAndReturn
   */
  export type messagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * The data used to create many messages.
     */
    data: messagesCreateManyInput | messagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * messages update
   */
  export type messagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * The data needed to update a messages.
     */
    data: XOR<messagesUpdateInput, messagesUncheckedUpdateInput>
    /**
     * Choose, which messages to update.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages updateMany
   */
  export type messagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update messages.
     */
    data: XOR<messagesUpdateManyMutationInput, messagesUncheckedUpdateManyInput>
    /**
     * Filter which messages to update
     */
    where?: messagesWhereInput
    /**
     * Limit how many messages to update.
     */
    limit?: number
  }

  /**
   * messages updateManyAndReturn
   */
  export type messagesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * The data used to update messages.
     */
    data: XOR<messagesUpdateManyMutationInput, messagesUncheckedUpdateManyInput>
    /**
     * Filter which messages to update
     */
    where?: messagesWhereInput
    /**
     * Limit how many messages to update.
     */
    limit?: number
  }

  /**
   * messages upsert
   */
  export type messagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * The filter to search for the messages to update in case it exists.
     */
    where: messagesWhereUniqueInput
    /**
     * In case the messages found by the `where` argument doesn't exist, create a new messages with this data.
     */
    create: XOR<messagesCreateInput, messagesUncheckedCreateInput>
    /**
     * In case the messages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<messagesUpdateInput, messagesUncheckedUpdateInput>
  }

  /**
   * messages delete
   */
  export type messagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Filter which messages to delete.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages deleteMany
   */
  export type messagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which messages to delete
     */
    where?: messagesWhereInput
    /**
     * Limit how many messages to delete.
     */
    limit?: number
  }

  /**
   * messages without action
   */
  export type messagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
  }


  /**
   * Model newsletters
   */

  export type AggregateNewsletters = {
    _count: NewslettersCountAggregateOutputType | null
    _avg: NewslettersAvgAggregateOutputType | null
    _sum: NewslettersSumAggregateOutputType | null
    _min: NewslettersMinAggregateOutputType | null
    _max: NewslettersMaxAggregateOutputType | null
  }

  export type NewslettersAvgAggregateOutputType = {
    id: number | null
  }

  export type NewslettersSumAggregateOutputType = {
    id: number | null
  }

  export type NewslettersMinAggregateOutputType = {
    id: number | null
    email: string | null
    platform: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type NewslettersMaxAggregateOutputType = {
    id: number | null
    email: string | null
    platform: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type NewslettersCountAggregateOutputType = {
    id: number
    email: number
    platform: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type NewslettersAvgAggregateInputType = {
    id?: true
  }

  export type NewslettersSumAggregateInputType = {
    id?: true
  }

  export type NewslettersMinAggregateInputType = {
    id?: true
    email?: true
    platform?: true
    created_at?: true
    updated_at?: true
  }

  export type NewslettersMaxAggregateInputType = {
    id?: true
    email?: true
    platform?: true
    created_at?: true
    updated_at?: true
  }

  export type NewslettersCountAggregateInputType = {
    id?: true
    email?: true
    platform?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type NewslettersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which newsletters to aggregate.
     */
    where?: newslettersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of newsletters to fetch.
     */
    orderBy?: newslettersOrderByWithRelationInput | newslettersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: newslettersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` newsletters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` newsletters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned newsletters
    **/
    _count?: true | NewslettersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NewslettersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NewslettersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewslettersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewslettersMaxAggregateInputType
  }

  export type GetNewslettersAggregateType<T extends NewslettersAggregateArgs> = {
        [P in keyof T & keyof AggregateNewsletters]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNewsletters[P]>
      : GetScalarType<T[P], AggregateNewsletters[P]>
  }




  export type newslettersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: newslettersWhereInput
    orderBy?: newslettersOrderByWithAggregationInput | newslettersOrderByWithAggregationInput[]
    by: NewslettersScalarFieldEnum[] | NewslettersScalarFieldEnum
    having?: newslettersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewslettersCountAggregateInputType | true
    _avg?: NewslettersAvgAggregateInputType
    _sum?: NewslettersSumAggregateInputType
    _min?: NewslettersMinAggregateInputType
    _max?: NewslettersMaxAggregateInputType
  }

  export type NewslettersGroupByOutputType = {
    id: number
    email: string
    platform: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: NewslettersCountAggregateOutputType | null
    _avg: NewslettersAvgAggregateOutputType | null
    _sum: NewslettersSumAggregateOutputType | null
    _min: NewslettersMinAggregateOutputType | null
    _max: NewslettersMaxAggregateOutputType | null
  }

  type GetNewslettersGroupByPayload<T extends newslettersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewslettersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewslettersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewslettersGroupByOutputType[P]>
            : GetScalarType<T[P], NewslettersGroupByOutputType[P]>
        }
      >
    >


  export type newslettersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    platform?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["newsletters"]>

  export type newslettersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    platform?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["newsletters"]>

  export type newslettersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    platform?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["newsletters"]>

  export type newslettersSelectScalar = {
    id?: boolean
    email?: boolean
    platform?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type newslettersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "platform" | "created_at" | "updated_at", ExtArgs["result"]["newsletters"]>

  export type $newslettersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "newsletters"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      platform: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["newsletters"]>
    composites: {}
  }

  type newslettersGetPayload<S extends boolean | null | undefined | newslettersDefaultArgs> = $Result.GetResult<Prisma.$newslettersPayload, S>

  type newslettersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<newslettersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewslettersCountAggregateInputType | true
    }

  export interface newslettersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['newsletters'], meta: { name: 'newsletters' } }
    /**
     * Find zero or one Newsletters that matches the filter.
     * @param {newslettersFindUniqueArgs} args - Arguments to find a Newsletters
     * @example
     * // Get one Newsletters
     * const newsletters = await prisma.newsletters.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends newslettersFindUniqueArgs>(args: SelectSubset<T, newslettersFindUniqueArgs<ExtArgs>>): Prisma__newslettersClient<$Result.GetResult<Prisma.$newslettersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Newsletters that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {newslettersFindUniqueOrThrowArgs} args - Arguments to find a Newsletters
     * @example
     * // Get one Newsletters
     * const newsletters = await prisma.newsletters.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends newslettersFindUniqueOrThrowArgs>(args: SelectSubset<T, newslettersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__newslettersClient<$Result.GetResult<Prisma.$newslettersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Newsletters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {newslettersFindFirstArgs} args - Arguments to find a Newsletters
     * @example
     * // Get one Newsletters
     * const newsletters = await prisma.newsletters.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends newslettersFindFirstArgs>(args?: SelectSubset<T, newslettersFindFirstArgs<ExtArgs>>): Prisma__newslettersClient<$Result.GetResult<Prisma.$newslettersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Newsletters that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {newslettersFindFirstOrThrowArgs} args - Arguments to find a Newsletters
     * @example
     * // Get one Newsletters
     * const newsletters = await prisma.newsletters.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends newslettersFindFirstOrThrowArgs>(args?: SelectSubset<T, newslettersFindFirstOrThrowArgs<ExtArgs>>): Prisma__newslettersClient<$Result.GetResult<Prisma.$newslettersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Newsletters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {newslettersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Newsletters
     * const newsletters = await prisma.newsletters.findMany()
     * 
     * // Get first 10 Newsletters
     * const newsletters = await prisma.newsletters.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newslettersWithIdOnly = await prisma.newsletters.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends newslettersFindManyArgs>(args?: SelectSubset<T, newslettersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$newslettersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Newsletters.
     * @param {newslettersCreateArgs} args - Arguments to create a Newsletters.
     * @example
     * // Create one Newsletters
     * const Newsletters = await prisma.newsletters.create({
     *   data: {
     *     // ... data to create a Newsletters
     *   }
     * })
     * 
     */
    create<T extends newslettersCreateArgs>(args: SelectSubset<T, newslettersCreateArgs<ExtArgs>>): Prisma__newslettersClient<$Result.GetResult<Prisma.$newslettersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Newsletters.
     * @param {newslettersCreateManyArgs} args - Arguments to create many Newsletters.
     * @example
     * // Create many Newsletters
     * const newsletters = await prisma.newsletters.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends newslettersCreateManyArgs>(args?: SelectSubset<T, newslettersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Newsletters and returns the data saved in the database.
     * @param {newslettersCreateManyAndReturnArgs} args - Arguments to create many Newsletters.
     * @example
     * // Create many Newsletters
     * const newsletters = await prisma.newsletters.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Newsletters and only return the `id`
     * const newslettersWithIdOnly = await prisma.newsletters.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends newslettersCreateManyAndReturnArgs>(args?: SelectSubset<T, newslettersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$newslettersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Newsletters.
     * @param {newslettersDeleteArgs} args - Arguments to delete one Newsletters.
     * @example
     * // Delete one Newsletters
     * const Newsletters = await prisma.newsletters.delete({
     *   where: {
     *     // ... filter to delete one Newsletters
     *   }
     * })
     * 
     */
    delete<T extends newslettersDeleteArgs>(args: SelectSubset<T, newslettersDeleteArgs<ExtArgs>>): Prisma__newslettersClient<$Result.GetResult<Prisma.$newslettersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Newsletters.
     * @param {newslettersUpdateArgs} args - Arguments to update one Newsletters.
     * @example
     * // Update one Newsletters
     * const newsletters = await prisma.newsletters.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends newslettersUpdateArgs>(args: SelectSubset<T, newslettersUpdateArgs<ExtArgs>>): Prisma__newslettersClient<$Result.GetResult<Prisma.$newslettersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Newsletters.
     * @param {newslettersDeleteManyArgs} args - Arguments to filter Newsletters to delete.
     * @example
     * // Delete a few Newsletters
     * const { count } = await prisma.newsletters.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends newslettersDeleteManyArgs>(args?: SelectSubset<T, newslettersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Newsletters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {newslettersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Newsletters
     * const newsletters = await prisma.newsletters.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends newslettersUpdateManyArgs>(args: SelectSubset<T, newslettersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Newsletters and returns the data updated in the database.
     * @param {newslettersUpdateManyAndReturnArgs} args - Arguments to update many Newsletters.
     * @example
     * // Update many Newsletters
     * const newsletters = await prisma.newsletters.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Newsletters and only return the `id`
     * const newslettersWithIdOnly = await prisma.newsletters.updateManyAndReturn({
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
    updateManyAndReturn<T extends newslettersUpdateManyAndReturnArgs>(args: SelectSubset<T, newslettersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$newslettersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Newsletters.
     * @param {newslettersUpsertArgs} args - Arguments to update or create a Newsletters.
     * @example
     * // Update or create a Newsletters
     * const newsletters = await prisma.newsletters.upsert({
     *   create: {
     *     // ... data to create a Newsletters
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Newsletters we want to update
     *   }
     * })
     */
    upsert<T extends newslettersUpsertArgs>(args: SelectSubset<T, newslettersUpsertArgs<ExtArgs>>): Prisma__newslettersClient<$Result.GetResult<Prisma.$newslettersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Newsletters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {newslettersCountArgs} args - Arguments to filter Newsletters to count.
     * @example
     * // Count the number of Newsletters
     * const count = await prisma.newsletters.count({
     *   where: {
     *     // ... the filter for the Newsletters we want to count
     *   }
     * })
    **/
    count<T extends newslettersCountArgs>(
      args?: Subset<T, newslettersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewslettersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Newsletters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewslettersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NewslettersAggregateArgs>(args: Subset<T, NewslettersAggregateArgs>): Prisma.PrismaPromise<GetNewslettersAggregateType<T>>

    /**
     * Group by Newsletters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {newslettersGroupByArgs} args - Group by arguments.
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
      T extends newslettersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: newslettersGroupByArgs['orderBy'] }
        : { orderBy?: newslettersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, newslettersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewslettersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the newsletters model
   */
  readonly fields: newslettersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for newsletters.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__newslettersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the newsletters model
   */
  interface newslettersFieldRefs {
    readonly id: FieldRef<"newsletters", 'Int'>
    readonly email: FieldRef<"newsletters", 'String'>
    readonly platform: FieldRef<"newsletters", 'String'>
    readonly created_at: FieldRef<"newsletters", 'DateTime'>
    readonly updated_at: FieldRef<"newsletters", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * newsletters findUnique
   */
  export type newslettersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the newsletters
     */
    select?: newslettersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the newsletters
     */
    omit?: newslettersOmit<ExtArgs> | null
    /**
     * Filter, which newsletters to fetch.
     */
    where: newslettersWhereUniqueInput
  }

  /**
   * newsletters findUniqueOrThrow
   */
  export type newslettersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the newsletters
     */
    select?: newslettersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the newsletters
     */
    omit?: newslettersOmit<ExtArgs> | null
    /**
     * Filter, which newsletters to fetch.
     */
    where: newslettersWhereUniqueInput
  }

  /**
   * newsletters findFirst
   */
  export type newslettersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the newsletters
     */
    select?: newslettersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the newsletters
     */
    omit?: newslettersOmit<ExtArgs> | null
    /**
     * Filter, which newsletters to fetch.
     */
    where?: newslettersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of newsletters to fetch.
     */
    orderBy?: newslettersOrderByWithRelationInput | newslettersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for newsletters.
     */
    cursor?: newslettersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` newsletters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` newsletters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of newsletters.
     */
    distinct?: NewslettersScalarFieldEnum | NewslettersScalarFieldEnum[]
  }

  /**
   * newsletters findFirstOrThrow
   */
  export type newslettersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the newsletters
     */
    select?: newslettersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the newsletters
     */
    omit?: newslettersOmit<ExtArgs> | null
    /**
     * Filter, which newsletters to fetch.
     */
    where?: newslettersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of newsletters to fetch.
     */
    orderBy?: newslettersOrderByWithRelationInput | newslettersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for newsletters.
     */
    cursor?: newslettersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` newsletters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` newsletters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of newsletters.
     */
    distinct?: NewslettersScalarFieldEnum | NewslettersScalarFieldEnum[]
  }

  /**
   * newsletters findMany
   */
  export type newslettersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the newsletters
     */
    select?: newslettersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the newsletters
     */
    omit?: newslettersOmit<ExtArgs> | null
    /**
     * Filter, which newsletters to fetch.
     */
    where?: newslettersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of newsletters to fetch.
     */
    orderBy?: newslettersOrderByWithRelationInput | newslettersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing newsletters.
     */
    cursor?: newslettersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` newsletters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` newsletters.
     */
    skip?: number
    distinct?: NewslettersScalarFieldEnum | NewslettersScalarFieldEnum[]
  }

  /**
   * newsletters create
   */
  export type newslettersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the newsletters
     */
    select?: newslettersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the newsletters
     */
    omit?: newslettersOmit<ExtArgs> | null
    /**
     * The data needed to create a newsletters.
     */
    data: XOR<newslettersCreateInput, newslettersUncheckedCreateInput>
  }

  /**
   * newsletters createMany
   */
  export type newslettersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many newsletters.
     */
    data: newslettersCreateManyInput | newslettersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * newsletters createManyAndReturn
   */
  export type newslettersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the newsletters
     */
    select?: newslettersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the newsletters
     */
    omit?: newslettersOmit<ExtArgs> | null
    /**
     * The data used to create many newsletters.
     */
    data: newslettersCreateManyInput | newslettersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * newsletters update
   */
  export type newslettersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the newsletters
     */
    select?: newslettersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the newsletters
     */
    omit?: newslettersOmit<ExtArgs> | null
    /**
     * The data needed to update a newsletters.
     */
    data: XOR<newslettersUpdateInput, newslettersUncheckedUpdateInput>
    /**
     * Choose, which newsletters to update.
     */
    where: newslettersWhereUniqueInput
  }

  /**
   * newsletters updateMany
   */
  export type newslettersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update newsletters.
     */
    data: XOR<newslettersUpdateManyMutationInput, newslettersUncheckedUpdateManyInput>
    /**
     * Filter which newsletters to update
     */
    where?: newslettersWhereInput
    /**
     * Limit how many newsletters to update.
     */
    limit?: number
  }

  /**
   * newsletters updateManyAndReturn
   */
  export type newslettersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the newsletters
     */
    select?: newslettersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the newsletters
     */
    omit?: newslettersOmit<ExtArgs> | null
    /**
     * The data used to update newsletters.
     */
    data: XOR<newslettersUpdateManyMutationInput, newslettersUncheckedUpdateManyInput>
    /**
     * Filter which newsletters to update
     */
    where?: newslettersWhereInput
    /**
     * Limit how many newsletters to update.
     */
    limit?: number
  }

  /**
   * newsletters upsert
   */
  export type newslettersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the newsletters
     */
    select?: newslettersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the newsletters
     */
    omit?: newslettersOmit<ExtArgs> | null
    /**
     * The filter to search for the newsletters to update in case it exists.
     */
    where: newslettersWhereUniqueInput
    /**
     * In case the newsletters found by the `where` argument doesn't exist, create a new newsletters with this data.
     */
    create: XOR<newslettersCreateInput, newslettersUncheckedCreateInput>
    /**
     * In case the newsletters was found with the provided `where` argument, update it with this data.
     */
    update: XOR<newslettersUpdateInput, newslettersUncheckedUpdateInput>
  }

  /**
   * newsletters delete
   */
  export type newslettersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the newsletters
     */
    select?: newslettersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the newsletters
     */
    omit?: newslettersOmit<ExtArgs> | null
    /**
     * Filter which newsletters to delete.
     */
    where: newslettersWhereUniqueInput
  }

  /**
   * newsletters deleteMany
   */
  export type newslettersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which newsletters to delete
     */
    where?: newslettersWhereInput
    /**
     * Limit how many newsletters to delete.
     */
    limit?: number
  }

  /**
   * newsletters without action
   */
  export type newslettersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the newsletters
     */
    select?: newslettersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the newsletters
     */
    omit?: newslettersOmit<ExtArgs> | null
  }


  /**
   * Model projects
   */

  export type AggregateProjects = {
    _count: ProjectsCountAggregateOutputType | null
    _avg: ProjectsAvgAggregateOutputType | null
    _sum: ProjectsSumAggregateOutputType | null
    _min: ProjectsMinAggregateOutputType | null
    _max: ProjectsMaxAggregateOutputType | null
  }

  export type ProjectsAvgAggregateOutputType = {
    id: number | null
    category_id: number | null
  }

  export type ProjectsSumAggregateOutputType = {
    id: number | null
    category_id: number | null
  }

  export type ProjectsMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    github_link: string | null
    preview_link: string | null
    img_url: string | null
    category_id: number | null
  }

  export type ProjectsMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    github_link: string | null
    preview_link: string | null
    img_url: string | null
    category_id: number | null
  }

  export type ProjectsCountAggregateOutputType = {
    id: number
    title: number
    description: number
    github_link: number
    preview_link: number
    img_url: number
    category_id: number
    _all: number
  }


  export type ProjectsAvgAggregateInputType = {
    id?: true
    category_id?: true
  }

  export type ProjectsSumAggregateInputType = {
    id?: true
    category_id?: true
  }

  export type ProjectsMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    github_link?: true
    preview_link?: true
    img_url?: true
    category_id?: true
  }

  export type ProjectsMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    github_link?: true
    preview_link?: true
    img_url?: true
    category_id?: true
  }

  export type ProjectsCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    github_link?: true
    preview_link?: true
    img_url?: true
    category_id?: true
    _all?: true
  }

  export type ProjectsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projects to aggregate.
     */
    where?: projectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectsOrderByWithRelationInput | projectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: projectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned projects
    **/
    _count?: true | ProjectsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectsMaxAggregateInputType
  }

  export type GetProjectsAggregateType<T extends ProjectsAggregateArgs> = {
        [P in keyof T & keyof AggregateProjects]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjects[P]>
      : GetScalarType<T[P], AggregateProjects[P]>
  }




  export type projectsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectsWhereInput
    orderBy?: projectsOrderByWithAggregationInput | projectsOrderByWithAggregationInput[]
    by: ProjectsScalarFieldEnum[] | ProjectsScalarFieldEnum
    having?: projectsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectsCountAggregateInputType | true
    _avg?: ProjectsAvgAggregateInputType
    _sum?: ProjectsSumAggregateInputType
    _min?: ProjectsMinAggregateInputType
    _max?: ProjectsMaxAggregateInputType
  }

  export type ProjectsGroupByOutputType = {
    id: number
    title: string
    description: string
    github_link: string | null
    preview_link: string | null
    img_url: string
    category_id: number
    _count: ProjectsCountAggregateOutputType | null
    _avg: ProjectsAvgAggregateOutputType | null
    _sum: ProjectsSumAggregateOutputType | null
    _min: ProjectsMinAggregateOutputType | null
    _max: ProjectsMaxAggregateOutputType | null
  }

  type GetProjectsGroupByPayload<T extends projectsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectsGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectsGroupByOutputType[P]>
        }
      >
    >


  export type projectsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    github_link?: boolean
    preview_link?: boolean
    img_url?: boolean
    category_id?: boolean
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projects"]>

  export type projectsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    github_link?: boolean
    preview_link?: boolean
    img_url?: boolean
    category_id?: boolean
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projects"]>

  export type projectsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    github_link?: boolean
    preview_link?: boolean
    img_url?: boolean
    category_id?: boolean
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projects"]>

  export type projectsSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    github_link?: boolean
    preview_link?: boolean
    img_url?: boolean
    category_id?: boolean
  }

  export type projectsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "github_link" | "preview_link" | "img_url" | "category_id", ExtArgs["result"]["projects"]>
  export type projectsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
  }
  export type projectsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
  }
  export type projectsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
  }

  export type $projectsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "projects"
    objects: {
      categories: Prisma.$categoriesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      github_link: string | null
      preview_link: string | null
      img_url: string
      category_id: number
    }, ExtArgs["result"]["projects"]>
    composites: {}
  }

  type projectsGetPayload<S extends boolean | null | undefined | projectsDefaultArgs> = $Result.GetResult<Prisma.$projectsPayload, S>

  type projectsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<projectsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectsCountAggregateInputType | true
    }

  export interface projectsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['projects'], meta: { name: 'projects' } }
    /**
     * Find zero or one Projects that matches the filter.
     * @param {projectsFindUniqueArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends projectsFindUniqueArgs>(args: SelectSubset<T, projectsFindUniqueArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Projects that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {projectsFindUniqueOrThrowArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends projectsFindUniqueOrThrowArgs>(args: SelectSubset<T, projectsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsFindFirstArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends projectsFindFirstArgs>(args?: SelectSubset<T, projectsFindFirstArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Projects that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsFindFirstOrThrowArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends projectsFindFirstOrThrowArgs>(args?: SelectSubset<T, projectsFindFirstOrThrowArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.projects.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.projects.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectsWithIdOnly = await prisma.projects.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends projectsFindManyArgs>(args?: SelectSubset<T, projectsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Projects.
     * @param {projectsCreateArgs} args - Arguments to create a Projects.
     * @example
     * // Create one Projects
     * const Projects = await prisma.projects.create({
     *   data: {
     *     // ... data to create a Projects
     *   }
     * })
     * 
     */
    create<T extends projectsCreateArgs>(args: SelectSubset<T, projectsCreateArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {projectsCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const projects = await prisma.projects.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends projectsCreateManyArgs>(args?: SelectSubset<T, projectsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {projectsCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const projects = await prisma.projects.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectsWithIdOnly = await prisma.projects.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends projectsCreateManyAndReturnArgs>(args?: SelectSubset<T, projectsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Projects.
     * @param {projectsDeleteArgs} args - Arguments to delete one Projects.
     * @example
     * // Delete one Projects
     * const Projects = await prisma.projects.delete({
     *   where: {
     *     // ... filter to delete one Projects
     *   }
     * })
     * 
     */
    delete<T extends projectsDeleteArgs>(args: SelectSubset<T, projectsDeleteArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Projects.
     * @param {projectsUpdateArgs} args - Arguments to update one Projects.
     * @example
     * // Update one Projects
     * const projects = await prisma.projects.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends projectsUpdateArgs>(args: SelectSubset<T, projectsUpdateArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {projectsDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.projects.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends projectsDeleteManyArgs>(args?: SelectSubset<T, projectsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const projects = await prisma.projects.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends projectsUpdateManyArgs>(args: SelectSubset<T, projectsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {projectsUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const projects = await prisma.projects.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectsWithIdOnly = await prisma.projects.updateManyAndReturn({
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
    updateManyAndReturn<T extends projectsUpdateManyAndReturnArgs>(args: SelectSubset<T, projectsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Projects.
     * @param {projectsUpsertArgs} args - Arguments to update or create a Projects.
     * @example
     * // Update or create a Projects
     * const projects = await prisma.projects.upsert({
     *   create: {
     *     // ... data to create a Projects
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Projects we want to update
     *   }
     * })
     */
    upsert<T extends projectsUpsertArgs>(args: SelectSubset<T, projectsUpsertArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.projects.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends projectsCountArgs>(
      args?: Subset<T, projectsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectsAggregateArgs>(args: Subset<T, ProjectsAggregateArgs>): Prisma.PrismaPromise<GetProjectsAggregateType<T>>

    /**
     * Group by Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsGroupByArgs} args - Group by arguments.
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
      T extends projectsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: projectsGroupByArgs['orderBy'] }
        : { orderBy?: projectsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, projectsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the projects model
   */
  readonly fields: projectsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for projects.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__projectsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categories<T extends categoriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, categoriesDefaultArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the projects model
   */
  interface projectsFieldRefs {
    readonly id: FieldRef<"projects", 'Int'>
    readonly title: FieldRef<"projects", 'String'>
    readonly description: FieldRef<"projects", 'String'>
    readonly github_link: FieldRef<"projects", 'String'>
    readonly preview_link: FieldRef<"projects", 'String'>
    readonly img_url: FieldRef<"projects", 'String'>
    readonly category_id: FieldRef<"projects", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * projects findUnique
   */
  export type projectsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where: projectsWhereUniqueInput
  }

  /**
   * projects findUniqueOrThrow
   */
  export type projectsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where: projectsWhereUniqueInput
  }

  /**
   * projects findFirst
   */
  export type projectsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where?: projectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectsOrderByWithRelationInput | projectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projects.
     */
    cursor?: projectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * projects findFirstOrThrow
   */
  export type projectsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where?: projectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectsOrderByWithRelationInput | projectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projects.
     */
    cursor?: projectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * projects findMany
   */
  export type projectsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where?: projectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectsOrderByWithRelationInput | projectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing projects.
     */
    cursor?: projectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * projects create
   */
  export type projectsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * The data needed to create a projects.
     */
    data: XOR<projectsCreateInput, projectsUncheckedCreateInput>
  }

  /**
   * projects createMany
   */
  export type projectsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many projects.
     */
    data: projectsCreateManyInput | projectsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * projects createManyAndReturn
   */
  export type projectsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * The data used to create many projects.
     */
    data: projectsCreateManyInput | projectsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * projects update
   */
  export type projectsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * The data needed to update a projects.
     */
    data: XOR<projectsUpdateInput, projectsUncheckedUpdateInput>
    /**
     * Choose, which projects to update.
     */
    where: projectsWhereUniqueInput
  }

  /**
   * projects updateMany
   */
  export type projectsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update projects.
     */
    data: XOR<projectsUpdateManyMutationInput, projectsUncheckedUpdateManyInput>
    /**
     * Filter which projects to update
     */
    where?: projectsWhereInput
    /**
     * Limit how many projects to update.
     */
    limit?: number
  }

  /**
   * projects updateManyAndReturn
   */
  export type projectsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * The data used to update projects.
     */
    data: XOR<projectsUpdateManyMutationInput, projectsUncheckedUpdateManyInput>
    /**
     * Filter which projects to update
     */
    where?: projectsWhereInput
    /**
     * Limit how many projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * projects upsert
   */
  export type projectsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * The filter to search for the projects to update in case it exists.
     */
    where: projectsWhereUniqueInput
    /**
     * In case the projects found by the `where` argument doesn't exist, create a new projects with this data.
     */
    create: XOR<projectsCreateInput, projectsUncheckedCreateInput>
    /**
     * In case the projects was found with the provided `where` argument, update it with this data.
     */
    update: XOR<projectsUpdateInput, projectsUncheckedUpdateInput>
  }

  /**
   * projects delete
   */
  export type projectsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * Filter which projects to delete.
     */
    where: projectsWhereUniqueInput
  }

  /**
   * projects deleteMany
   */
  export type projectsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projects to delete
     */
    where?: projectsWhereInput
    /**
     * Limit how many projects to delete.
     */
    limit?: number
  }

  /**
   * projects without action
   */
  export type projectsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    username: string | null
    hashed_password: string | null
    is_admin: boolean | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    username: string | null
    hashed_password: string | null
    is_admin: boolean | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    username: number
    hashed_password: number
    is_admin: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    username?: true
    hashed_password?: true
    is_admin?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    username?: true
    hashed_password?: true
    is_admin?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    username?: true
    hashed_password?: true
    is_admin?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    username: string
    hashed_password: string
    is_admin: boolean | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    hashed_password?: boolean
    is_admin?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    hashed_password?: boolean
    is_admin?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    hashed_password?: boolean
    is_admin?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    username?: boolean
    hashed_password?: boolean
    is_admin?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "hashed_password" | "is_admin", ExtArgs["result"]["users"]>

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      hashed_password: string
      is_admin: boolean | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
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
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly username: FieldRef<"users", 'String'>
    readonly hashed_password: FieldRef<"users", 'String'>
    readonly is_admin: FieldRef<"users", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
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


  export const AboutsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    img_url: 'img_url'
  };

  export type AboutsScalarFieldEnum = (typeof AboutsScalarFieldEnum)[keyof typeof AboutsScalarFieldEnum]


  export const Career_categoriesScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type Career_categoriesScalarFieldEnum = (typeof Career_categoriesScalarFieldEnum)[keyof typeof Career_categoriesScalarFieldEnum]


  export const CareersScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    excerpt: 'excerpt',
    description: 'description',
    industry: 'industry',
    field: 'field',
    state: 'state',
    region: 'region',
    created_at: 'created_at',
    updated_at: 'updated_at',
    category_id: 'category_id'
  };

  export type CareersScalarFieldEnum = (typeof CareersScalarFieldEnum)[keyof typeof CareersScalarFieldEnum]


  export const CategoriesScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum]


  export const CommentsScalarFieldEnum: {
    id: 'id',
    career_id: 'career_id',
    name: 'name',
    email: 'email',
    content: 'content',
    created_at: 'created_at'
  };

  export type CommentsScalarFieldEnum = (typeof CommentsScalarFieldEnum)[keyof typeof CommentsScalarFieldEnum]


  export const ExpertiseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    img_url: 'img_url'
  };

  export type ExpertiseScalarFieldEnum = (typeof ExpertiseScalarFieldEnum)[keyof typeof ExpertiseScalarFieldEnum]


  export const JobsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    excerpt: 'excerpt',
    description: 'description',
    categories: 'categories',
    industry: 'industry',
    field: 'field',
    state: 'state',
    region: 'region',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type JobsScalarFieldEnum = (typeof JobsScalarFieldEnum)[keyof typeof JobsScalarFieldEnum]


  export const MessagesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    message: 'message',
    created_at: 'created_at'
  };

  export type MessagesScalarFieldEnum = (typeof MessagesScalarFieldEnum)[keyof typeof MessagesScalarFieldEnum]


  export const NewslettersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    platform: 'platform',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type NewslettersScalarFieldEnum = (typeof NewslettersScalarFieldEnum)[keyof typeof NewslettersScalarFieldEnum]


  export const ProjectsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    github_link: 'github_link',
    preview_link: 'preview_link',
    img_url: 'img_url',
    category_id: 'category_id'
  };

  export type ProjectsScalarFieldEnum = (typeof ProjectsScalarFieldEnum)[keyof typeof ProjectsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    username: 'username',
    hashed_password: 'hashed_password',
    is_admin: 'is_admin'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type aboutsWhereInput = {
    AND?: aboutsWhereInput | aboutsWhereInput[]
    OR?: aboutsWhereInput[]
    NOT?: aboutsWhereInput | aboutsWhereInput[]
    id?: IntFilter<"abouts"> | number
    title?: StringFilter<"abouts"> | string
    description?: StringFilter<"abouts"> | string
    img_url?: StringFilter<"abouts"> | string
  }

  export type aboutsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    img_url?: SortOrder
  }

  export type aboutsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: aboutsWhereInput | aboutsWhereInput[]
    OR?: aboutsWhereInput[]
    NOT?: aboutsWhereInput | aboutsWhereInput[]
    title?: StringFilter<"abouts"> | string
    description?: StringFilter<"abouts"> | string
    img_url?: StringFilter<"abouts"> | string
  }, "id">

  export type aboutsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    img_url?: SortOrder
    _count?: aboutsCountOrderByAggregateInput
    _avg?: aboutsAvgOrderByAggregateInput
    _max?: aboutsMaxOrderByAggregateInput
    _min?: aboutsMinOrderByAggregateInput
    _sum?: aboutsSumOrderByAggregateInput
  }

  export type aboutsScalarWhereWithAggregatesInput = {
    AND?: aboutsScalarWhereWithAggregatesInput | aboutsScalarWhereWithAggregatesInput[]
    OR?: aboutsScalarWhereWithAggregatesInput[]
    NOT?: aboutsScalarWhereWithAggregatesInput | aboutsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"abouts"> | number
    title?: StringWithAggregatesFilter<"abouts"> | string
    description?: StringWithAggregatesFilter<"abouts"> | string
    img_url?: StringWithAggregatesFilter<"abouts"> | string
  }

  export type career_categoriesWhereInput = {
    AND?: career_categoriesWhereInput | career_categoriesWhereInput[]
    OR?: career_categoriesWhereInput[]
    NOT?: career_categoriesWhereInput | career_categoriesWhereInput[]
    id?: IntFilter<"career_categories"> | number
    name?: StringFilter<"career_categories"> | string
    careers?: CareersListRelationFilter
  }

  export type career_categoriesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    careers?: careersOrderByRelationAggregateInput
  }

  export type career_categoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: career_categoriesWhereInput | career_categoriesWhereInput[]
    OR?: career_categoriesWhereInput[]
    NOT?: career_categoriesWhereInput | career_categoriesWhereInput[]
    careers?: CareersListRelationFilter
  }, "id" | "name">

  export type career_categoriesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: career_categoriesCountOrderByAggregateInput
    _avg?: career_categoriesAvgOrderByAggregateInput
    _max?: career_categoriesMaxOrderByAggregateInput
    _min?: career_categoriesMinOrderByAggregateInput
    _sum?: career_categoriesSumOrderByAggregateInput
  }

  export type career_categoriesScalarWhereWithAggregatesInput = {
    AND?: career_categoriesScalarWhereWithAggregatesInput | career_categoriesScalarWhereWithAggregatesInput[]
    OR?: career_categoriesScalarWhereWithAggregatesInput[]
    NOT?: career_categoriesScalarWhereWithAggregatesInput | career_categoriesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"career_categories"> | number
    name?: StringWithAggregatesFilter<"career_categories"> | string
  }

  export type careersWhereInput = {
    AND?: careersWhereInput | careersWhereInput[]
    OR?: careersWhereInput[]
    NOT?: careersWhereInput | careersWhereInput[]
    id?: IntFilter<"careers"> | number
    title?: StringFilter<"careers"> | string
    slug?: StringFilter<"careers"> | string
    excerpt?: StringFilter<"careers"> | string
    description?: StringFilter<"careers"> | string
    industry?: StringNullableFilter<"careers"> | string | null
    field?: StringNullableListFilter<"careers">
    state?: StringNullableFilter<"careers"> | string | null
    region?: StringNullableFilter<"careers"> | string | null
    created_at?: DateTimeNullableFilter<"careers"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"careers"> | Date | string | null
    category_id?: IntFilter<"careers"> | number
    career_categories?: XOR<Career_categoriesScalarRelationFilter, career_categoriesWhereInput>
    comments?: CommentsListRelationFilter
  }

  export type careersOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    description?: SortOrder
    industry?: SortOrderInput | SortOrder
    field?: SortOrder
    state?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    category_id?: SortOrder
    career_categories?: career_categoriesOrderByWithRelationInput
    comments?: commentsOrderByRelationAggregateInput
  }

  export type careersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: careersWhereInput | careersWhereInput[]
    OR?: careersWhereInput[]
    NOT?: careersWhereInput | careersWhereInput[]
    title?: StringFilter<"careers"> | string
    excerpt?: StringFilter<"careers"> | string
    description?: StringFilter<"careers"> | string
    industry?: StringNullableFilter<"careers"> | string | null
    field?: StringNullableListFilter<"careers">
    state?: StringNullableFilter<"careers"> | string | null
    region?: StringNullableFilter<"careers"> | string | null
    created_at?: DateTimeNullableFilter<"careers"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"careers"> | Date | string | null
    category_id?: IntFilter<"careers"> | number
    career_categories?: XOR<Career_categoriesScalarRelationFilter, career_categoriesWhereInput>
    comments?: CommentsListRelationFilter
  }, "id" | "slug">

  export type careersOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    description?: SortOrder
    industry?: SortOrderInput | SortOrder
    field?: SortOrder
    state?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    category_id?: SortOrder
    _count?: careersCountOrderByAggregateInput
    _avg?: careersAvgOrderByAggregateInput
    _max?: careersMaxOrderByAggregateInput
    _min?: careersMinOrderByAggregateInput
    _sum?: careersSumOrderByAggregateInput
  }

  export type careersScalarWhereWithAggregatesInput = {
    AND?: careersScalarWhereWithAggregatesInput | careersScalarWhereWithAggregatesInput[]
    OR?: careersScalarWhereWithAggregatesInput[]
    NOT?: careersScalarWhereWithAggregatesInput | careersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"careers"> | number
    title?: StringWithAggregatesFilter<"careers"> | string
    slug?: StringWithAggregatesFilter<"careers"> | string
    excerpt?: StringWithAggregatesFilter<"careers"> | string
    description?: StringWithAggregatesFilter<"careers"> | string
    industry?: StringNullableWithAggregatesFilter<"careers"> | string | null
    field?: StringNullableListFilter<"careers">
    state?: StringNullableWithAggregatesFilter<"careers"> | string | null
    region?: StringNullableWithAggregatesFilter<"careers"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"careers"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"careers"> | Date | string | null
    category_id?: IntWithAggregatesFilter<"careers"> | number
  }

  export type categoriesWhereInput = {
    AND?: categoriesWhereInput | categoriesWhereInput[]
    OR?: categoriesWhereInput[]
    NOT?: categoriesWhereInput | categoriesWhereInput[]
    id?: IntFilter<"categories"> | number
    name?: StringFilter<"categories"> | string
    projects?: ProjectsListRelationFilter
  }

  export type categoriesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    projects?: projectsOrderByRelationAggregateInput
  }

  export type categoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: categoriesWhereInput | categoriesWhereInput[]
    OR?: categoriesWhereInput[]
    NOT?: categoriesWhereInput | categoriesWhereInput[]
    projects?: ProjectsListRelationFilter
  }, "id" | "name">

  export type categoriesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: categoriesCountOrderByAggregateInput
    _avg?: categoriesAvgOrderByAggregateInput
    _max?: categoriesMaxOrderByAggregateInput
    _min?: categoriesMinOrderByAggregateInput
    _sum?: categoriesSumOrderByAggregateInput
  }

  export type categoriesScalarWhereWithAggregatesInput = {
    AND?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[]
    OR?: categoriesScalarWhereWithAggregatesInput[]
    NOT?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"categories"> | number
    name?: StringWithAggregatesFilter<"categories"> | string
  }

  export type commentsWhereInput = {
    AND?: commentsWhereInput | commentsWhereInput[]
    OR?: commentsWhereInput[]
    NOT?: commentsWhereInput | commentsWhereInput[]
    id?: IntFilter<"comments"> | number
    career_id?: IntFilter<"comments"> | number
    name?: StringFilter<"comments"> | string
    email?: StringFilter<"comments"> | string
    content?: StringFilter<"comments"> | string
    created_at?: DateTimeNullableFilter<"comments"> | Date | string | null
    careers?: XOR<CareersScalarRelationFilter, careersWhereInput>
  }

  export type commentsOrderByWithRelationInput = {
    id?: SortOrder
    career_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    content?: SortOrder
    created_at?: SortOrderInput | SortOrder
    careers?: careersOrderByWithRelationInput
  }

  export type commentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: commentsWhereInput | commentsWhereInput[]
    OR?: commentsWhereInput[]
    NOT?: commentsWhereInput | commentsWhereInput[]
    career_id?: IntFilter<"comments"> | number
    name?: StringFilter<"comments"> | string
    email?: StringFilter<"comments"> | string
    content?: StringFilter<"comments"> | string
    created_at?: DateTimeNullableFilter<"comments"> | Date | string | null
    careers?: XOR<CareersScalarRelationFilter, careersWhereInput>
  }, "id">

  export type commentsOrderByWithAggregationInput = {
    id?: SortOrder
    career_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    content?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: commentsCountOrderByAggregateInput
    _avg?: commentsAvgOrderByAggregateInput
    _max?: commentsMaxOrderByAggregateInput
    _min?: commentsMinOrderByAggregateInput
    _sum?: commentsSumOrderByAggregateInput
  }

  export type commentsScalarWhereWithAggregatesInput = {
    AND?: commentsScalarWhereWithAggregatesInput | commentsScalarWhereWithAggregatesInput[]
    OR?: commentsScalarWhereWithAggregatesInput[]
    NOT?: commentsScalarWhereWithAggregatesInput | commentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"comments"> | number
    career_id?: IntWithAggregatesFilter<"comments"> | number
    name?: StringWithAggregatesFilter<"comments"> | string
    email?: StringWithAggregatesFilter<"comments"> | string
    content?: StringWithAggregatesFilter<"comments"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"comments"> | Date | string | null
  }

  export type expertiseWhereInput = {
    AND?: expertiseWhereInput | expertiseWhereInput[]
    OR?: expertiseWhereInput[]
    NOT?: expertiseWhereInput | expertiseWhereInput[]
    id?: IntFilter<"expertise"> | number
    name?: StringNullableFilter<"expertise"> | string | null
    description?: StringNullableFilter<"expertise"> | string | null
    img_url?: JsonNullableFilter<"expertise">
  }

  export type expertiseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    img_url?: SortOrderInput | SortOrder
  }

  export type expertiseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: expertiseWhereInput | expertiseWhereInput[]
    OR?: expertiseWhereInput[]
    NOT?: expertiseWhereInput | expertiseWhereInput[]
    description?: StringNullableFilter<"expertise"> | string | null
    img_url?: JsonNullableFilter<"expertise">
  }, "id" | "name">

  export type expertiseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    img_url?: SortOrderInput | SortOrder
    _count?: expertiseCountOrderByAggregateInput
    _avg?: expertiseAvgOrderByAggregateInput
    _max?: expertiseMaxOrderByAggregateInput
    _min?: expertiseMinOrderByAggregateInput
    _sum?: expertiseSumOrderByAggregateInput
  }

  export type expertiseScalarWhereWithAggregatesInput = {
    AND?: expertiseScalarWhereWithAggregatesInput | expertiseScalarWhereWithAggregatesInput[]
    OR?: expertiseScalarWhereWithAggregatesInput[]
    NOT?: expertiseScalarWhereWithAggregatesInput | expertiseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"expertise"> | number
    name?: StringNullableWithAggregatesFilter<"expertise"> | string | null
    description?: StringNullableWithAggregatesFilter<"expertise"> | string | null
    img_url?: JsonNullableWithAggregatesFilter<"expertise">
  }

  export type jobsWhereInput = {
    AND?: jobsWhereInput | jobsWhereInput[]
    OR?: jobsWhereInput[]
    NOT?: jobsWhereInput | jobsWhereInput[]
    id?: IntFilter<"jobs"> | number
    title?: StringFilter<"jobs"> | string
    slug?: StringFilter<"jobs"> | string
    excerpt?: StringFilter<"jobs"> | string
    description?: StringFilter<"jobs"> | string
    categories?: StringNullableListFilter<"jobs">
    industry?: StringNullableFilter<"jobs"> | string | null
    field?: StringNullableListFilter<"jobs">
    state?: StringNullableFilter<"jobs"> | string | null
    region?: StringNullableFilter<"jobs"> | string | null
    created_at?: DateTimeNullableFilter<"jobs"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"jobs"> | Date | string | null
  }

  export type jobsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    description?: SortOrder
    categories?: SortOrder
    industry?: SortOrderInput | SortOrder
    field?: SortOrder
    state?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
  }

  export type jobsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: jobsWhereInput | jobsWhereInput[]
    OR?: jobsWhereInput[]
    NOT?: jobsWhereInput | jobsWhereInput[]
    title?: StringFilter<"jobs"> | string
    excerpt?: StringFilter<"jobs"> | string
    description?: StringFilter<"jobs"> | string
    categories?: StringNullableListFilter<"jobs">
    industry?: StringNullableFilter<"jobs"> | string | null
    field?: StringNullableListFilter<"jobs">
    state?: StringNullableFilter<"jobs"> | string | null
    region?: StringNullableFilter<"jobs"> | string | null
    created_at?: DateTimeNullableFilter<"jobs"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"jobs"> | Date | string | null
  }, "id" | "slug">

  export type jobsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    description?: SortOrder
    categories?: SortOrder
    industry?: SortOrderInput | SortOrder
    field?: SortOrder
    state?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: jobsCountOrderByAggregateInput
    _avg?: jobsAvgOrderByAggregateInput
    _max?: jobsMaxOrderByAggregateInput
    _min?: jobsMinOrderByAggregateInput
    _sum?: jobsSumOrderByAggregateInput
  }

  export type jobsScalarWhereWithAggregatesInput = {
    AND?: jobsScalarWhereWithAggregatesInput | jobsScalarWhereWithAggregatesInput[]
    OR?: jobsScalarWhereWithAggregatesInput[]
    NOT?: jobsScalarWhereWithAggregatesInput | jobsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"jobs"> | number
    title?: StringWithAggregatesFilter<"jobs"> | string
    slug?: StringWithAggregatesFilter<"jobs"> | string
    excerpt?: StringWithAggregatesFilter<"jobs"> | string
    description?: StringWithAggregatesFilter<"jobs"> | string
    categories?: StringNullableListFilter<"jobs">
    industry?: StringNullableWithAggregatesFilter<"jobs"> | string | null
    field?: StringNullableListFilter<"jobs">
    state?: StringNullableWithAggregatesFilter<"jobs"> | string | null
    region?: StringNullableWithAggregatesFilter<"jobs"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"jobs"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"jobs"> | Date | string | null
  }

  export type messagesWhereInput = {
    AND?: messagesWhereInput | messagesWhereInput[]
    OR?: messagesWhereInput[]
    NOT?: messagesWhereInput | messagesWhereInput[]
    id?: IntFilter<"messages"> | number
    name?: StringFilter<"messages"> | string
    email?: StringFilter<"messages"> | string
    message?: StringFilter<"messages"> | string
    created_at?: DateTimeNullableFilter<"messages"> | Date | string | null
  }

  export type messagesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    message?: SortOrder
    created_at?: SortOrderInput | SortOrder
  }

  export type messagesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: messagesWhereInput | messagesWhereInput[]
    OR?: messagesWhereInput[]
    NOT?: messagesWhereInput | messagesWhereInput[]
    name?: StringFilter<"messages"> | string
    email?: StringFilter<"messages"> | string
    message?: StringFilter<"messages"> | string
    created_at?: DateTimeNullableFilter<"messages"> | Date | string | null
  }, "id">

  export type messagesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    message?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: messagesCountOrderByAggregateInput
    _avg?: messagesAvgOrderByAggregateInput
    _max?: messagesMaxOrderByAggregateInput
    _min?: messagesMinOrderByAggregateInput
    _sum?: messagesSumOrderByAggregateInput
  }

  export type messagesScalarWhereWithAggregatesInput = {
    AND?: messagesScalarWhereWithAggregatesInput | messagesScalarWhereWithAggregatesInput[]
    OR?: messagesScalarWhereWithAggregatesInput[]
    NOT?: messagesScalarWhereWithAggregatesInput | messagesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"messages"> | number
    name?: StringWithAggregatesFilter<"messages"> | string
    email?: StringWithAggregatesFilter<"messages"> | string
    message?: StringWithAggregatesFilter<"messages"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"messages"> | Date | string | null
  }

  export type newslettersWhereInput = {
    AND?: newslettersWhereInput | newslettersWhereInput[]
    OR?: newslettersWhereInput[]
    NOT?: newslettersWhereInput | newslettersWhereInput[]
    id?: IntFilter<"newsletters"> | number
    email?: StringFilter<"newsletters"> | string
    platform?: StringNullableFilter<"newsletters"> | string | null
    created_at?: DateTimeNullableFilter<"newsletters"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"newsletters"> | Date | string | null
  }

  export type newslettersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    platform?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
  }

  export type newslettersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: newslettersWhereInput | newslettersWhereInput[]
    OR?: newslettersWhereInput[]
    NOT?: newslettersWhereInput | newslettersWhereInput[]
    platform?: StringNullableFilter<"newsletters"> | string | null
    created_at?: DateTimeNullableFilter<"newsletters"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"newsletters"> | Date | string | null
  }, "id" | "email">

  export type newslettersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    platform?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: newslettersCountOrderByAggregateInput
    _avg?: newslettersAvgOrderByAggregateInput
    _max?: newslettersMaxOrderByAggregateInput
    _min?: newslettersMinOrderByAggregateInput
    _sum?: newslettersSumOrderByAggregateInput
  }

  export type newslettersScalarWhereWithAggregatesInput = {
    AND?: newslettersScalarWhereWithAggregatesInput | newslettersScalarWhereWithAggregatesInput[]
    OR?: newslettersScalarWhereWithAggregatesInput[]
    NOT?: newslettersScalarWhereWithAggregatesInput | newslettersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"newsletters"> | number
    email?: StringWithAggregatesFilter<"newsletters"> | string
    platform?: StringNullableWithAggregatesFilter<"newsletters"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"newsletters"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"newsletters"> | Date | string | null
  }

  export type projectsWhereInput = {
    AND?: projectsWhereInput | projectsWhereInput[]
    OR?: projectsWhereInput[]
    NOT?: projectsWhereInput | projectsWhereInput[]
    id?: IntFilter<"projects"> | number
    title?: StringFilter<"projects"> | string
    description?: StringFilter<"projects"> | string
    github_link?: StringNullableFilter<"projects"> | string | null
    preview_link?: StringNullableFilter<"projects"> | string | null
    img_url?: StringFilter<"projects"> | string
    category_id?: IntFilter<"projects"> | number
    categories?: XOR<CategoriesScalarRelationFilter, categoriesWhereInput>
  }

  export type projectsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    github_link?: SortOrderInput | SortOrder
    preview_link?: SortOrderInput | SortOrder
    img_url?: SortOrder
    category_id?: SortOrder
    categories?: categoriesOrderByWithRelationInput
  }

  export type projectsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: projectsWhereInput | projectsWhereInput[]
    OR?: projectsWhereInput[]
    NOT?: projectsWhereInput | projectsWhereInput[]
    title?: StringFilter<"projects"> | string
    description?: StringFilter<"projects"> | string
    github_link?: StringNullableFilter<"projects"> | string | null
    preview_link?: StringNullableFilter<"projects"> | string | null
    img_url?: StringFilter<"projects"> | string
    category_id?: IntFilter<"projects"> | number
    categories?: XOR<CategoriesScalarRelationFilter, categoriesWhereInput>
  }, "id">

  export type projectsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    github_link?: SortOrderInput | SortOrder
    preview_link?: SortOrderInput | SortOrder
    img_url?: SortOrder
    category_id?: SortOrder
    _count?: projectsCountOrderByAggregateInput
    _avg?: projectsAvgOrderByAggregateInput
    _max?: projectsMaxOrderByAggregateInput
    _min?: projectsMinOrderByAggregateInput
    _sum?: projectsSumOrderByAggregateInput
  }

  export type projectsScalarWhereWithAggregatesInput = {
    AND?: projectsScalarWhereWithAggregatesInput | projectsScalarWhereWithAggregatesInput[]
    OR?: projectsScalarWhereWithAggregatesInput[]
    NOT?: projectsScalarWhereWithAggregatesInput | projectsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"projects"> | number
    title?: StringWithAggregatesFilter<"projects"> | string
    description?: StringWithAggregatesFilter<"projects"> | string
    github_link?: StringNullableWithAggregatesFilter<"projects"> | string | null
    preview_link?: StringNullableWithAggregatesFilter<"projects"> | string | null
    img_url?: StringWithAggregatesFilter<"projects"> | string
    category_id?: IntWithAggregatesFilter<"projects"> | number
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    username?: StringFilter<"users"> | string
    hashed_password?: StringFilter<"users"> | string
    is_admin?: BoolNullableFilter<"users"> | boolean | null
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    hashed_password?: SortOrder
    is_admin?: SortOrderInput | SortOrder
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    hashed_password?: StringFilter<"users"> | string
    is_admin?: BoolNullableFilter<"users"> | boolean | null
  }, "id" | "username">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    hashed_password?: SortOrder
    is_admin?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    username?: StringWithAggregatesFilter<"users"> | string
    hashed_password?: StringWithAggregatesFilter<"users"> | string
    is_admin?: BoolNullableWithAggregatesFilter<"users"> | boolean | null
  }

  export type aboutsCreateInput = {
    title: string
    description: string
    img_url: string
  }

  export type aboutsUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    img_url: string
  }

  export type aboutsUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    img_url?: StringFieldUpdateOperationsInput | string
  }

  export type aboutsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    img_url?: StringFieldUpdateOperationsInput | string
  }

  export type aboutsCreateManyInput = {
    id?: number
    title: string
    description: string
    img_url: string
  }

  export type aboutsUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    img_url?: StringFieldUpdateOperationsInput | string
  }

  export type aboutsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    img_url?: StringFieldUpdateOperationsInput | string
  }

  export type career_categoriesCreateInput = {
    name: string
    careers?: careersCreateNestedManyWithoutCareer_categoriesInput
  }

  export type career_categoriesUncheckedCreateInput = {
    id?: number
    name: string
    careers?: careersUncheckedCreateNestedManyWithoutCareer_categoriesInput
  }

  export type career_categoriesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    careers?: careersUpdateManyWithoutCareer_categoriesNestedInput
  }

  export type career_categoriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    careers?: careersUncheckedUpdateManyWithoutCareer_categoriesNestedInput
  }

  export type career_categoriesCreateManyInput = {
    id?: number
    name: string
  }

  export type career_categoriesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type career_categoriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type careersCreateInput = {
    title: string
    slug: string
    excerpt: string
    description: string
    industry?: string | null
    field?: careersCreatefieldInput | string[]
    state?: string | null
    region?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    career_categories: career_categoriesCreateNestedOneWithoutCareersInput
    comments?: commentsCreateNestedManyWithoutCareersInput
  }

  export type careersUncheckedCreateInput = {
    id?: number
    title: string
    slug: string
    excerpt: string
    description: string
    industry?: string | null
    field?: careersCreatefieldInput | string[]
    state?: string | null
    region?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    category_id: number
    comments?: commentsUncheckedCreateNestedManyWithoutCareersInput
  }

  export type careersUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    field?: careersUpdatefieldInput | string[]
    state?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    career_categories?: career_categoriesUpdateOneRequiredWithoutCareersNestedInput
    comments?: commentsUpdateManyWithoutCareersNestedInput
  }

  export type careersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    field?: careersUpdatefieldInput | string[]
    state?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category_id?: IntFieldUpdateOperationsInput | number
    comments?: commentsUncheckedUpdateManyWithoutCareersNestedInput
  }

  export type careersCreateManyInput = {
    id?: number
    title: string
    slug: string
    excerpt: string
    description: string
    industry?: string | null
    field?: careersCreatefieldInput | string[]
    state?: string | null
    region?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    category_id: number
  }

  export type careersUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    field?: careersUpdatefieldInput | string[]
    state?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type careersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    field?: careersUpdatefieldInput | string[]
    state?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category_id?: IntFieldUpdateOperationsInput | number
  }

  export type categoriesCreateInput = {
    name: string
    projects?: projectsCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUncheckedCreateInput = {
    id?: number
    name: string
    projects?: projectsUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    projects?: projectsUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    projects?: projectsUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesCreateManyInput = {
    id?: number
    name: string
  }

  export type categoriesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type categoriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type commentsCreateInput = {
    name: string
    email: string
    content: string
    created_at?: Date | string | null
    careers: careersCreateNestedOneWithoutCommentsInput
  }

  export type commentsUncheckedCreateInput = {
    id?: number
    career_id: number
    name: string
    email: string
    content: string
    created_at?: Date | string | null
  }

  export type commentsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    careers?: careersUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type commentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    career_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type commentsCreateManyInput = {
    id?: number
    career_id: number
    name: string
    email: string
    content: string
    created_at?: Date | string | null
  }

  export type commentsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type commentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    career_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type expertiseCreateInput = {
    name?: string | null
    description?: string | null
    img_url?: NullableJsonNullValueInput | InputJsonValue
  }

  export type expertiseUncheckedCreateInput = {
    id?: number
    name?: string | null
    description?: string | null
    img_url?: NullableJsonNullValueInput | InputJsonValue
  }

  export type expertiseUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    img_url?: NullableJsonNullValueInput | InputJsonValue
  }

  export type expertiseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    img_url?: NullableJsonNullValueInput | InputJsonValue
  }

  export type expertiseCreateManyInput = {
    id?: number
    name?: string | null
    description?: string | null
    img_url?: NullableJsonNullValueInput | InputJsonValue
  }

  export type expertiseUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    img_url?: NullableJsonNullValueInput | InputJsonValue
  }

  export type expertiseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    img_url?: NullableJsonNullValueInput | InputJsonValue
  }

  export type jobsCreateInput = {
    title: string
    slug: string
    excerpt: string
    description: string
    categories?: jobsCreatecategoriesInput | string[]
    industry?: string | null
    field?: jobsCreatefieldInput | string[]
    state?: string | null
    region?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type jobsUncheckedCreateInput = {
    id?: number
    title: string
    slug: string
    excerpt: string
    description: string
    categories?: jobsCreatecategoriesInput | string[]
    industry?: string | null
    field?: jobsCreatefieldInput | string[]
    state?: string | null
    region?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type jobsUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    categories?: jobsUpdatecategoriesInput | string[]
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    field?: jobsUpdatefieldInput | string[]
    state?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type jobsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    categories?: jobsUpdatecategoriesInput | string[]
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    field?: jobsUpdatefieldInput | string[]
    state?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type jobsCreateManyInput = {
    id?: number
    title: string
    slug: string
    excerpt: string
    description: string
    categories?: jobsCreatecategoriesInput | string[]
    industry?: string | null
    field?: jobsCreatefieldInput | string[]
    state?: string | null
    region?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type jobsUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    categories?: jobsUpdatecategoriesInput | string[]
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    field?: jobsUpdatefieldInput | string[]
    state?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type jobsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    categories?: jobsUpdatecategoriesInput | string[]
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    field?: jobsUpdatefieldInput | string[]
    state?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type messagesCreateInput = {
    name: string
    email: string
    message: string
    created_at?: Date | string | null
  }

  export type messagesUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    message: string
    created_at?: Date | string | null
  }

  export type messagesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type messagesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type messagesCreateManyInput = {
    id?: number
    name: string
    email: string
    message: string
    created_at?: Date | string | null
  }

  export type messagesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type messagesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type newslettersCreateInput = {
    email: string
    platform?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type newslettersUncheckedCreateInput = {
    id?: number
    email: string
    platform?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type newslettersUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type newslettersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type newslettersCreateManyInput = {
    id?: number
    email: string
    platform?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type newslettersUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type newslettersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type projectsCreateInput = {
    title: string
    description: string
    github_link?: string | null
    preview_link?: string | null
    img_url: string
    categories: categoriesCreateNestedOneWithoutProjectsInput
  }

  export type projectsUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    github_link?: string | null
    preview_link?: string | null
    img_url: string
    category_id: number
  }

  export type projectsUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    github_link?: NullableStringFieldUpdateOperationsInput | string | null
    preview_link?: NullableStringFieldUpdateOperationsInput | string | null
    img_url?: StringFieldUpdateOperationsInput | string
    categories?: categoriesUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type projectsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    github_link?: NullableStringFieldUpdateOperationsInput | string | null
    preview_link?: NullableStringFieldUpdateOperationsInput | string | null
    img_url?: StringFieldUpdateOperationsInput | string
    category_id?: IntFieldUpdateOperationsInput | number
  }

  export type projectsCreateManyInput = {
    id?: number
    title: string
    description: string
    github_link?: string | null
    preview_link?: string | null
    img_url: string
    category_id: number
  }

  export type projectsUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    github_link?: NullableStringFieldUpdateOperationsInput | string | null
    preview_link?: NullableStringFieldUpdateOperationsInput | string | null
    img_url?: StringFieldUpdateOperationsInput | string
  }

  export type projectsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    github_link?: NullableStringFieldUpdateOperationsInput | string | null
    preview_link?: NullableStringFieldUpdateOperationsInput | string | null
    img_url?: StringFieldUpdateOperationsInput | string
    category_id?: IntFieldUpdateOperationsInput | number
  }

  export type usersCreateInput = {
    username: string
    hashed_password: string
    is_admin?: boolean | null
  }

  export type usersUncheckedCreateInput = {
    id?: number
    username: string
    hashed_password: string
    is_admin?: boolean | null
  }

  export type usersUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    hashed_password?: StringFieldUpdateOperationsInput | string
    is_admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    hashed_password?: StringFieldUpdateOperationsInput | string
    is_admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type usersCreateManyInput = {
    id?: number
    username: string
    hashed_password: string
    is_admin?: boolean | null
  }

  export type usersUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    hashed_password?: StringFieldUpdateOperationsInput | string
    is_admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    hashed_password?: StringFieldUpdateOperationsInput | string
    is_admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type aboutsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    img_url?: SortOrder
  }

  export type aboutsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type aboutsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    img_url?: SortOrder
  }

  export type aboutsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    img_url?: SortOrder
  }

  export type aboutsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type CareersListRelationFilter = {
    every?: careersWhereInput
    some?: careersWhereInput
    none?: careersWhereInput
  }

  export type careersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type career_categoriesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type career_categoriesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type career_categoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type career_categoriesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type career_categoriesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type Career_categoriesScalarRelationFilter = {
    is?: career_categoriesWhereInput
    isNot?: career_categoriesWhereInput
  }

  export type CommentsListRelationFilter = {
    every?: commentsWhereInput
    some?: commentsWhereInput
    none?: commentsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type commentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type careersCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    description?: SortOrder
    industry?: SortOrder
    field?: SortOrder
    state?: SortOrder
    region?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    category_id?: SortOrder
  }

  export type careersAvgOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
  }

  export type careersMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    description?: SortOrder
    industry?: SortOrder
    state?: SortOrder
    region?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    category_id?: SortOrder
  }

  export type careersMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    description?: SortOrder
    industry?: SortOrder
    state?: SortOrder
    region?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    category_id?: SortOrder
  }

  export type careersSumOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ProjectsListRelationFilter = {
    every?: projectsWhereInput
    some?: projectsWhereInput
    none?: projectsWhereInput
  }

  export type projectsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categoriesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type categoriesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type categoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type categoriesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type categoriesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CareersScalarRelationFilter = {
    is?: careersWhereInput
    isNot?: careersWhereInput
  }

  export type commentsCountOrderByAggregateInput = {
    id?: SortOrder
    career_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
  }

  export type commentsAvgOrderByAggregateInput = {
    id?: SortOrder
    career_id?: SortOrder
  }

  export type commentsMaxOrderByAggregateInput = {
    id?: SortOrder
    career_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
  }

  export type commentsMinOrderByAggregateInput = {
    id?: SortOrder
    career_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
  }

  export type commentsSumOrderByAggregateInput = {
    id?: SortOrder
    career_id?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type expertiseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    img_url?: SortOrder
  }

  export type expertiseAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type expertiseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type expertiseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type expertiseSumOrderByAggregateInput = {
    id?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type jobsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    description?: SortOrder
    categories?: SortOrder
    industry?: SortOrder
    field?: SortOrder
    state?: SortOrder
    region?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type jobsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type jobsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    description?: SortOrder
    industry?: SortOrder
    state?: SortOrder
    region?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type jobsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    description?: SortOrder
    industry?: SortOrder
    state?: SortOrder
    region?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type jobsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type messagesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    message?: SortOrder
    created_at?: SortOrder
  }

  export type messagesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type messagesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    message?: SortOrder
    created_at?: SortOrder
  }

  export type messagesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    message?: SortOrder
    created_at?: SortOrder
  }

  export type messagesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type newslettersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    platform?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type newslettersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type newslettersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    platform?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type newslettersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    platform?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type newslettersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoriesScalarRelationFilter = {
    is?: categoriesWhereInput
    isNot?: categoriesWhereInput
  }

  export type projectsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    github_link?: SortOrder
    preview_link?: SortOrder
    img_url?: SortOrder
    category_id?: SortOrder
  }

  export type projectsAvgOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
  }

  export type projectsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    github_link?: SortOrder
    preview_link?: SortOrder
    img_url?: SortOrder
    category_id?: SortOrder
  }

  export type projectsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    github_link?: SortOrder
    preview_link?: SortOrder
    img_url?: SortOrder
    category_id?: SortOrder
  }

  export type projectsSumOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    hashed_password?: SortOrder
    is_admin?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    hashed_password?: SortOrder
    is_admin?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    hashed_password?: SortOrder
    is_admin?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type careersCreateNestedManyWithoutCareer_categoriesInput = {
    create?: XOR<careersCreateWithoutCareer_categoriesInput, careersUncheckedCreateWithoutCareer_categoriesInput> | careersCreateWithoutCareer_categoriesInput[] | careersUncheckedCreateWithoutCareer_categoriesInput[]
    connectOrCreate?: careersCreateOrConnectWithoutCareer_categoriesInput | careersCreateOrConnectWithoutCareer_categoriesInput[]
    createMany?: careersCreateManyCareer_categoriesInputEnvelope
    connect?: careersWhereUniqueInput | careersWhereUniqueInput[]
  }

  export type careersUncheckedCreateNestedManyWithoutCareer_categoriesInput = {
    create?: XOR<careersCreateWithoutCareer_categoriesInput, careersUncheckedCreateWithoutCareer_categoriesInput> | careersCreateWithoutCareer_categoriesInput[] | careersUncheckedCreateWithoutCareer_categoriesInput[]
    connectOrCreate?: careersCreateOrConnectWithoutCareer_categoriesInput | careersCreateOrConnectWithoutCareer_categoriesInput[]
    createMany?: careersCreateManyCareer_categoriesInputEnvelope
    connect?: careersWhereUniqueInput | careersWhereUniqueInput[]
  }

  export type careersUpdateManyWithoutCareer_categoriesNestedInput = {
    create?: XOR<careersCreateWithoutCareer_categoriesInput, careersUncheckedCreateWithoutCareer_categoriesInput> | careersCreateWithoutCareer_categoriesInput[] | careersUncheckedCreateWithoutCareer_categoriesInput[]
    connectOrCreate?: careersCreateOrConnectWithoutCareer_categoriesInput | careersCreateOrConnectWithoutCareer_categoriesInput[]
    upsert?: careersUpsertWithWhereUniqueWithoutCareer_categoriesInput | careersUpsertWithWhereUniqueWithoutCareer_categoriesInput[]
    createMany?: careersCreateManyCareer_categoriesInputEnvelope
    set?: careersWhereUniqueInput | careersWhereUniqueInput[]
    disconnect?: careersWhereUniqueInput | careersWhereUniqueInput[]
    delete?: careersWhereUniqueInput | careersWhereUniqueInput[]
    connect?: careersWhereUniqueInput | careersWhereUniqueInput[]
    update?: careersUpdateWithWhereUniqueWithoutCareer_categoriesInput | careersUpdateWithWhereUniqueWithoutCareer_categoriesInput[]
    updateMany?: careersUpdateManyWithWhereWithoutCareer_categoriesInput | careersUpdateManyWithWhereWithoutCareer_categoriesInput[]
    deleteMany?: careersScalarWhereInput | careersScalarWhereInput[]
  }

  export type careersUncheckedUpdateManyWithoutCareer_categoriesNestedInput = {
    create?: XOR<careersCreateWithoutCareer_categoriesInput, careersUncheckedCreateWithoutCareer_categoriesInput> | careersCreateWithoutCareer_categoriesInput[] | careersUncheckedCreateWithoutCareer_categoriesInput[]
    connectOrCreate?: careersCreateOrConnectWithoutCareer_categoriesInput | careersCreateOrConnectWithoutCareer_categoriesInput[]
    upsert?: careersUpsertWithWhereUniqueWithoutCareer_categoriesInput | careersUpsertWithWhereUniqueWithoutCareer_categoriesInput[]
    createMany?: careersCreateManyCareer_categoriesInputEnvelope
    set?: careersWhereUniqueInput | careersWhereUniqueInput[]
    disconnect?: careersWhereUniqueInput | careersWhereUniqueInput[]
    delete?: careersWhereUniqueInput | careersWhereUniqueInput[]
    connect?: careersWhereUniqueInput | careersWhereUniqueInput[]
    update?: careersUpdateWithWhereUniqueWithoutCareer_categoriesInput | careersUpdateWithWhereUniqueWithoutCareer_categoriesInput[]
    updateMany?: careersUpdateManyWithWhereWithoutCareer_categoriesInput | careersUpdateManyWithWhereWithoutCareer_categoriesInput[]
    deleteMany?: careersScalarWhereInput | careersScalarWhereInput[]
  }

  export type careersCreatefieldInput = {
    set: string[]
  }

  export type career_categoriesCreateNestedOneWithoutCareersInput = {
    create?: XOR<career_categoriesCreateWithoutCareersInput, career_categoriesUncheckedCreateWithoutCareersInput>
    connectOrCreate?: career_categoriesCreateOrConnectWithoutCareersInput
    connect?: career_categoriesWhereUniqueInput
  }

  export type commentsCreateNestedManyWithoutCareersInput = {
    create?: XOR<commentsCreateWithoutCareersInput, commentsUncheckedCreateWithoutCareersInput> | commentsCreateWithoutCareersInput[] | commentsUncheckedCreateWithoutCareersInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutCareersInput | commentsCreateOrConnectWithoutCareersInput[]
    createMany?: commentsCreateManyCareersInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type commentsUncheckedCreateNestedManyWithoutCareersInput = {
    create?: XOR<commentsCreateWithoutCareersInput, commentsUncheckedCreateWithoutCareersInput> | commentsCreateWithoutCareersInput[] | commentsUncheckedCreateWithoutCareersInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutCareersInput | commentsCreateOrConnectWithoutCareersInput[]
    createMany?: commentsCreateManyCareersInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type careersUpdatefieldInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type career_categoriesUpdateOneRequiredWithoutCareersNestedInput = {
    create?: XOR<career_categoriesCreateWithoutCareersInput, career_categoriesUncheckedCreateWithoutCareersInput>
    connectOrCreate?: career_categoriesCreateOrConnectWithoutCareersInput
    upsert?: career_categoriesUpsertWithoutCareersInput
    connect?: career_categoriesWhereUniqueInput
    update?: XOR<XOR<career_categoriesUpdateToOneWithWhereWithoutCareersInput, career_categoriesUpdateWithoutCareersInput>, career_categoriesUncheckedUpdateWithoutCareersInput>
  }

  export type commentsUpdateManyWithoutCareersNestedInput = {
    create?: XOR<commentsCreateWithoutCareersInput, commentsUncheckedCreateWithoutCareersInput> | commentsCreateWithoutCareersInput[] | commentsUncheckedCreateWithoutCareersInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutCareersInput | commentsCreateOrConnectWithoutCareersInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutCareersInput | commentsUpsertWithWhereUniqueWithoutCareersInput[]
    createMany?: commentsCreateManyCareersInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutCareersInput | commentsUpdateWithWhereUniqueWithoutCareersInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutCareersInput | commentsUpdateManyWithWhereWithoutCareersInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type commentsUncheckedUpdateManyWithoutCareersNestedInput = {
    create?: XOR<commentsCreateWithoutCareersInput, commentsUncheckedCreateWithoutCareersInput> | commentsCreateWithoutCareersInput[] | commentsUncheckedCreateWithoutCareersInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutCareersInput | commentsCreateOrConnectWithoutCareersInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutCareersInput | commentsUpsertWithWhereUniqueWithoutCareersInput[]
    createMany?: commentsCreateManyCareersInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutCareersInput | commentsUpdateWithWhereUniqueWithoutCareersInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutCareersInput | commentsUpdateManyWithWhereWithoutCareersInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type projectsCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<projectsCreateWithoutCategoriesInput, projectsUncheckedCreateWithoutCategoriesInput> | projectsCreateWithoutCategoriesInput[] | projectsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: projectsCreateOrConnectWithoutCategoriesInput | projectsCreateOrConnectWithoutCategoriesInput[]
    createMany?: projectsCreateManyCategoriesInputEnvelope
    connect?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
  }

  export type projectsUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<projectsCreateWithoutCategoriesInput, projectsUncheckedCreateWithoutCategoriesInput> | projectsCreateWithoutCategoriesInput[] | projectsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: projectsCreateOrConnectWithoutCategoriesInput | projectsCreateOrConnectWithoutCategoriesInput[]
    createMany?: projectsCreateManyCategoriesInputEnvelope
    connect?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
  }

  export type projectsUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<projectsCreateWithoutCategoriesInput, projectsUncheckedCreateWithoutCategoriesInput> | projectsCreateWithoutCategoriesInput[] | projectsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: projectsCreateOrConnectWithoutCategoriesInput | projectsCreateOrConnectWithoutCategoriesInput[]
    upsert?: projectsUpsertWithWhereUniqueWithoutCategoriesInput | projectsUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: projectsCreateManyCategoriesInputEnvelope
    set?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    disconnect?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    delete?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    connect?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    update?: projectsUpdateWithWhereUniqueWithoutCategoriesInput | projectsUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: projectsUpdateManyWithWhereWithoutCategoriesInput | projectsUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: projectsScalarWhereInput | projectsScalarWhereInput[]
  }

  export type projectsUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<projectsCreateWithoutCategoriesInput, projectsUncheckedCreateWithoutCategoriesInput> | projectsCreateWithoutCategoriesInput[] | projectsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: projectsCreateOrConnectWithoutCategoriesInput | projectsCreateOrConnectWithoutCategoriesInput[]
    upsert?: projectsUpsertWithWhereUniqueWithoutCategoriesInput | projectsUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: projectsCreateManyCategoriesInputEnvelope
    set?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    disconnect?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    delete?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    connect?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    update?: projectsUpdateWithWhereUniqueWithoutCategoriesInput | projectsUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: projectsUpdateManyWithWhereWithoutCategoriesInput | projectsUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: projectsScalarWhereInput | projectsScalarWhereInput[]
  }

  export type careersCreateNestedOneWithoutCommentsInput = {
    create?: XOR<careersCreateWithoutCommentsInput, careersUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: careersCreateOrConnectWithoutCommentsInput
    connect?: careersWhereUniqueInput
  }

  export type careersUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<careersCreateWithoutCommentsInput, careersUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: careersCreateOrConnectWithoutCommentsInput
    upsert?: careersUpsertWithoutCommentsInput
    connect?: careersWhereUniqueInput
    update?: XOR<XOR<careersUpdateToOneWithWhereWithoutCommentsInput, careersUpdateWithoutCommentsInput>, careersUncheckedUpdateWithoutCommentsInput>
  }

  export type jobsCreatecategoriesInput = {
    set: string[]
  }

  export type jobsCreatefieldInput = {
    set: string[]
  }

  export type jobsUpdatecategoriesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type jobsUpdatefieldInput = {
    set?: string[]
    push?: string | string[]
  }

  export type categoriesCreateNestedOneWithoutProjectsInput = {
    create?: XOR<categoriesCreateWithoutProjectsInput, categoriesUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutProjectsInput
    connect?: categoriesWhereUniqueInput
  }

  export type categoriesUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<categoriesCreateWithoutProjectsInput, categoriesUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutProjectsInput
    upsert?: categoriesUpsertWithoutProjectsInput
    connect?: categoriesWhereUniqueInput
    update?: XOR<XOR<categoriesUpdateToOneWithWhereWithoutProjectsInput, categoriesUpdateWithoutProjectsInput>, categoriesUncheckedUpdateWithoutProjectsInput>
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type careersCreateWithoutCareer_categoriesInput = {
    title: string
    slug: string
    excerpt: string
    description: string
    industry?: string | null
    field?: careersCreatefieldInput | string[]
    state?: string | null
    region?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    comments?: commentsCreateNestedManyWithoutCareersInput
  }

  export type careersUncheckedCreateWithoutCareer_categoriesInput = {
    id?: number
    title: string
    slug: string
    excerpt: string
    description: string
    industry?: string | null
    field?: careersCreatefieldInput | string[]
    state?: string | null
    region?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    comments?: commentsUncheckedCreateNestedManyWithoutCareersInput
  }

  export type careersCreateOrConnectWithoutCareer_categoriesInput = {
    where: careersWhereUniqueInput
    create: XOR<careersCreateWithoutCareer_categoriesInput, careersUncheckedCreateWithoutCareer_categoriesInput>
  }

  export type careersCreateManyCareer_categoriesInputEnvelope = {
    data: careersCreateManyCareer_categoriesInput | careersCreateManyCareer_categoriesInput[]
    skipDuplicates?: boolean
  }

  export type careersUpsertWithWhereUniqueWithoutCareer_categoriesInput = {
    where: careersWhereUniqueInput
    update: XOR<careersUpdateWithoutCareer_categoriesInput, careersUncheckedUpdateWithoutCareer_categoriesInput>
    create: XOR<careersCreateWithoutCareer_categoriesInput, careersUncheckedCreateWithoutCareer_categoriesInput>
  }

  export type careersUpdateWithWhereUniqueWithoutCareer_categoriesInput = {
    where: careersWhereUniqueInput
    data: XOR<careersUpdateWithoutCareer_categoriesInput, careersUncheckedUpdateWithoutCareer_categoriesInput>
  }

  export type careersUpdateManyWithWhereWithoutCareer_categoriesInput = {
    where: careersScalarWhereInput
    data: XOR<careersUpdateManyMutationInput, careersUncheckedUpdateManyWithoutCareer_categoriesInput>
  }

  export type careersScalarWhereInput = {
    AND?: careersScalarWhereInput | careersScalarWhereInput[]
    OR?: careersScalarWhereInput[]
    NOT?: careersScalarWhereInput | careersScalarWhereInput[]
    id?: IntFilter<"careers"> | number
    title?: StringFilter<"careers"> | string
    slug?: StringFilter<"careers"> | string
    excerpt?: StringFilter<"careers"> | string
    description?: StringFilter<"careers"> | string
    industry?: StringNullableFilter<"careers"> | string | null
    field?: StringNullableListFilter<"careers">
    state?: StringNullableFilter<"careers"> | string | null
    region?: StringNullableFilter<"careers"> | string | null
    created_at?: DateTimeNullableFilter<"careers"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"careers"> | Date | string | null
    category_id?: IntFilter<"careers"> | number
  }

  export type career_categoriesCreateWithoutCareersInput = {
    name: string
  }

  export type career_categoriesUncheckedCreateWithoutCareersInput = {
    id?: number
    name: string
  }

  export type career_categoriesCreateOrConnectWithoutCareersInput = {
    where: career_categoriesWhereUniqueInput
    create: XOR<career_categoriesCreateWithoutCareersInput, career_categoriesUncheckedCreateWithoutCareersInput>
  }

  export type commentsCreateWithoutCareersInput = {
    name: string
    email: string
    content: string
    created_at?: Date | string | null
  }

  export type commentsUncheckedCreateWithoutCareersInput = {
    id?: number
    name: string
    email: string
    content: string
    created_at?: Date | string | null
  }

  export type commentsCreateOrConnectWithoutCareersInput = {
    where: commentsWhereUniqueInput
    create: XOR<commentsCreateWithoutCareersInput, commentsUncheckedCreateWithoutCareersInput>
  }

  export type commentsCreateManyCareersInputEnvelope = {
    data: commentsCreateManyCareersInput | commentsCreateManyCareersInput[]
    skipDuplicates?: boolean
  }

  export type career_categoriesUpsertWithoutCareersInput = {
    update: XOR<career_categoriesUpdateWithoutCareersInput, career_categoriesUncheckedUpdateWithoutCareersInput>
    create: XOR<career_categoriesCreateWithoutCareersInput, career_categoriesUncheckedCreateWithoutCareersInput>
    where?: career_categoriesWhereInput
  }

  export type career_categoriesUpdateToOneWithWhereWithoutCareersInput = {
    where?: career_categoriesWhereInput
    data: XOR<career_categoriesUpdateWithoutCareersInput, career_categoriesUncheckedUpdateWithoutCareersInput>
  }

  export type career_categoriesUpdateWithoutCareersInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type career_categoriesUncheckedUpdateWithoutCareersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type commentsUpsertWithWhereUniqueWithoutCareersInput = {
    where: commentsWhereUniqueInput
    update: XOR<commentsUpdateWithoutCareersInput, commentsUncheckedUpdateWithoutCareersInput>
    create: XOR<commentsCreateWithoutCareersInput, commentsUncheckedCreateWithoutCareersInput>
  }

  export type commentsUpdateWithWhereUniqueWithoutCareersInput = {
    where: commentsWhereUniqueInput
    data: XOR<commentsUpdateWithoutCareersInput, commentsUncheckedUpdateWithoutCareersInput>
  }

  export type commentsUpdateManyWithWhereWithoutCareersInput = {
    where: commentsScalarWhereInput
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyWithoutCareersInput>
  }

  export type commentsScalarWhereInput = {
    AND?: commentsScalarWhereInput | commentsScalarWhereInput[]
    OR?: commentsScalarWhereInput[]
    NOT?: commentsScalarWhereInput | commentsScalarWhereInput[]
    id?: IntFilter<"comments"> | number
    career_id?: IntFilter<"comments"> | number
    name?: StringFilter<"comments"> | string
    email?: StringFilter<"comments"> | string
    content?: StringFilter<"comments"> | string
    created_at?: DateTimeNullableFilter<"comments"> | Date | string | null
  }

  export type projectsCreateWithoutCategoriesInput = {
    title: string
    description: string
    github_link?: string | null
    preview_link?: string | null
    img_url: string
  }

  export type projectsUncheckedCreateWithoutCategoriesInput = {
    id?: number
    title: string
    description: string
    github_link?: string | null
    preview_link?: string | null
    img_url: string
  }

  export type projectsCreateOrConnectWithoutCategoriesInput = {
    where: projectsWhereUniqueInput
    create: XOR<projectsCreateWithoutCategoriesInput, projectsUncheckedCreateWithoutCategoriesInput>
  }

  export type projectsCreateManyCategoriesInputEnvelope = {
    data: projectsCreateManyCategoriesInput | projectsCreateManyCategoriesInput[]
    skipDuplicates?: boolean
  }

  export type projectsUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: projectsWhereUniqueInput
    update: XOR<projectsUpdateWithoutCategoriesInput, projectsUncheckedUpdateWithoutCategoriesInput>
    create: XOR<projectsCreateWithoutCategoriesInput, projectsUncheckedCreateWithoutCategoriesInput>
  }

  export type projectsUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: projectsWhereUniqueInput
    data: XOR<projectsUpdateWithoutCategoriesInput, projectsUncheckedUpdateWithoutCategoriesInput>
  }

  export type projectsUpdateManyWithWhereWithoutCategoriesInput = {
    where: projectsScalarWhereInput
    data: XOR<projectsUpdateManyMutationInput, projectsUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type projectsScalarWhereInput = {
    AND?: projectsScalarWhereInput | projectsScalarWhereInput[]
    OR?: projectsScalarWhereInput[]
    NOT?: projectsScalarWhereInput | projectsScalarWhereInput[]
    id?: IntFilter<"projects"> | number
    title?: StringFilter<"projects"> | string
    description?: StringFilter<"projects"> | string
    github_link?: StringNullableFilter<"projects"> | string | null
    preview_link?: StringNullableFilter<"projects"> | string | null
    img_url?: StringFilter<"projects"> | string
    category_id?: IntFilter<"projects"> | number
  }

  export type careersCreateWithoutCommentsInput = {
    title: string
    slug: string
    excerpt: string
    description: string
    industry?: string | null
    field?: careersCreatefieldInput | string[]
    state?: string | null
    region?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    career_categories: career_categoriesCreateNestedOneWithoutCareersInput
  }

  export type careersUncheckedCreateWithoutCommentsInput = {
    id?: number
    title: string
    slug: string
    excerpt: string
    description: string
    industry?: string | null
    field?: careersCreatefieldInput | string[]
    state?: string | null
    region?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    category_id: number
  }

  export type careersCreateOrConnectWithoutCommentsInput = {
    where: careersWhereUniqueInput
    create: XOR<careersCreateWithoutCommentsInput, careersUncheckedCreateWithoutCommentsInput>
  }

  export type careersUpsertWithoutCommentsInput = {
    update: XOR<careersUpdateWithoutCommentsInput, careersUncheckedUpdateWithoutCommentsInput>
    create: XOR<careersCreateWithoutCommentsInput, careersUncheckedCreateWithoutCommentsInput>
    where?: careersWhereInput
  }

  export type careersUpdateToOneWithWhereWithoutCommentsInput = {
    where?: careersWhereInput
    data: XOR<careersUpdateWithoutCommentsInput, careersUncheckedUpdateWithoutCommentsInput>
  }

  export type careersUpdateWithoutCommentsInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    field?: careersUpdatefieldInput | string[]
    state?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    career_categories?: career_categoriesUpdateOneRequiredWithoutCareersNestedInput
  }

  export type careersUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    field?: careersUpdatefieldInput | string[]
    state?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category_id?: IntFieldUpdateOperationsInput | number
  }

  export type categoriesCreateWithoutProjectsInput = {
    name: string
  }

  export type categoriesUncheckedCreateWithoutProjectsInput = {
    id?: number
    name: string
  }

  export type categoriesCreateOrConnectWithoutProjectsInput = {
    where: categoriesWhereUniqueInput
    create: XOR<categoriesCreateWithoutProjectsInput, categoriesUncheckedCreateWithoutProjectsInput>
  }

  export type categoriesUpsertWithoutProjectsInput = {
    update: XOR<categoriesUpdateWithoutProjectsInput, categoriesUncheckedUpdateWithoutProjectsInput>
    create: XOR<categoriesCreateWithoutProjectsInput, categoriesUncheckedCreateWithoutProjectsInput>
    where?: categoriesWhereInput
  }

  export type categoriesUpdateToOneWithWhereWithoutProjectsInput = {
    where?: categoriesWhereInput
    data: XOR<categoriesUpdateWithoutProjectsInput, categoriesUncheckedUpdateWithoutProjectsInput>
  }

  export type categoriesUpdateWithoutProjectsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type categoriesUncheckedUpdateWithoutProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type careersCreateManyCareer_categoriesInput = {
    id?: number
    title: string
    slug: string
    excerpt: string
    description: string
    industry?: string | null
    field?: careersCreatefieldInput | string[]
    state?: string | null
    region?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type careersUpdateWithoutCareer_categoriesInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    field?: careersUpdatefieldInput | string[]
    state?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: commentsUpdateManyWithoutCareersNestedInput
  }

  export type careersUncheckedUpdateWithoutCareer_categoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    field?: careersUpdatefieldInput | string[]
    state?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: commentsUncheckedUpdateManyWithoutCareersNestedInput
  }

  export type careersUncheckedUpdateManyWithoutCareer_categoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    field?: careersUpdatefieldInput | string[]
    state?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type commentsCreateManyCareersInput = {
    id?: number
    name: string
    email: string
    content: string
    created_at?: Date | string | null
  }

  export type commentsUpdateWithoutCareersInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type commentsUncheckedUpdateWithoutCareersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type commentsUncheckedUpdateManyWithoutCareersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type projectsCreateManyCategoriesInput = {
    id?: number
    title: string
    description: string
    github_link?: string | null
    preview_link?: string | null
    img_url: string
  }

  export type projectsUpdateWithoutCategoriesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    github_link?: NullableStringFieldUpdateOperationsInput | string | null
    preview_link?: NullableStringFieldUpdateOperationsInput | string | null
    img_url?: StringFieldUpdateOperationsInput | string
  }

  export type projectsUncheckedUpdateWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    github_link?: NullableStringFieldUpdateOperationsInput | string | null
    preview_link?: NullableStringFieldUpdateOperationsInput | string | null
    img_url?: StringFieldUpdateOperationsInput | string
  }

  export type projectsUncheckedUpdateManyWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    github_link?: NullableStringFieldUpdateOperationsInput | string | null
    preview_link?: NullableStringFieldUpdateOperationsInput | string | null
    img_url?: StringFieldUpdateOperationsInput | string
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
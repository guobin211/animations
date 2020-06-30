/**
 * localforage.d.ts
 * @author GuoBin 2020-06-30
 */
interface LocalForageDbInstanceOptions {
  name?: string;
  storeName?: string;
}

interface LocalForageOptions extends LocalForageDbInstanceOptions {
  driver?: string | string[];
  size?: number;
  version?: number;
  description?: string;
}

interface LocalForageDbMethodsCore {
  getItem<T>(key: string, callback?: (err: any, value: T) => void): Promise<T>;

  setItem<T>(key: string, value: T, callback?: (err: any, value: T) => void): Promise<T>;

  removeItem(key: string, callback?: (err: any) => void): Promise<void>;

  clear(callback?: (err: any) => void): Promise<void>;

  length(callback?: (err: any, numberOfKeys: number) => void): Promise<number>;

  key(keyIndex: number, callback?: (err: any, key: string) => void): Promise<string>;

  keys(callback?: (err: any, keys: string[]) => void): Promise<string[]>;

  iterate<T, U>(
    iteratee: (value: T, key: string, iterationNumber: number) => U,
    callback?: (err: any, result: U) => void
  ): Promise<U>;
}

// @ts-ignore
type LocalForageDropInstanceFn = (
  dbInstanceOptions?: LocalForageDbInstanceOptions,
  callback?: (err: any) => void
) => Promise<void>;

interface LocalForageDriverMethodsOptional {
  dropInstance?: LocalForageDropInstanceFn;
}

// duplicating LocalForageDriverMethodsOptional to preserve TS v2.0 support,
// since Partial<> isn't supported there
interface LocalForageDbMethodsOptional {
  dropInstance: LocalForageDropInstanceFn;
}

interface LocalForageDriverDbMethods
  extends LocalForageDbMethodsCore,
    LocalForageDriverMethodsOptional {}

// @ts-ignore
type LocalForageDriverSupportFunc = () => Promise<boolean>;

interface LocalForageDriver extends LocalForageDriverDbMethods {
  _driver: string;
  _support?: boolean | LocalForageDriverSupportFunc;

  _initStorage(options: LocalForageOptions): void;
}

interface LocalForageSerializer {
  serialize<T>(value: T | ArrayBuffer | Blob, callback: (value: string, error: any) => void): void;

  deserialize<T>(value: string): T | ArrayBuffer | Blob;

  stringToBuffer(serializedString: string): ArrayBuffer;

  bufferToString(buffer: ArrayBuffer): string;
}

interface LocalForageDbMethods extends LocalForageDbMethodsCore, LocalForageDbMethodsOptional {}

export interface LocalForage extends LocalForageDbMethods {
  LOCALSTORAGE: string;
  WEBSQL: string;
  INDEXEDDB: string;

  config(options: LocalForageOptions): boolean;

  config(options: string): any;

  config(): LocalForageOptions;

  createInstance(options: LocalForageOptions): LocalForage;

  driver(): string;

  setDriver(
    driver: string | string[],
    callback?: () => void,
    errorCallback?: (error: any) => void
  ): Promise<void>;

  defineDriver(
    driver: LocalForageDriver,
    callback?: () => void,
    errorCallback?: (error: any) => void
  ): Promise<void>;

  getDriver(driver: string): Promise<LocalForageDriver>;

  getSerializer(
    callback?: (serializer: LocalForageSerializer) => void
  ): Promise<LocalForageSerializer>;

  supports(driverName: string): boolean;

  ready(callback?: (error: any) => void): Promise<void>;
}

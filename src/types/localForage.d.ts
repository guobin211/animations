/**
 * localForage.d.ts
 * @author GuoBin 2020-06-30
 */
type LocalForageDataTypes =
  | string
  | any[]
  | ArrayBuffer
  | Blob
  | Float32Array
  | Float64Array
  | Int8Array
  | Int16Array
  | number
  | object
  | Uint8Array
  | Uint8ClampedArray
  | Uint16Array
  | Uint32Array;
type IteratorCallback = (value: LocalForageDataTypes, key: string, index: number) => any;
type DriverNames = "localforage.INDEXEDDB" | "localforage.WEBSQL" | "localforage.LOCALSTORAGE";

interface LocalForageOptions {
  /**
   * 数据库名
   */
  name: string;
  /**
   * 数据Table名
   */
  storeName?: string;
  description?: string;
  driver?: DriverNames | (keyof DriverNames)[];
  version?: string;
  size?: number;
}

export interface LocalForage {
  /**
   * 重置数据库，删除所有内容
   */
  clear: () => Promise<void>;
  getItem: (key: string) => Promise<any>;
  setItem: (key: string, data: LocalForageDataTypes) => Promise<LocalForageDataTypes>;
  removeItem: (key: string) => Promise<void>;
  length: () => Promise<number>;
  keys: () => Promise<string[]>;
  key: (index: number) => Promise<string>;
  iterate: (iteratorCallback: IteratorCallback) => Promise<any>;
  setDriver: (driverName: DriverNames | (keyof DriverNames)[]) => void;
  config: (option: LocalForageOptions) => void;
  createInstance: (
    option: LocalForageOptions
  ) => Partial<LocalForage | "getItem" | "setItem" | "removeItem" | "keys" | "key">;
  dropInstance: (option?: { name?: string; storeName?: string }) => Promise<void>;
}

declare var localforage: LocalForage;

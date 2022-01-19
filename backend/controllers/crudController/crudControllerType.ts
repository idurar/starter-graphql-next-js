export interface edgesType<T> {
  edges: T[] | [];
  pagination: {
    page: number;
    pages: number;
    count: number;
  };
}

export interface crudControllerType<T> {
  read: (args: any) => Promise<T | null>;
  create: (args: any) => Promise<T | null>;
  update: (args: any) => Promise<T | null>;
  delete: (args: any) => Promise<T | null>;
  list: (args: any) => Promise<edgesType<T>>;
  search: (args: any) => Promise<T[] | []>;
}

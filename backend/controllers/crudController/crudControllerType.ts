export type listArgsType = {
  page?: string | number;
  limit?: string | number;
  sortBy?: string;
  sortOrder?: 'desc' | 'asc';
};

export type searchArgsType = {
  query?: string;
  fields?: string;
  limit?: string | number;
};

export interface edgesType<T> {
  edges: T[] | [];
  pagination: {
    page: number;
    pages: number;
    count: number;
  };
}

export interface crudControllerType<T> {
  read: (args: { _id: string }) => Promise<T | null>;
  create: (args: { body: Partial<T> }) => Promise<T | null>;
  update: (args: { _id: string; body: Partial<T> }) => Promise<T | null>;
  delete: (args: { _id: string }) => Promise<T | null>;
  list: (args: listArgsType) => Promise<edgesType<T>>;
  search: (args: searchArgsType) => Promise<T[] | []>;
}

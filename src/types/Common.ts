export type BaseResponse<T> = {
  code: number;
  message: string;
  data: T;
};


export type Tempelate = {
    id: number;
    name: string;
}
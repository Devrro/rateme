export interface IResponse<T>{
  count:string,
  next:string,
  prev:string,
  data:T[]
}

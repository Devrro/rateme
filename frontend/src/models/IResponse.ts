export interface IResponse<T>{
  count:string,
  next:string,
  prev:string,
  results:T[]
}

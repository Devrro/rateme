export interface IResponse<T>{
  count:string,
  next:string,
  prev:string,
  page:string,
  data:T[]
}

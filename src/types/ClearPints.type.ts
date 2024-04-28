export interface DataAPI {
    data: Daum[]
  }
  
  export interface Daum {
    codigo: string
    latitud: string
    longitud: string
    articleId: string
    category: string
    title: string
  }
  
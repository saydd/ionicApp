export interface BasePollStructure {
    question : string,
    options: Options[]
}

export interface Options {
    img: string ,
    text: string,
    video: string,
    location:string
}
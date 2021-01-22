import { ImageModel } from "./Image";

export class GifModel{
    constructor(
        public source_tld: string,
        public images: ImageModel
    ){

    }
}
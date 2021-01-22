import React from 'react'
import { GifModel } from '../models/GifModel';

const Gif = (gifprops: GifModel) => {
    return (
        <div style={{marginRight: 5}}>
            <div>
                <img
                    width="200"
                    height="200"
                    alt={gifprops.source_tld}
                    src={gifprops.images.original.url}
                />
            </div>
            <h1>{gifprops.source_tld}</h1>
        </div>
    );
}

export default Gif;
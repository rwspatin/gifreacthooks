import { log } from 'console';
import React, { useEffect, useState } from 'react';
import './App.css';
import Gif from './components/Gif';
import SearchGifs from './components/SearchGifs';
import { GifModel } from './models/GifModel';

const URL = "https://api.giphy.com/v1/gifs/search?api_key=3eFQvabDx69SMoOemSPiYfh9FY0nzO9x&offset=0&limit=5";

function App() {
  const [loading, setLoading] = useState(true);
  const [gifs, setGifs] = useState<GifModel[]>();
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(jsonResponse => {
        setGifs(jsonResponse.Search);
        setLoading(false);
      });
  }, []);

  const search = (searchValue: any) => {
    setLoading(true);

    fetch(`${URL}&q=${searchValue}`)
      .then(response => response.json())
      .then(jsonResponse => {
        console.log('converted');
        
        if (jsonResponse.Response !== "") {
          console.log(jsonResponse);
          let list: GifModel[] = [];
          let k = jsonResponse.data as GifModel[];
          console.log(jsonResponse.data);

          k.forEach(x => {
            console.log(x);
              list.push(new GifModel(x.source_tld, x.images));
          });

          setGifs(list);
          setLoading(false);
        } else {
          setErrorMessage(jsonResponse.Error);
          setLoading(false);
        }
      });
  	};

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">React Photo Search</h1>
        <SearchGifs search={search}/>
        <div style={{display: "flex"}}>
          {
              loading && !errorMessage ? (
                <span>Load 🐱‍🏍</span>
              ) : errorMessage ? (
                <div className="errorMessage">{errorMessage}</div>
              ) : !loading ? (
                gifs ? gifs.map((gif, idx) => (
                  <Gif source_tld={gif.source_tld} images={gif.images}/>
                ) ) : null
              ) : null
          }
        </div>
      </div>
    </div>
  );
}

export default App;

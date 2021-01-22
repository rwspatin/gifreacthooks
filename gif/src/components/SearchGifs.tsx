import React, { useState } from 'react';

const SearchGifs = (props: any) =>  { 
    const [query, setQuery] = useState("");

    const handleSearchInputChanges = (e: any) => {
        console.log(e.target.value);
        setQuery(e.target.value);
    }
    
    const resetInputField = () => {
        setQuery("")
    }
    
    const callSearchFunction = (e: any) => {
        e.preventDefault();
        props.search(query);
        console.log('search');
        resetInputField();
    }

    return (
        <form className="form"> 
            <label className="label" htmlFor="query"> 
                {" "}
                🐱‍👤
            </label>
            <input
            type="text"
            name="query"
            className="input"
            placeholder={`Try "The Office" or "Stonks"`}
            value={query}
            onChange={handleSearchInputChanges}
            />
            <button type="submit" className="button" onClick={callSearchFunction}>
                Search
            </button>
        </form>
    );
}

export default SearchGifs;
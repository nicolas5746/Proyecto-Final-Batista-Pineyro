import React from 'react';
import './search.sass';

const Search = ({ filter, setFilter, search, placeholder }) => {
    let onChange = (event) => {
        setFilter(event.target.value);
    }

    return (
        <div className="search">
            <label for='filter'>{search}</label>
            <input
                id='filter'
                name='filter'
                type='text'
                placeholder={placeholder}
                value={filter}
                onChange={onChange} />
        </div>
    );
}

export default Search;
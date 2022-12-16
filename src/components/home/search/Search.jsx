import './search.sass';

const Search = ({ filter, setFilter }) => {

    let onChange = (event) => {
        setFilter(event.target.value);
    }

    return (
        <div className='search'>
            <label for='filter'>{`buscar`}</label>
            <input
                id='filter'
                name='filter'
                type='text'
                placeholder={`Ingresa una marca`}
                value={filter}
                onChange={onChange} />
        </div>
    );
}

export default Search;
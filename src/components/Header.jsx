import { useState } from 'react';

const Header = ({setQuery}) => {
    const [searchPost, setSearchPost ] = useState('');

    const handleInputChange = (e) => {
        setSearchPost(e.target.value);
    }

    const handleSearch = () => {
        setQuery(searchPost);
    }

  return (
    <div>
        <input
            type="text"
            placeholder="Найти артикль"
            value={searchPost}
            onChange={handleInputChange}
        />

        <button
            onClick={handleSearch}>Найти</button>
    </div>
  )
}

export default Header
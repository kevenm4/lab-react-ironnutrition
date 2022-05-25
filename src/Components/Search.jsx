import React, {useState} from 'react';
import { Divider, Input } from 'antd';
function Search(props) {
  const { searchFilter } = props;
  const [searchBar, setSearchBar] = useState('');

  const handleSearch = (e) => {
    setSearchBar(e.target.value);

    searchFilter(e.target.value);
  };
  return (
    <div>
      <Divider>Search</Divider>
      <label>Search</label>
      <Input value={searchBar} type="text" onChange={handleSearch} />
    </div>
  );
}

export default Search;

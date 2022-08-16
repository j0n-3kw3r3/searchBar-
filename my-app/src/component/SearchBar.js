import React from 'react';
import './SearchBar.css'
import { FaSearch, FaWindowClose } from 'react-icons/fa';
import { useState } from 'react';

function SearchBar({ placeholder, data }) {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntry, setWordEntry] = useState('');

    const handlefiltered = (e) => {
        const searchWord = e.target.value
        setWordEntry(searchWord)
        const newFiltered = data.filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase())
        })
        
        if (searchWord ==="") {
            setFilteredData([])
        } else {
            
            setFilteredData(newFiltered)
        }
    }
    const clearInput = () => {
        setFilteredData([])
        setWordEntry('')
        
    }

    return (
        <div className='search'>
            <div className='searchInputs'>
                <input type="text" name="" id="" placeholder={placeholder} onChange={handlefiltered} value={wordEntry} />
                <div className='searchIcon'>
                    {filteredData.length === 0 ?
                        < FaSearch  />:
                    <FaWindowClose id='clearBtn' onClick={clearInput} />}
                    
                </div>
            </div>
            {
                filteredData.length !== 0 &&
                <div className='dataResult'>
                    {
                        filteredData.slice(0, 15).map((item, key) => {
                            return (
                                <a className='dataItem' href={item.link} target='_blank' rel='noreferrer' key={key} >{item.title}</a>
                            )
                        })
                    }
                </div>
            }
        </div>
    );
}

export default SearchBar;

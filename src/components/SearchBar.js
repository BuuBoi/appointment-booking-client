import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';   
const SearchBar = () => {
    const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/doctors?query=${searchInput}`);
  };
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#2E2E2E', // Màu nền tối
            borderRadius: '10px',
            padding: '8px',
            width: '400px',
        }}>
            {/* Icon Search */}
            <span style={{
                marginRight: '8px',
                color: '#fff',
                fontSize: '18px',
                opacity: 0.7,
            }}>
                🔍
            </span>
            {/* Input */}
            <input
                type="text"
                placeholder="Search doctor..."
                style={{
                    flex: 1,
                    backgroundColor: 'transparent',
                    border: 'none',
                    outline: 'none',
                    color: '#fff',
                    fontSize: '16px',
                }}
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
            />
            {/* Button */}
            <button style={{
                backgroundColor: '#007BFF', // Màu xanh của nút
                color: '#fff',
                border: 'none',
                borderRadius: "180px",
                padding: '8px 16px',
                fontSize: '16px',
                cursor: 'pointer',
            }}
            onClick={handleSearch}>
                Search
            </button>
        </div>
    );
};

export default SearchBar;

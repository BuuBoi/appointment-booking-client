import React from 'react';

const SearchBar = () => {
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
                placeholder="Search Mockups, Logos..."
                style={{
                    flex: 1,
                    backgroundColor: 'transparent',
                    border: 'none',
                    outline: 'none',
                    color: '#fff',
                    fontSize: '16px',
                }}
            />
            {/* Button */}
            <button style={{
                backgroundColor: '#007BFF', // Màu xanh của nút
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                padding: '8px 16px',
                fontSize: '16px',
                cursor: 'pointer',
            }}>
                Search
            </button>
        </div>
    );
};

export default SearchBar;

import React from 'react';

const TagBar = () => {
  const tags = [
    'All',
    'Thriller',
    'Horror',
    'Comedy',
    'Romantic',
    'Anime',
    'Action',
    'Sci-Fi',
  ];

  return (
    <div className="flex space-x-4 pl-24 pt-1 bg-black p-4 overflow-x-auto">
      {tags.map((tag, index) => (
        <button 
          key={index} 
          className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 focus:outline-none"
        >
          {tag}
        </button>
      ))}
    </div>
  );
}

export default TagBar;

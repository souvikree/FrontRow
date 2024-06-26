
import axios from 'axios';

export const fetchActiveMovies = async () => {
  try {
    const response = await axios.get('/api/movies/active');
    return response.data;
  } catch (error) {
    console.error('Error fetching active movies:', error);
    throw error;
  }
};


// // services/movieService.js for theater owner 
// import axios from 'axios';

// export const fetchAllMovies = async () => {
//   try {
//     const response = await axios.get('/api/admin/movies');
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching movies:', error);
//     throw error;
//   }
// };

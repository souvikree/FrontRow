
// import Movie from "../model/Movie-model.js";
// import { toast } from "react-toastify";
// import upload from "../utils/multer.js";

// export const addMovie = [
//   upload.fields([
//     { name: "moviePoster", maxCount: 1 },
//     { name: "castDetails[picture]", maxCount: 10 },
//   ]),

//   async (req, res) => {
//     try {
//       //  movie details from request body
//       const { title, director, releaseDate, trailerLink, castDetails } = req.body;

//       // Check if  same title already exists
//       const existingMovie = await Movie.findOne({ title });

//       if (existingMovie) {
//         // If movie with the same title exists, show an error toast and return
//         toast.error("Movie with this title already exists!");
//         return res.status(400).json({ message: "Movie with this title already exists" });
//       }

//       // Process moviePoster and castDetails pictures from multer upload
//       const moviePoster = req.files.moviePoster[0].path;
//       const castDetailsParsed = JSON.parse(castDetails).map((cast, index) => ({
//         name: cast.name,
//         picture: req.files[`castDetails[picture]`][index].path,
//       }));

//       // Create a new Movie document
//       const newMovie = new Movie({
//         title,
//         director,
//         releaseDate,
//         trailerLink,
//         moviePoster,
//         castDetails: castDetailsParsed,
//       });

//       // Save the new movie document to the database
//       await newMovie.save();

//       // Show success toast notification
//       toast.success("Movie added successfully");

//       // Respond with success message and the newly created movie document
//       res.status(201).json({ message: "Movie added successfully", movie: newMovie });
//     } catch (err) {
//       // Handle any errors during movie addition process
//       console.error(err);
//       res.status(500).json({ message: "Error adding movie" });
//     }
//   },
// ];

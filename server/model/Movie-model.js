// import mongoose from "mongoose";

// const movieSchema = new mongoose.Schema({
//     title:{
//         type:String,
//         require:true,
//     },
//     director:{
//         type:String,
//         require:true,
//     },
//     releaseDate:{
//         type:Date,
//         require:true,
//     },
//     trailerLink:{
//         type:String,
//         require:[true,"Trailer link must be filled"],
//     },
//     moviePoster: {
//         type:String,
//         require:[true,"Movie Poster must be filled"],
//     },
//     castDetails: [{
//       name:{
//         type:String,
//         require:true,
//     },
//       picture: {
//         type:String,
//         require:true,
//     },
//     }]
//   },{timestamps:true});
  
//   const Movie = mongoose.model('Movie', movieSchema);
// export default Movie;
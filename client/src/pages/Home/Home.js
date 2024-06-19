import { useEffect, useState } from "react"
// import MainImage from "./../assets/images/home-image.png"
// import MovieCard from "../components/card/movie-card"
import { Link } from "react-router-dom"
import axios from "axios"
import Swal from "sweetalert2"

export default function Home() {
  const [isAuth] = useState(false)
  const [movies, setMovies] = useState([])

  const movieEndPoint = import.meta.env.VITE_MOVIE_END_POINT

  useEffect(() => {
    loadMovies()
  }, [])

  const loadMovies = async () => {
    try {
      const response = await axios.get(`${movieEndPoint}/all?size=5&page=1`)
      setMovies(response.data.data)
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Fail to load movies"
      })
      console.log(err)
    }
  }

  return (
    <div className="text-white font-bold p-5 mx-4">
      <div className="flex flex-col lg:flex-row justify-center lg:justify-evenly">
        <div className="flex flex-col justify-center">
          <h1 className="whitespace-nowrap lg:mt-12 text-center lg:text-left font-bold text-4xl lg:text-7xl lg:w-fit">
            You Can Book
          </h1>
          <h1 className="whitespace-nowrap text-center lg:text-left font-bold text-4xl lg:text-7xl lg:w-fit">
            Movie Now
          </h1>
          <p className="whitespace-nowrap text-center lg:text-left text-sm lg:text-lg font-medium text-gray-400 mt-4">
            See what movies are available, <br />
            reserve a seat at the place you want, <br />
            and everything from one place
          </p>
          <div className="mt-2 lg:my-12 flex items-center justify-center gap-4 w-full">
            <button className="whitespace-nowrap w-fit lg:w-full px-2 py-1 lg:px-6 lg:py-2 text-sm lg:text-lg bg-transparent-1 border border-[#BDC3C7] hover:text-black hover:bg-[#BDC3C7] font-bold">
              All Movies
            </button>
            <button className="whitespace-nowrap w-fit lg:w-full px-2 py-1 lg:px-6 lg:py-2 text-sm lg:text-lg bg-transparent-1 border border-[#BDC3C7] hover:text-black hover:bg-[#BDC3C7] font-bold">
              {isAuth ? "Book Now" : "Sign in first"}
            </button>
          </div>
        </div>
        {/* <div className="flex justify-center items-center">
          <img src={MainImage} alt="main image" />
        </div> */}
      </div>
      <div className="flex flex-col mt-2 lg:mt-12 lg:text-white">
        <h1 className="text-md text-gray-500">Latest movies</h1>
        <Link
          to={"/movies"}
          className="whitespace-nowrap self-center mt-4 text-gray-500 border border-gray-500 py-2 px-4 rounded-xl inline-flex items-center hover:bg-black hover:text-white"
        >
          View More
        </Link>
      </div>
    </div>
  )
}

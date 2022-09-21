import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import { useRef, useState } from 'react'
import { Movie } from '../typings'
import Thumbnail from './Thumbnail'

interface Props {
  title: string
  // when using firebase
  // movie: Movie | DocumentData[] <--- ARRAY IN ROW
  movies: Movie[]
}

function Row({ title, movies }: Props) {
  const rowRef = useRef<HTMLDivElement>(null)
  const [isMoved, setIsMoved] = useState(false)

  // handleClick function is defined here, depending on where the user clicks.
  const handleClick = (direction: string) => {
    // setting the state to true (line 15 is where the state is defined)
    setIsMoved(true)
    // we get the current ref of the object (the hole container div holding the arrows + rows)
    if (rowRef.current) {
      // client width is the width of the row that is visible in the browser.
      const { scrollLeft, clientWidth } = rowRef.current
      const scrollTo =
        direction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth

        rowRef.current.scrollTo({left: scrollTo, behavior: "smooth"})
    }
  }
  // logging to see which width we are at in the browser console.
  // console.log(rowRef.current!.scrollLeft, rowRef.current!.clientWidth)

  return (
    <div className="h-40 space-y-0.5 md:space-y-2">
      <h2 className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">
        {title}
      </h2>
      <div className="group relative md:-ml-2">
        <ChevronLeftIcon
          className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
            !isMoved && 'hidden'
          }`}
          onClick={() => handleClick('left')}
        />

        <div
          ref={rowRef}
          className="flex scrollbar-hide items-center space-x-0.5 overflow-x-scroll md:space-x-2.5 md:p-2"
        >
          {movies.map((movie) => (
            <Thumbnail key={movie.id} movie={movie} />
          ))}
        </div>

        <ChevronRightIcon
          className={`absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100`}
          onClick={() => handleClick('right')}
        />
      </div>
    </div>
  )
}

export default Row

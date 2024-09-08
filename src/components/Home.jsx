import Image from "../shared/Image"
import { Link } from "react-router-dom"

export default function Home({src,name,id}) {
  return (
    <Image src={src}>
      <div className="absolute inset-0 flex flex-col justify-between">
            <div className="flex justify-center mt-20">
            <h1 className="text-5xl font-bold mb-2">{name}</h1>
            </div>
            <div className=" flex justify-center mb-16 space-x-4">
              <Link to={`tesla/${id}`} className="bg-gray-900 text-white px-8 md:px-28 py-2 rounded-full text-sm">
                Order Now
              </Link>
              <Link to={`tesla/${id}`} className="bg-gray-200 text-gray-900 px-8 md:px-28 py-2 rounded-full text-sm">
                Model Detail
              </Link>
            </div>
          </div>
    </Image>
  )
}
import Image from "../shared/Image";
import { useParams, Link } from "react-router-dom";
import { ChevronDown } from 'lucide-react'
import 'react-loading-skeleton/dist/skeleton.css'
import SkeletonDesign from "./SkeletonDesign";
import Specs from "@/shared/Gen_Spec";
import { useData } from "@/hook/useData";


export default function ProductListing() {

  const { id } = useParams()
  const {loading, teslas} = useData(id)

  if (loading) {
    return (
      <SkeletonDesign />
    )
  }

  return (
    <>
      {teslas &&
        <Image src={teslas.imageUrl}>
          <div className="flex flex-col justify-between min-h-screen p-4 md:pt-20">
            <div className="flex flex-col">
              <div className="flex justify-center items-end">
                <h1 className="text-3xl sm:text-2xl font-normal tracking-tight text-black">
                  {teslas.name}
                </h1>
              </div>
              <div className="pt-10">
                <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-12 mb-4 text-black">
                  <div className="text-center">
                    <p className="text-3xl sm:text-xl font-thin">{teslas.range}</p>
                    <p className="text-sm">Range (EPA est.)</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl sm:text-xl font-thin">{teslas.acceleration}</p>
                    <p className="text-sm">0-60 mph*</p>
                  </div>
                  <div className="text-center hidden sm:block">
                    <p className="text-3xl sm:text-xl font-thin">{teslas.topSpeed}</p>
                    <p className="text-sm">Top Speed†</p>
                  </div>
                  <div className="text-center hidden sm:block">
                    <p className="text-3xl sm:text-xl font-thin">{teslas.peakPower}</p>
                    <p className="text-sm">Peak Power</p>
                  </div>
                  <Link to={ {
                    pathname: "detail",
                  }}
                  state={{id: id }} //passing id for indiviudal car details
                  className="bg-gray-800 text-white px-8 sm:px-10 py-2 rounded-full hover:bg-gray-700 transition-colors duration-300 text-sm font-bold">
                    ORDER NOW
                  </Link>
                </div>
                <div className="flex justify-center animate-bounce">
                  <ChevronDown size={24} />
                </div>
              </div>
            </div>
          </div>
          <Specs />
        </Image>
      }
    </>
  )
}
import { useState } from "react";
import { useLocation } from "react-router-dom";
import SkeletonDesign from "@/components/SkeletonDesign";
import FeatureCard from "@/shared/FeatureCard";
import Review from "@/shared/Review";
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize'
import { useData } from "@/hook/useData";
import FeatureCard2 from "./FeatureCard2";

export default function Deatils() {

    const location = useLocation()
    const [showConfetti, setShowConfetti] = useState(false);
    const { width, height } = useWindowSize()
    const { id } = location.state || {}
    const { loading, teslas } = useData(id)

    if (loading) {
        return (
            <SkeletonDesign />
        )
    }

    function handleClick() {
        setShowConfetti(true)
    }

    return (
        <div className="flex h-screen">
            {showConfetti && <Confetti
                width={width}
                height={height}
            />}
            {teslas && (
                <>
                    <div className="font-sans bg-white">
                        <div className="p-4 lg:max-w-7xl max-w-4xl mx-auto mt-10">
                            <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6 rounded-lg">
                                <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">

                                    <div className="px-4 py-10 rounded-lg shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative">
                                        <img src={teslas.imageUrl} alt="Product" className="w-3/4 rounded object-cover mx-auto" />

                                    </div>

                                    <div className="mt-6 flex flex-wrap justify-center gap-6 mx-auto">
                                        <div className="w-24 h-20 flex items-center justify-center rounded-lg p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] cursor-pointer">
                                            <img src={teslas.imageUrl} alt="Product2" className="w-full" />
                                        </div>
                                        <div className="w-24 h-20 flex items-center justify-center rounded-lg p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] cursor-pointer">
                                            <img src={teslas.imageUrl} alt="Product2" className="w-full" />
                                        </div>
                                        <div className="w-24 h-20 flex items-center justify-center rounded-lg p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] cursor-pointer">
                                            <img src={teslas.imageUrl} alt="Product2" className="w-full" />
                                        </div>
                                        <div className="w-24 h-20 flex items-center justify-center rounded-lg p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] cursor-pointer">
                                            <img src={teslas.imageUrl} alt="Product2" className="w-full" />
                                        </div>
                                    </div>
                                </div>

                                <div className="lg:col-span-2">
                                    <h2 className="text-2xl font-extrabold text-gray-800">TESLA | {teslas.name}</h2>

                                    <div className="flex space-x-2 mt-4">
                                        {/* map */}
                                        <svg className="w-5 fill-blue-600" viewBox="0 0 14 13" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <svg className="w-5 fill-blue-600" viewBox="0 0 14 13" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <svg className="w-5 fill-blue-600" viewBox="0 0 14 13" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <svg className="w-5 fill-blue-600" viewBox="0 0 14 13" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <svg className="w-5 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <h4 className="text-gray-800 text-base">500 Reviews</h4>
                                    </div>

                                    <div className="flex flex-wrap gap-4 mt-8">
                                        <p className="text-gray-800 text-3xl font-bold">${teslas.price}</p>
                                        <p className="text-gray-400 text-base"><strike>$650,000</strike> <span className="text-sm ml-1">Tax included</span></p>
                                    </div>

                                    <div className="mt-8">
                                        <h3 className="text-xl font-bold text-gray-800">Choose a Color</h3>
                                        <p className="mb-2 text-red-500 text-sm font-thin italic">This feature is in progress,not available for now</p>
                                        {/* TODO: Change image based on the btn selection*/}
                                        <div className="flex flex-wrap gap-3 mt-4">
                                            <button type="button" className="w-10 h-10 bg-black border-2 border-white hover:border-gray-800 rounded-full shrink-0 transition-all"></button>
                                            <button type="button" className="w-10 h-10 bg-gray-600 border-2 border-white hover:border-gray-800 rounded-full shrink-0 transition-all"></button>
                                            <button type="button" className="w-10 h-10 bg-gray-100 border-2 border-white hover:border-gray-800 rounded-full shrink-0 transition-all"></button>
                                            <button type="button" className="w-10 h-10 bg-blue-400 border-2 border-white hover:border-gray-800 rounded-full shrink-0 transition-all"></button>
                                        </div>
                                    </div>
                                    <button type="button" className="min-w-[400px] px-4 py-3 mt-6 bg-gray-800 hover:bg-gray-900 text-white text-sm font-semibold rounded" onClick={handleClick}>Buy now</button>
                                </div>
                            </div>

                            <FeatureCard2 name={teslas.name} range={teslas.range} acceleration={teslas.acceleration} topSpeed={teslas.topSpeed} description={teslas.description} />

                            <FeatureCard title="INTERIOR FEATURES" features={teslas.interiorFeatures} />
                            <FeatureCard title="EXTERIOR FEATURES" features={teslas.exteriorFeatures} />
                            <Review />
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}
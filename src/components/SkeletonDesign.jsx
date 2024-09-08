import Skeleton from 'react-loading-skeleton';

export default function SkeletonDesign() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow container mx-auto pt-20 sm:p-6 lg:p-8">
        <div className="mb-8 pt-20 flex justify-center items-center">
          <Skeleton className="h-8 sm:w-[300px] mb-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg shadow-md" />
        </div>
        <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Skeleton className="h-[200px] w-full mb-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg" />
              <Skeleton className="h-4 w-[80%] mb-2 bg-gradient-to-r from-gray-300 to-gray-400 rounded-lg" />
              <Skeleton className="h-4 w-[60%] bg-gradient-to-r from-gray-300 to-gray-400 rounded-lg" />
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
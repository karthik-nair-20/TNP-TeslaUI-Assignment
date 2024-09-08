import { Check } from "lucide-react"

export default function FeatureCard({ title, features }) {

  return (

    <div className="mt-16 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6 sm:p-4 md:p-6">
      <h3 className="text-xl font-bold text-gray-800 sm:text-lg md:text-xl">{title}</h3>
        <ul className="mt-4 space-y-6 text-gray-800 py-4">
          {features?.map((feature, index) => (
            <li key={index} className="text-sm flex items-center">
              <Check className="w-5 h-5 text-gray-900 flex-shrink-0" />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>
    </div>
  )
}

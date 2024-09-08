import { Check } from "lucide-react"

export default function FeatureCard({ title, features }) {

  return (

    <div className="mt-16 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <ul className="mt-4 space-y-6 text-gray-800 py-4">
          {features?.map((feature, index) => (
            <li key={index} className="text-sm">
              <Check className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
              <span className="ml-4 float-right">{feature}</span>
            </li>
          ))}
        </ul>
    </div>
  )
}

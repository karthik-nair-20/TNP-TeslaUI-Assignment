export default function FeatureCard2({name,range,acceleration,topSpeed,description}) {
  return (
    <div className="mt-16 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6 sm:p-4">
    <h3 className="text-xl font-bold text-gray-800 sm:text-lg">Product information</h3>
    <ul className="mt-4 space-y-6 text-gray-800">
        <li className="text-sm flex justify-between">NAME <span className="ml-4">{name}</span></li>
        <li className="text-sm flex justify-between">RANGE <span className="ml-4">{range}</span></li>
        <li className="text-sm flex justify-between">ACCELERATION <span className="ml-4">{acceleration}</span></li>
        <li className="text-sm flex justify-between">TOP SPEED<span className="ml-4">{topSpeed}</span></li>
        <li className="text-sm flex justify-between">DESCRIPTION<span className="ml-4">{description}</span></li>
    </ul>
  </div>
  )
}
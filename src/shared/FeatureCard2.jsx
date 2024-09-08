export default function FeatureCard2({name,range,acceleration,topSpeed,description}) {
  return (
    <div className="mt-16 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
    <h3 className="text-xl font-bold text-gray-800">Product information</h3>
    <ul className="mt-4 space-y-6 text-gray-800">
        <li className="text-sm">NAME <span className="ml-4 float-right">{name}</span></li>
        <li className="text-sm">RANGE <span className="ml-4 float-right">{range}</span></li>
        <li className="text-sm">ACCELERATION <span className="ml-4 float-right">{acceleration}</span></li>
        <li className="text-sm">TOP SPEED<span className="ml-4 float-right">{topSpeed}</span></li>
        <li className="text-sm">DESCRIPTION<span className="ml-4 float-right">{description}</span></li>
    </ul>
  </div>
  )
}
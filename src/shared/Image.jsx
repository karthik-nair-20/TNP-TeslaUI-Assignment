export default function Image({src,children}) {
  return (
    <div
    className="relative h-screen bg-cover bg-center bg-no-repeat"
    style={{backgroundImage: `url('${src}?height=1080&width=1920')`}}>
      {children}
    </div>
  )
}
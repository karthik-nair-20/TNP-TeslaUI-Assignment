import Home from "./Home"
import { useData } from "@/hook/useData"
import { Wrapper, Content } from "./landing.style"
import SkeletonDesign from "./SkeletonDesign"


export default function Landing() {
  const {loading, teslas} = useData()
  if(loading)
  {
    return <SkeletonDesign />
  }

  return (
    
    <Wrapper>
      {teslas.map((tesla) => (
        <Content key={tesla.id}>
          <Home src={tesla.imageUrl} name={tesla.name} id={tesla.id} />
        </Content>
      ))}
    </Wrapper>
  )
}
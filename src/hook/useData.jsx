import { useState, useEffect } from "react"
import { getTesla } from "@/api"

export function useData(id=null) {
  const[teslas, setTeslas] = useState([])
  const[loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      try {
        if(id) {
          const teslaData = await getTesla(id);
          setTeslas(teslaData);
        }
        else {
          const teslaData = await getTesla();
          setTeslas(teslaData)
        }
      }
      catch(e) {
        console.log(e);
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  },[id])

  return {
    loading,
    teslas
  }
}
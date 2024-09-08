export async function getTesla(id) {
  const url = id ? `/api/teslas/${id}` : "/api/teslas"
  const res = await fetch(url)
  if (!res.ok) {
      throw {
          message: "Failed to fetch vans",
          statusText: res.statusText,
          status: res.status
      }
  }
  const data = await res.json()
  console.log(data.teslas)
  return data.teslas
}
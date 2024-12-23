import { useEffect, useState } from "react"
import "./App.css"
import * as starshipService from "./services/starshipService"
import StarshipSearch from "./components/StarshipSearch"
import StarshipList from "./components/StarshipList"

const App = () => {
  const [starships, setStarships] = useState([])

  const fetchData = async (query) => {
    const allStarships = await starshipService.show()

    if (query) {
      const filteredStarships = allStarships.filter((starship) =>
        starship.name.toLowerCase().includes(query.toLowerCase())
      )
      setStarships(filteredStarships)
    } else {
      setStarships(allStarships)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <main>
      <h1>Star Wars API</h1>
      <StarshipSearch fetchData={fetchData} />
      <StarshipList starships={starships} />
    </main>
  )
}

export default App

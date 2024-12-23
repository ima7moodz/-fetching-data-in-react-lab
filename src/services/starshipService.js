const BASE_URL = "https://swapi.py4e.com/api/starships/"

const show = async () => {
  try {
    const response = await fetch(BASE_URL)
    const data = await response.json()
    return data.results
  } catch (error) {
    console.log(error)
  }
}

export { show }

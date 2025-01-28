export const fetchDogImages = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random/12")
    const data = await response.json()
    return data.message 
  }
  
  
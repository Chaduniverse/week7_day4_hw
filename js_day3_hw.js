

const formData= document.querySelector('#form-data')
formData.addEventListener('Submit',(event) => {
    event.preventDefault()
    console.log(event)

    const name = formData.name.value  
    
    
    pokemonData(name)

   
})  


async function pokemonData(name) {
    url = `https://pokeapi.co/api/v2/pokemon/${name}`
    const response = await fetch(url)
    const data = await response.json() 
    console.log(data)    
}  


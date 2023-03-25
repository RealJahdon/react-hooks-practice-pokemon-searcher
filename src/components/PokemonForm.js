import React, {useState}from "react";
import { Form } from "semantic-ui-react";

function PokemonForm( { pokemons, setPokemons }) {
  const pokeUrl = 'http://localhost:3001/pokemon'

  const [formData, setFormData] = useState({
    name: "",
    hp: 0,
    frontUrl: "",
    backUrl: ""
  })

  function handleChange (e) {
   let key = e.target.name

   setFormData({
     ...formData, 
     [key]: e.target.value
   })



   console.log(formData)

  }

  const handleSubmit = (e) => {
    e.preventDefault()

   let fetchObject = {
     name: formData.name,
     hp: parseInt(formData.hp),
     sprites: {
       "front": formData.frontUrl,
       "back": formData.backUrl
     }
   }

   fetch(pokeUrl, {
     method: "POST",
     headers: {'Content-Type': 'application/json'
    },
    body: JSON.stringify(fetchObject)
   })
    .then(r => r.json())
    .then(newPoke => setPokemons([
      newPoke,
      ...pokemons
      ]))

  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
          <Form.Input fluid label="Name" onChange={handleChange} placeholder="Name" name="name" value={formData.name} />
          <Form.Input fluid label="hp" onChange={handleChange} placeholder="hp" name="hp" value={formData.hp} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={formData.frontUrl}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={formData.backUrl}
            onChange={handleChange}
          />
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}


export default PokemonForm;

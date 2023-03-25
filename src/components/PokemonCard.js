import React, { useState } from "react";
import { Card } from "semantic-ui-react";


function PokemonCard( {onePoke} ) {

  const { id, name, hp, sprites } = onePoke
  const [clicked, setClicked] = useState(false)

  function handleClick (e) {
    setClicked(!clicked)
  }

  return (
    <Card>
      <div>
        <div className="image">
          <img onClick={handleClick} src={clicked ? sprites.back : sprites.front} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}


export default PokemonCard;

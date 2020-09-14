import React from 'react';
import dot1 from '../../images/dot1.png';
import dot2 from '../../images/dot2.png';
import dot3 from '../../images/dot3.png';
import dot4 from '../../images/dot4.png';
import dot5 from '../../images/dot5.png';
import dot6 from '../../images/dot6.png';
import dot7 from '../../images/dot7.png';
import dot8 from '../../images/dot8.png';
import dot9 from '../../images/dot9.png';
import bamboo1 from '../../images/bamboo1.png';
import bamboo2 from '../../images/bamboo2.png';
import bamboo3 from '../../images/bamboo3.png';
import bamboo4 from '../../images/bamboo4.png';
import bamboo5 from '../../images/bamboo5.png';
import bamboo6 from '../../images/bamboo6.png';
import bamboo7 from '../../images/bamboo7.png';
import bamboo8 from '../../images/bamboo8.png';
import bamboo9 from '../../images/bamboo9.png';
import thousand1 from '../../images/thousand1.png';
import thousand2 from '../../images/thousand2.png';
import thousand3 from '../../images/thousand3.png';
import thousand4 from '../../images/thousand4.png';
import thousand5 from '../../images/thousand5.png';
import thousand6 from '../../images/thousand6.png';
import thousand7 from '../../images/thousand7.png';
import thousand8 from '../../images/thousand8.png';
import thousand9 from '../../images/thousand9.png';
import wind1 from '../../images/wind1.png';
import wind2 from '../../images/wind2.png';
import wind3 from '../../images/wind3.png';
import wind4 from '../../images/wind4.png';
import dragon1 from '../../images/dragon1.png';
import dragon2 from '../../images/dragon2.png';
import dragon3 from '../../images/dragon3.png';
import flower1 from '../../images/flower1.png';
import flower2 from '../../images/flower2.png';
import flower3 from '../../images/flower3.png';
import flower4 from '../../images/flower4.png';
import season1 from '../../images/season1.png';
import season2 from '../../images/season2.png';
import season3 from '../../images/season3.png';
import season4 from '../../images/season4.png';
import './Rules.css';

const Rules = () => {
  
  return (
    <div className="instructions">
      <h3>How to play!</h3>
      <p>Each player rolls the die and highest number gets to go first</p>
      <p>Once you find out who is going first, the play order goes clockwise starting from that person</p>
      <p>Now the player who goes first rolls the dice, counts that many tiles from the right edge of their wall, and separates the wall at that point to begin dealing tiles from the left of that spot and going clockwise</p>
      <p>Go around taking 4 tiles at a time until each player has 13 tiles, and the dealer has 14 tiles</p>
      <p>Now everyone looks at their tiles privately, on the dark green part of the screen</p>
      <p>The first player starts by discarding one tile, then play continues clockwise</p>
      <p>Any player can "PONG!" the most recently discarded tile completes a 3 of a kind for them, but they have to then reveal their 3 of a kind on the light green part of the screen, so everyone can see it</p>
      <p>After claiming the PONG tile, that player discards a tile, and play continues clockwise from that person</p>
      <p>If the player who goes right before you discards a tile that can complete a run for you, you can "JIAK!" it, claiming the tile and revealing your run on the light green part of the screen so everyone can see it</p>
      <p>If anyone discards a tile that can complete a 4 of a kind for you, you can "GONG!" it, and reveal your four of a kind on the light green part of the screen so everyone can see it</p>
      <p>The game ends when someone achieves a full 14 tile set of four sets and a pair</p>
      <p>Dots: <span><img src={dot1} /></span><span><img src={dot2} /></span><span><img src={dot3} /></span><span><img src={dot4} /></span><span><img src={dot5} /></span><span><img src={dot6} /></span><span><img src={dot7} /></span><span><img src={dot8} /></span><span><img src={dot9} /></span></p>
      <p>Bamboos: <span><img src={bamboo1} /></span><span><img src={bamboo2} /></span><span><img src={bamboo3} /></span><span><img src={bamboo4} /></span><span><img src={bamboo5} /></span><span><img src={bamboo6} /></span><span><img src={bamboo7} /></span><span><img src={bamboo8} /></span><span><img src={bamboo9} /></span></p>
      <p>Thousands: <span><img src={thousand1} /></span><span><img src={thousand2} /></span><span><img src={thousand3} /></span><span><img src={thousand4} /></span><span><img src={thousand5} /></span><span><img src={thousand6} /></span><span><img src={thousand7} /></span><span><img src={thousand8} /></span><span><img src={thousand9} /></span></p>
      <p>With dots, bamboos, and thousands, you can create a run or a 3 of a kind or 4 of a kind</p>
      <p>Winds: <span><img src={wind1} /></span><span><img src={wind2} /></span><span><img src={wind3} /></span><span><img src={wind4} /></span></p>
      <p>Dragons: <span><img src={dragon1} /></span><span><img src={dragon2} /></span><span><img src={dragon3} /></span></p>
      <p>With winds and dragons you can only create a pair or 3 or 4 of a kind</p>
      <p>Flowers: <span><img src={flower1} /></span><span><img src={flower2} /></span><span><img src={flower3} /></span><span><img src={flower4} /></span><span><img src={season1} /></span><span><img src={season2} /></span><span><img src={season3} /></span><span><img src={season4} /></span></p>
      <p>If you get a flower, discard it and then take another tile from the other end of the stack instead</p>
    </div>
  )
};

export default Rules;
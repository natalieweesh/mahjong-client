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
import './Cheatsheet.css';

const Cheatsheet = () => {
  return (
    <div className="instructions">
      <p><br/>Dots</p>
      <p>(can make runs or 3 of a kind)</p>
      <table>
        <tr><td>1 dot</td><td>2 dots</td><td>3 dots</td></tr>
        <tr><td><span><img src={dot1} /></span></td><td><span><img src={dot2} /></span></td><td><span><img src={dot3} /></span></td></tr>
        <tr><td>4 dots</td><td>5 dots</td><td>6 dots</td></tr>
        <tr><td><span><img src={dot4} /></span></td><td><span><img src={dot5} /></span></td><td><span><img src={dot6} /></span></td></tr>
        <tr><td>7 dots</td><td>8 dots</td><td>9 dots</td></tr>
        <tr><td><span><img src={dot7} /></span></td><td><span><img src={dot8} /></span></td><td><span><img src={dot9} /></span></td></tr>
      </table>
      <p><br/>Bamboo</p>
      <p>(can make runs or 3 of a kind)</p>
      <table>
        <tr><td>1 bamboo</td><td>2 bamboos</td><td>3 bamboos</td></tr>
        <tr><td><span><img src={bamboo1} /></span></td><td><span><img src={bamboo2} /></span></td><td><span><img src={bamboo3} /></span></td></tr>
        <tr><td>4 bamboos</td><td>5 bamboos</td><td>6 bamboos</td></tr>
        <tr><td><span><img src={bamboo4} /></span></td><td><span><img src={bamboo5} /></span></td><td><span><img src={bamboo6} /></span></td></tr>
        <tr><td>7 bamboos</td><td>8 bamboos</td><td>9 bamboos</td></tr>
        <tr><td><span><img src={bamboo7} /></span></td><td><span><img src={bamboo8} /></span></td><td><span><img src={bamboo9} /></span></td></tr>
      </table>
      <p><br/>Thousands</p>
      <p>(can make runs or 3 of a kind)</p>
      <table>
        <tr><td>1 thousand</td><td>2 thousands</td><td>3 thousands</td></tr>
        <tr><td><span><img src={thousand1} /></span></td><td><span><img src={thousand2} /></span></td><td><span><img src={thousand3} /></span></td></tr>
        <tr><td>4 thousands</td><td>5 thousands</td><td>6 thousands</td></tr>
        <tr><td><span><img src={thousand4} /></span></td><td><span><img src={thousand5} /></span></td><td><span><img src={thousand6} /></span></td></tr>
        <tr><td>7 thousands</td><td>8 thousands</td><td>9 thousands</td></tr>
        <tr><td><span><img src={thousand7} /></span></td><td><span><img src={thousand8} /></span></td><td><span><img src={thousand9} /></span></td></tr>
      </table>
      <p><br/>Winds</p>
      <p>(can only make 3 of a kind)</p>
      <table>
        <tr><td>east</td><td>south</td><td>west</td><td>north</td></tr>
        <tr><td><span><img src={wind1} /></span></td><td><span><img src={wind2} /></span></td><td><span><img src={wind3} /></span></td><td><span><img src={wind4} /></span></td></tr>        
      </table>
      <p><br/>Dragons</p>
      <p>(can only make 3 of a kind)</p>
      <table>
        <tr><td>zhong</td><td>fa</td><td>oblong</td></tr>
        <tr><td><span><img src={dragon1} /></span></td><td><span><img src={dragon2} /></span></td><td><span><img src={dragon3} /></span></td></tr>        
      </table>
      <p><br/>Flowers</p>
      <p>(discard and take a tile from the other side)</p>
      <table>
        <tr><td>plum</td><td>orchid</td><td>chrysanthemum</td><td>bamboo</td></tr>
        <tr><td><span><img src={flower1} /></span></td><td><span><img src={flower2} /></span></td><td><span><img src={flower3} /></span></td><td><span><img src={flower4} /></span></td></tr>        
      </table>
      <p><br/>Seasons</p>
      <p>(same as flowers)</p>
      <table>
        <tr><td>spring</td><td>summer</td><td>fall</td><td>winter</td></tr>
        <tr><td><span><img src={season1} /></span></td><td><span><img src={season2} /></span></td><td><span><img src={season3} /></span></td><td><span><img src={season4} /></span></td></tr>        
      </table>
    </div>
  )
};

export default Cheatsheet;
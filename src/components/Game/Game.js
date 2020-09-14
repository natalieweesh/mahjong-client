import React, { useState, useEffect, useRef } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import Draggable from 'draggable';
import { tiles } from './tiles';
import dice1 from '../../dice/dice1.png';
import dice2 from '../../dice/dice2.png';
import dice3 from '../../dice/dice3.png';
import dice4 from '../../dice/dice4.png';
import dice5 from '../../dice/dice5.png';
import dice6 from '../../dice/dice6.png';
import thousand1 from '../../images/thousand1.png';
import thousand2 from '../../images/thousand2.png';
import thousand3 from '../../images/thousand3.png';
import thousand4 from '../../images/thousand4.png';
import thousand5 from '../../images/thousand5.png';
import thousand6 from '../../images/thousand6.png';
import thousand7 from '../../images/thousand7.png';
import thousand8 from '../../images/thousand8.png';
import thousand9 from '../../images/thousand9.png';
import dragon1 from '../../images/dragon1.png';
import dragon2 from '../../images/dragon2.png';
import wind1 from '../../images/wind1.png';
import wind2 from '../../images/wind2.png';
import wind3 from '../../images/wind3.png';
import wind4 from '../../images/wind4.png';
import Rules from '../Rules/Rules';
import Cheatsheet from '../Cheatsheet/Cheatsheet';
import TextContainer from '../TextContainer/TextContainer';
import './Game.css';

let socket;

const Game = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [prevmessages, setPrevMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [currentGame, setCurrentGame] = useState([]);
  const [newRound, setNewRound] = useState(false);
  const [finishedGame, setFinishedGame] = useState(false);
  const [poop, setPoop] = useState(false);
  const [cards, setCards] = useState(tiles["tiles"]);
  const draggables = useRef([]);
  const [modal, setModal] = useState('');

  // TODO: change this for prod / dev
  // const ENDPOINT = 'localhost:5000';
  const ENDPOINT = 'https://mahjong-app-2.herokuapp.com/';


  const setTileClass = (x, y, user, tile, animate) => {
    let className;
    let tileId = tile.element.id;
    if (x > (360 - 100) && x < (1340 + 100) && y > (480-100) && y < (1160 + 100) && user) {
      console.log("in no mans land", x, y, user)
      className = 'item';
    } else if (user?.orderIndex === 0 && x < 1340 && x > 360 && y > 120 && y < (480-100)) {
      console.log("in player 1 zone")
      className = 'item player-0-private';
    } else if (user?.orderIndex === 1 && x > 0 && x < (360-100) && y > 480 && y < 1160) {
      console.log("in player 2 zone")
      className = 'item player-1-private';
    } else if (user?.orderIndex === 2 && x > (1340+100) && y > 480 && y < 1160) {
      className = 'item player-2-private';
      console.log('in player 3 zone')
    } else if (user?.orderIndex === 3 && x > 360 && x < 1340 && y > (1160-100)) {
      className = 'item player-3-private';
      console.log('in player 4 zone')
    } else {
      if ((x >= 1225 && x <= 1304 && y >= 461 && y <= 1190) || (x >= 405 && x <= 479 && y >= 460 && y <= 1180)) {
        className = 'item poop sideways';
      } else {
        className = 'item poop';
      }      
    }
    
    if (animate) {
      let oldClassName = className;
      document.getElementById(tileId).className = className + ' flash';
      const animation = setTimeout(() => {
        document.getElementById(tileId).className = oldClassName;
        clearTimeout(animation);
      }, 750)
    } else {
      document.getElementById(tileId).className = className;
    }
  }

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setName(name.trim().toLowerCase());
    setRoom(room.trim().toLowerCase());

    socket.emit('join', { name, room }, ((e) => {
      if (e) {
        window.location.href='/';
        alert(e)
      }
    }));

    return () => {
      socket.emit('disconnect');

      socket.off();
    }

  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.off('roomData').on('roomData', ({ users }) => {
      console.log('Room Data', users)
      setUsers(users);
    })
    socket.off('gameStatus').on('gameStatus', ({ game }) => {
      console.log('Game Status', game);
      if (game && game.cards.length > 0) {
        setCards(game.cards);
        console.log("GAME CARDS?", game.card)
        if (!game.cards[0]["x"]) { // set all the positions
          // top, first pass
          let startX = 480;
          let startY = 470;
          for (let i=0; i < 18; i++) {
            draggables.current[i].set(startX, startY);
            let id = draggables.current[i].element.id;
            socket.emit('moveTile', {el: id, x: startX, y: startY, settingUp: true}, () => {
              console.log('setting up tile moved', id, startX, startY);
            });
            startX += 40;
          }
          // right, first pass
          startX = 1245;
          startY = 461;
          for (let i=18; i < 36; i++) {
            draggables.current[i].set(startX, startY);
            let id = draggables.current[i].element.id;
            socket.emit('moveTile', {el: id, x: startX, y: startY, settingUp: true}, () => {});
            startY += 40;
          }
          // left, first pass
          startX = 425;
          startY = 460;
          for (let i=36; i < 54; i++) {
            draggables.current[i].set(startX, startY);
            let id = draggables.current[i].element.id;
            socket.emit('moveTile', {el: id, x: startX, y: startY, settingUp: true}, () => {});
            startY += 40;
          }
          // bottom, first pass
          startX = 480;
          startY = 1110;
           for (let i=54; i < 72; i++) {
            draggables.current[i].set(startX, startY);
            let id = draggables.current[i].element.id;
            socket.emit('moveTile', {el: id, x: startX, y: startY, settingUp: true}, () => {});
            startX += 40;
          }

          // top, second pass
          startX = 480;
          startY = 480;
          for (let i=72; i < 90; i++) {
            draggables.current[i].set(startX, startY);
            let id = draggables.current[i].element.id;
            socket.emit('moveTile', {el: id, x: startX, y: startY, settingUp: true}, () => {});
            startX += 40;
          }
          // right, second pass
          startX = 1225;
          startY = 461;
          for (let i=90; i < 108; i++) {
            draggables.current[i].set(startX, startY);
            let id = draggables.current[i].element.id;
            socket.emit('moveTile', {el: id, x: startX, y: startY, settingUp: true}, () => {});
            startY += 40;
          }
          // left, second pass
          startX = 405;
          startY = 460;;
          for (let i=108; i < 126; i++) {
            draggables.current[i].set(startX, startY);
            let id = draggables.current[i].element.id;
            socket.emit('moveTile', {el: id, x: startX, y: startY, settingUp: true}, () => {});
            startY += 40;
          }
          // bottom, second pass
          startX = 480;
          startY = 1130;
          for (let i=126; i < 144; i++) {
            draggables.current[i].set(startX, startY);
            let id = draggables.current[i].element.id;
            socket.emit('moveTile', {el: id, x: startX, y: startY, settingUp: true}, () => {});
            startX += 40;
          }
        } else {
          console.log('setting locations from memory')
          game.cards.forEach((card) => {
            let tile = draggables.current.find((d) => d.element.id === card.id);
            tile.set(card.x, card.y);
            setTileClass(card.x, card.y, card.user, tile, false, false);
          })
        }
      }

      if (currentGame.length === 0 && !!game) {
        setCurrentGame(game);
        if (newRound !== game.newRound) {
          setNewRound(game.newRound)
        }
        setFinishedGame(game.finishedGame)
      }
    })
    socket.off('gameRestarted').on('gameRestarted', ({ users }) => {
      setFinishedGame(false)
      setNewRound(false)
      setUsers(users);
      setCurrentGame([])
    })
    socket.off('tileMoved').on('tileMoved', ({el, x, y, user, settingUp}) => {
      console.log('received tilemoved', el, x, y, user);
      const tile = draggables.current.filter((e) => e.element.id === el)[0];
      setTileClass(x, y, user, tile, true);
      tile.set(x, y);
    })

    document.querySelectorAll('.item').forEach((el) => {
      draggables.current.push(new Draggable(el, {onDragEnd: (el, x, y, event) => {
        socket.emit('moveTile', {el: el.id, x, y, settingUp: false}, () => {
          console.log('tile moved on Drag End!', el.id, x, y);
        })
      }}));
    })
    // scatter the tiles!
    draggables.current.forEach((d) => {
      const randX = 360 + Math.floor(Math.random() * 980);
      const randY = 480 + Math.floor(Math.random() * 680);
      d.set(randX, randY);
    })
    console.log('dragagbles are now', draggables.current)
  }, [])

  useEffect(() => {
    socket.off('disconnect').on('disconnect', () => {
      // if(!alert('ack! you have been disconnected!')){window.location.reload();}
      // if(!alert('ack youve been disconnected')){setPoop(true)}
      setPoop(true);
      const reconnectFrontEnd = () => {
        const { name, room } = queryString.parse(location.search);
        socket.connect()
        socket.emit('frontEndReconnect', {name, room}, () => {
        })
        socket.emit('join', { name, room }, ((e) => {
          if (e) {
            window.location.href='/';
            alert(e)
          }
        }));
        document.removeEventListener('click', reconnectFrontEnd)
        document.removeEventListener('visibilitychange', reconnectFrontEndVisible);
      }
      document.addEventListener('click', reconnectFrontEnd)

      const reconnectFrontEndVisible = () => {
        const { name, room } = queryString.parse(location.search);
        if (document.visibilityState && document.visibilityState === 'visible') {
          socket.connect()
          socket.emit('frontEndReconnect', {name, room}, () => {
          })
          socket.emit('join', { name, room }, ((e) => {
            if (e) {
              window.location.href='/';
              alert(e)
            }
            document.removeEventListener('visibilitychange', reconnectFrontEndVisible);
          })); 
          document.removeEventListener('visibilitychange', reconnectFrontEndVisible);
          document.removeEventListener('click', reconnectFrontEnd)
        }
      }
      document.addEventListener('visibilitychange', reconnectFrontEndVisible)
    })
  })

  useEffect(() => {
    socket.off('message').on('message', ({user, message, messages}) => {
      if (message && prevmessages) {
        setPrevMessages([...prevmessages, {user, text: message}]);
      } else if (message && messages) {
        setPrevMessages([...messages, {user, text: message}]);
      }
    })
  }, [prevmessages])

  useEffect(() => {
    socket.off('startGame').on('startGame', ({ users }) => {
      socket.emit('initiateGame', {cards: tiles["tiles"]}, () => {
        console.log("INITIATED GAME")
        socket.emit('fetchGame', () => {
        })
      })
    })
  }, [currentGame, setCurrentGame])

  const restartGame = (event) => {
    event.preventDefault();
    socket.emit('restartGame', () => {
      socket.emit('fetchGame', () => {
      })
    })
  }

  const getDicePic = (num) => {
    switch(num) {
      case 1:
        return dice1;
      case 2:
        return dice2;
      case 3:
        return dice3;
      case 4:
        return dice4;
      case 5:
        return dice5;
      case 6:
        return dice6;
    }
  }

  const updateUserStatus = (event) => {
    event.preventDefault();

    socket.emit('setReadyToPlay', () => {
    })
  }

  const userRestart = (event) => {
    event.preventDefault();

    socket.emit('setReadyToRestart', {cards: tiles["tiles"]}, () => {
    })
  }

  const user = users.find((user) => user.name === name);
  console.log("USER", user);
  console.log('current game', currentGame)
  const myTurn = currentGame.currentRound === user?.orderIndex;
  console.log('my turn?', myTurn)
  return (
    <div className={`player-${user?.orderIndex} outerContainer ${currentGame.finishedGame && 'revealAll'}`}>
      <div className="rightTopSquare instructions">
        <p>🤗 Learn Chinese! 🤗</p>
        <table>
          <tr><td>1 wàn</td><td>2 wàn</td><td>3 wàn</td><td>4 wàn</td></tr>
          <tr><td><span><img src={thousand1} /></span></td><td><span><img src={thousand2} /></span></td><td><span><img src={thousand3} /></span></td><td><span><img src={thousand4} /></span></td></tr>
          <tr><td>5 wàn</td><td>6 wàn</td><td>7 wàn</td><td>8 wàn</td></tr>
          <tr><td><span><img src={thousand5} /></span></td><td><span><img src={thousand6} /></span></td><td><span><img src={thousand7} /></span></td><td><span><img src={thousand8} /></span></td></tr>
          <tr><td>9 wàn</td><td>dōng (east)</td><td>nán (south)</td><td>xī (west)</td></tr>
          <tr><td><span><img src={thousand9} /></span></td><td><span><img src={wind1} /></span></td><td><span><img src={wind2} /></span></td><td><span><img src={wind3} /></span></td></tr>
          <tr><td>běi (north)</td><td>zhōng</td><td>fā</td></tr>
          <tr><td><span><img src={wind4} /></span></td><td><span><img src={dragon1} /></span></td><td><span><img src={dragon2} /></span></td></tr>
        </table>
      </div>
      <div className="sideContainer">
        {poop ? <div className="modal"><div className="attentionModal">Hey! Pay attention to the game!<button className="button" onClick={() => {setPoop(false)}}>Ok</button></div></div> : null}
        {(currentGame.length === 0 || finishedGame) && <TextContainer users={users} user={user} game={currentGame} finishedGame={finishedGame} />}
        {currentGame.length === 0 && users.length > 1 && <button className="startButton" disabled={user?.readyToPlay} onClick={updateUserStatus}>{user?.readyToPlay ? 'Waiting for other players' : 'Ready to play!'}</button>}
        {finishedGame && <div><button className="startButton" disabled={user?.readyToRestart} onClick={userRestart}>{user?.readyToRestart ? 'Waiting for other players' : 'Play again!'}</button></div>}

        {currentGame.length !== 0 && (
          <>
            {!finishedGame && <p className="tips"><span>Place your tile on the dark green to hide it from others.</span><br/><span className='light'>Place your tile on the light green to reveal it to others.</span></p>}
            <div className="diceContainer">
              <span>Click the dice to roll 'em:</span>
              <button id='rollDice' className='dice' onClick={() => {
                document.getElementById('rollDice').className = 'dice shrink';
                setTimeout(() => {
                  document.getElementById('rollDice').className = 'dice';
                }, 1000)
                socket.emit('rollDice', () => {})
              }}>{currentGame.dice && <><img src={getDicePic(currentGame.dice[0])}/><img src={getDicePic(currentGame.dice[1])}/></>}</button>
          </div>
          {!finishedGame && <button className="endGame" onClick={() => {
            const endIt = window.confirm('Are you sure you want to end the game?');
            if (endIt) {
              socket.emit('showAllTiles', () => {
                console.log('now show all tiles')
              })
            }
          }}>Click here to end the game and reveal all the tiles!</button>}
          </>
        )}
        <button className="rulesButton" onClick={() => setModal('rules')}>Check the rule book</button>
        <button className="cheatsheetButton" onClick={() => setModal('cheatsheet')}>Cheatsheet</button>
        {modal && <div className="modal">
          <button className="button closeModal" onClick={(e) => {
            e.preventDefault();
            setModal('');
          }}>X</button>
          {modal === 'rules' ? <Rules /> : <Cheatsheet />}
          
        </div>}
      </div>
      <div className="mah-jong-board">
      <div className="player-space player-0">
        {users.length > 0 && <p>Player one: {users[0].name}</p>}
      </div>
      <div className="second-row">
      <div className="player-space player-1">
        {users.length > 1 && <p>Player two: {users[1].name}</p>}
      </div>
      <div className="square dropzone">
        {cards.map((t) => <p className="item poop" id={t.id}><img src={t.img} alt={t.id}/>{t.id}</p>)}
      </div>
      <div className="player-space player-2">
        {users.length > 2 && <p>Player three: {users[2].name}</p>}
      </div>
      </div>
      <div className="player-space player-3">
        {users.length > 3 && <p>Player four: {users[3].name}</p>}
      </div>
      </div>
    </div>
  )   
}

export default Game;
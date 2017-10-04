import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store.js';
import { chats } from './reducers/chatReducer.js';
import Board from './components/Board.jsx';
import { createBoard, setPiece } from './actions.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    createBoard();
    // store.dispatch({ type: 'createBoard' });
  }
  componentDidMount() {
    // store.dispatch({ type: 'randomPieces' });
    setPiece('p2', ['0,0', '0,1', '0,2']);
    // store.dispatch({
    //   type: 'setPiece', 
    //   payload: { 
    //     player: 'p2',
    //     piece: ['0,0', '0,1', '0,2'],
    //   }
    // });
    store.dispatch({
      type: 'setChat',
      payload: {
        player: 'p1',
        text: 'hi'
      }
    });
  }
  render() {
    return (
      <div className="container">
        <h3>BattleBread boards</h3>
        <div className="container-fluid">
          <Provider store={store}>
            <Board />
          </Provider>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserHistory } from 'react-history';
import Scoreboard from './ScoreboardApp/containers/Scoreboard';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import PlayerReducer from './ScoreboardApp/reducers/PlayerReducers';

const store = createStore(
  PlayerReducer,
  window.devToolsExtension && window.devToolsExtension()
);

ReactDOM.render(
  <Provider store={store}>
      <Scoreboard history={BrowserHistory}/>
  </Provider>,
  document.getElementById('container')
);


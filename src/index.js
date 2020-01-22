import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { StateProvider } from './state'
import App from './app';
import './index.css';

export function Index() {
  let initialState = {
    user: ''
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'user':
        return {
          ...state,
          user: action.user
        }
      default:
        return state
    }
  }

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  )
}

ReactDOM.render(<Index />, document.getElementById('root'));
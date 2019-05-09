import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import Store from './store'
import IssueForm from './container/GuessContainer'
function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <IssueForm />
      </Provider>

    </div>
  );
}

export default App;

import React from 'react';
import { FunctionComponent } from './components/FunctionComponent';
import './App.css'
import { ClassComponent } from './components/ClassComponent';

function App() {
  return (
    <>
      <FunctionComponent name="Mary" />
      <br/>
      <ClassComponent />
    </>
  );
}

export default App;

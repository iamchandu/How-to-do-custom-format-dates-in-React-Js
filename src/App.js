import React from 'react';
import Dateformat from './date-format'

function App() {
  return (
    <div className="App">
      <Dateformat input='Y-m-d' output='D M Y' data='2020-10-25' outputDelemeter = ' '/>
      <Dateformat input='Y-m-d' output='d-m-Y' data='2020-10-01' outputDelemeter = '-'/>
      <Dateformat input='Y-m-d' output='d/m/y' data='2020-10-01' outputDelemeter = '/'/>
      <Dateformat input='d-m-Y' output='M D Y' data='09-10-2020' outputDelemeter = ' '/>
      <Dateformat input='M-d-Y' output='Y-m-d' data='October-09-2020' outputDelemeter = '-'/>
      
    </div>
  );
}

export default App;

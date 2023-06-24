import { useState } from 'react';
import './App.css';
import { stringify } from 'querystring';
import { UseEffect } from './Components/UseEffect';

function App() {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  return (
    <div>
      <UseEffect />
    </div>
  );

}

export default App;

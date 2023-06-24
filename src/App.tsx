import './App.css';
import { useState } from 'react';
import { Layout } from './Components/Common/LayOut/LayOut';
import { Header } from './Components/Cells/Header/Header';
import { MainPage } from './Components/Pages/MainPage/MainPage';

function App() {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  return (
    <div>
      <Layout.Header>
        <Header />
      </Layout.Header>

      <Layout.Body>
        <MainPage />
      </Layout.Body>

      <Layout.Footer>
      </Layout.Footer>
    </div>
  );

}

export default App;

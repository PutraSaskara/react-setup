import logo from './logo.svg';
import './App.css';
import './MyButton'
import MyButton from './MyButton';

function App() {
  return (
    <div className="App">
      <div style={{display: 'flex'}}>
        <img style={{
          display: 'flex', marginLeft: '40px', marginTop: '20px'
        }} src={process.env.PUBLIC_URL + 'logo-koding-akademi.jpg'}/>
        <div>
            <MyButton/>
        </div>
      </div>
      <h1 style={{
        display: 'flex', marginLeft: '40px', marginTop: '50px'
      }}>Selamat Datang di React App Pertama Saya</h1>
      <h1 style={{
        display: 'flex', marginLeft: '40px', fontStyle: 'italic', color: 'blue', marginTop: '50px'
      }}>Copyright 2023</h1>
      
    </div>
  );
}

export default App;

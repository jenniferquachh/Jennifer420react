import happyface from '../images/happyface.png';

export default function Home() {
  return (
    <div className="App">
      <header className="headerpg">
        <h1> Welcome to my website!</h1>
        <img src={happyface} className="App-logo1" alt="logo" />
        
      </header>
    </div>
  );
}
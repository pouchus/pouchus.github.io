import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" style={{maxWidth: '300px'}} />

        <p style={{ width: '50%'}}>
          <br/>
          <b>Currently in Closed Beta.</b><br/><br/>
          If sending international micropayments by the thousands is a pain point for you, drop us a note at <b>hello@pouch.us</b>.
        </p>

        <p style={{ width: '50%'}}>
        Pouch.us is a US-based payment processor focused on improving the efficiency of international micropayments by utilizing the emerging global payment standard: "The Lightning Network".
        </p>

      </header>
      <footer style={{backgroundColor: '#EEF', minHeight: '320px', padding: '48px', boxSizing: 'border-box', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      &copy;2022 Pouch PH Inc
      <br/><br/>
      hello@pouch.us
      </footer>
    </div>
  );
}

export default App;

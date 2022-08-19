import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', borderRadius: '20px', backgroundColor: 'rgba(0,0,0,.75)', width: '50%', padding: '40px' }}>
          <p>
          
            <b>Pouch.US Payouts</b>
            <br/><br/>
            ⚡<br/><br/>
            Currently in Closed Beta.
            <br/><br/>
            If sending international micropayments by the thousands is a pain point for you, drop us a note at <b>hello@pouch.us</b>.
          </p>

          <p>
          Pouch.us is a US-based payment processor focused on improving the efficiency of international micropayments by utilizing the emerging global payment standard: "The Lightning Network".
          </p>
        </div>

      </header>
      <footer style={{backgroundColor: '#0F212E', color: "#FAFAFA", minHeight: '320px', padding: '48px', boxSizing: 'border-box', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', textAlign: 'center'}}>
      
      <div>
        <b>hello@pouch.us</b>
      </div>
      <br/><br/>
      <div>
        &copy;2022 Pouch PH Inc
      </div>
      </footer>
    </div>
  );
}

export default App;

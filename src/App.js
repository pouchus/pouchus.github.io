import logo from './kilat-fancy.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" style={{maxWidth: '300px'}} />
        <h1>
          Kilat Payments, Inc.
        </h1>
        <p style={{ width: '50%'}}>
          Kilat Payments, Inc. was founded in 2022 in Makati, Philippines. The company's mission is to improve efficiency and interoperability of payments systems within the Philippines and worldwide by utilizing the emerging Lightning Network protocol.
        </p>
      </header>
      <footer style={{backgroundColor: '#DDD', minHeight: '320px', padding: '48px', boxSizing: 'border-box', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      &copy;2022 Kilat Payments, Inc.
      <br/><br/>
      hello@kilat.ph
      </footer>
    </div>
  );
}

export default App;

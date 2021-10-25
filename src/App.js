import logo from './logo.svg';
import './App.css';
import Membercard from './components/member';

function App() {
  return (
    <div className="App">
      <div className="main-jumbotron text-center">

        <h1 className="text" style={{ fontSize: "10rem" }}>BRUH MOMENT</h1>
        <h1 className="text">The Best Catan Team Ever!</h1>
      </div>
      <div class="container d-flex justify-content-center">
        <div class="row">
          {["240185945058443264",
            "395035325824630786",
            "376901199225552898",
            "589195641574653962"
          ].map(d => (
            <Membercard id={d} />
          ))}
        </div>
      </div>
      <div class="container d-flex justify-content-center" style={{ paddingTop: "3rem" }}>
        <div>
          <h1 className="text">Our Competitors</h1>
          <img src="https://shanara.nyc3.digitaloceanspaces.com/376901199225552898/XBisfTTixF16mstXimBcmEj0e.png" alt="opponents" />
        </div>
      </div>
    </div>
  );
}

export default App;

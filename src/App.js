import DrumMachine from "./DrumMachine";

function App() {
  return (
    <div className="container">
    <div className='row'>
      <div className='col-6'>
        <DrumMachine/>
      </div>
      <div className="col-6">
                <div>Power toggle</div>
                <div>Display</div>
                <div>Volume slider</div>
                <div>Bank toggle</div>
            </div>
    </div>
    </div>
  );
}

export default App;

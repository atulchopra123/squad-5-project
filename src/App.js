import './App.css';
import RecoveryTimes from "./RecoveryTimes";
import Deployment from "./Deployments";

function App() {
  return (
    <div className="row">
      <div className="col">
        {Deployment()}
        {/*LeadTimes*/}
      </div>
  <div className="col">
        {RecoveryTimes()}

  </div>
  </div>
  );
}

export default App;

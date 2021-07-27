import Deployment from "./Deployments";
//import LeadTimes from "./LeadTimes";
//import RecoveryTimes from "./RecoveryTimes";

function App() {
  return (
  <div className="row">
      <div className="col">
        {Deployment()}
        LeadTimes
        {/*LeadTimes*/}
      </div>
  <div className="col">
        RecoveryTimes
        {/*RecoveryTimes*/}

  </div>
</div>
  );
}

export default App;

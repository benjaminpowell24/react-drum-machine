import DrumKey from "./DrumPad";
import bank from "./bank";

function DrumMachine (){
    return (
        <div className="d-flex">
                {bank.map(key => <div className="p-1"><DrumKey clipId={key.id} clip={key.url} keyTrigger={key.keyTrigger} keyCode={key.keyCode}/></div>)}
        </div>
    )
}

export default DrumMachine;
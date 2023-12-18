function DrumKey({clipId, clip, keyTrigger, keyCode}){
    function playSound() {
      const sound = document.getElementById(keyTrigger);
      sound.currentTime = 0;
      sound.play();
    }
  
    return (
      <button id={clipId} className="drum-pad p-5 rounded" onClick={playSound}>
        <audio
          className="clip"
          id={keyTrigger}
          src={clip}
        />
        {keyTrigger}
      </button>
    );
  };
  
  
  
export default DrumKey;
import { useState } from 'react'
import './App.css'

function App() {
  const [moodList, setMoodList] = useState([]);

  function addMood(newEmoji) {
    console.log('emoji is clicked');
  }

return (
  <main>
    <div>
      <button onClick={addMood}>😴</button>
      <button onClick={addMood}>🤩</button>
      <button onClick={addMood}>🫨</button>
    </div>

    <h3>Mood Log</h3>
    <ul>
    {moodList} 
    </ul>
  </main>
)

}

export default App

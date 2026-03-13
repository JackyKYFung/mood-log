import { useState } from 'react'
import './App.css'

function App() {
  const [moodList, setMoodList] = useState([]);

  function addMood(newEmoji) {
    const time = new Date().toLocaleTimeString();
    const newMood = `${newEmoji} at ${time}`;

    setMoodList(prevMoods => [
      ...prevMoods,
      newMood
    ]);
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
      {moodList.map((mood, index) => (
        <li key={index}>{mood}</li>
      ))} 
    </ul>
  </main>
)

}

export default App

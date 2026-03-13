import { useState } from 'react'
import './App.css'

function App() {
  const [moodList, setMoodList] = useState<any[]>([]);

  function addMood(e) {
    const newEmoji = e.target.innerText;
    const time = new Date().toLocaleTimeString();
    const timeOfDay = getTimeOfDay();
    const newMood = `I feel ${newEmoji} at ${timeOfDay} (${time})`;

    setMoodList(prevMoods => [
      ...prevMoods,
      newMood
    ]);
  }

  function clearMoods(){
    setMoodList([]);
  }

  function getTimeOfDay(){
    const hour = new Date().getHours();

    return hour < 11 ? "Morning" 
         : hour < 14 ? "Noon"
         : hour < 18 ? "Afternoon"
         : "Evening";
  }

return (
  <main>
    <div>
      <button onClick={addMood}>😴</button>
      <button onClick={addMood}>🤩</button>
      <button onClick={addMood}>🫨</button>
      <button onClick={clearMoods}>🗑️</button>
    </div>

    <h3>Mood Log</h3>
    <ul>
      {moodList.map((mood, index) => (
        <li key={index}>{mood}</li>
      ))} 
    </ul>
  </main>
);

}

export default App

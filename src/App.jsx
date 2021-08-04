import { useEffect, useState } from 'react';
import './App.scss';

function App() {
  const [boxes, setBoxes] = useState([{}]);

  useEffect(() => {
    createBoxes();

    // eslint-disable-next-line
  }, []);

  const createBoxes = () => {
    const count = [];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        count.push({ j, i });
      }
    }
    setBoxes(count);
  };

  return (
    <div className="App">
      <div className="flex-container">
        <button className="magic">Magic 🎩</button>
        <div className="boxes">
          {boxes.length > 0 &&
            boxes.map((box, index) => (
              <div
                key={index}
                className="box"
                style={{
                  backgroundPosition: `${-box.j * 125}px ${-box.i * 125}px`,
                }}
              ></div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;

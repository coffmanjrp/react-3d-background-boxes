import { useEffect, useState } from 'react';
import './App.scss';

function App() {
  const [isBig, setIsBig] = useState(false);
  const [boxes, setBoxes] = useState([{}]);

  useEffect(() => {
    createBoxes();

    // eslint-disable-next-line
  }, []);

  const createBoxes = () => {
    const count = [];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        count.push({ x: j, y: i });
      }
    }
    setBoxes(count);
  };

  return (
    <div className="App">
      <div className="flex-container">
        <button className="magic" onClick={() => setIsBig((isBig) => !isBig)}>
          Magic 🎩
        </button>
        <div
          className={`boxes${isBig ? ' big' : ''}`}
          onMouseOver={() => setIsBig(true)}
          onMouseLeave={() => setIsBig(false)}
        >
          {boxes.length > 0 &&
            boxes.map(({ x, y }, index) => (
              <div
                key={index}
                className="box"
                style={{
                  backgroundPosition: `${-x * 125}px ${-y * 125}px`,
                }}
              ></div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;

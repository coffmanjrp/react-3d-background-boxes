import { useEffect, useState } from 'react';
import './App.scss';

function App() {
  const [isBig, setIsBig] = useState(false);
  const [boxes, setBoxes] = useState([{}]);
  const sizeX = 125;
  const sizeY = 125;

  useEffect(() => {
    createBoxes();

    // eslint-disable-next-line
  }, []);

  const createBoxes = () => {
    const position = [];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        position.push({ x: j, y: i });
      }
    }
    setBoxes(position);
  };

  return (
    <div className="App">
      <div className="flex-container">
        <button className="magic" onClick={() => setIsBig((value) => !value)}>
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
                  backgroundPosition: `${-x * sizeX}px ${-y * sizeY}px`,
                }}
              ></div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;

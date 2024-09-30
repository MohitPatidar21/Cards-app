import React, {useState, useEffect} from 'react';
import Card from './components/Card';
import './App.css';

const App = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentSlide, SetCurrentSlide] = useState(1);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => {
      const limitedData = data.slice(0,6);
      setCards(limitedData);
      setLoading(false);
    })
    .catch((error) => {
      console.error('Error fetching data:',error);
      setLoading(false);
    });
  }, []);

  const trimParagraph = (text, wordLimit) => {
    const words = text.split(" ");
    return words.length > wordLimit 
    ? words.slice(0, wordLimit).join(" ") + '...'
    : text;
  }

  const removeCard = (id) => {
    setCards(cards.filter(card => card.id !== id));
  };

  const nextSlide = () => {
    if (currentSlide < 2){
      SetCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 1){
      SetCurrentSlide(currentSlide - 1);
    }
  };

  const startIndex = (currentSlide - 1) * 6;
  const currentCards = cards.slice(startIndex, startIndex + 6);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={styles.container}>
      {/* <h1>Card App</h1> */}
      <div style={styles.cardList}>
        {currentCards.map(card => (
          <Card
          key={card.id}
          title={trimParagraph(card.title, 5)}
          paragraph={trimParagraph(card.body, 5)}
          image={`https://via.placeholder.com/150/${Math.floor(Math.random() * 1000)}`}
          onRemove={() => removeCard(card.id)}
          />
        ))}
      </div>
      <div style={styles.navigation}>
        {currentSlide > 1 && (
          <button onClick={prevSlide} style={styles.button}>Previous</button>
        )}
        {currentSlide < 2 && (
          <button onClick={nextSlide} style={styles.button}>Next</button>
        )}
      </div>
    </div>
  );
};

const styles = {
  container:{
    textAlign: 'center',
    padding: '20px',
    background: '#dee0e3'
  },
  cardList:{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }
};

export default App;

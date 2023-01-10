import React from 'react';
import EmojiButton from './EmojiButton';
import Card from './Card';
import Header from './Header';

function App() {
    return (
      <div>
        <Header />
        <main>
          <Card title="Welcome to PetLand!">
            <em>Find your dream pet</em>
          </Card>
          <Card title="What pets would you like to see?">
            <div>
              <EmojiButton emoji="😸" label="Cats" />
              <EmojiButton emoji="🐕" label="Dogs" />
            </div>
          </Card>
        </main>
      </div>
    );
  }

export default App
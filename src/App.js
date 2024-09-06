import React, { useState } from 'react';
import Tabs from './components/Tabs';
import Gallery from './components/Gallery';
import './styles/App.css';

function App() {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="container">
      <div className="left-half"></div>
      <div className="right-half">
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <Gallery />
      </div>
    </div>
  );
}

export default App;

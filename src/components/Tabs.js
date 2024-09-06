import React, { useState } from 'react';
import "../styles/Tabs.css";
import  icon1 from "../styles/logo1.png";
import  icon2 from "../styles/logo2.png";
import  bar from "../styles/bar.png";



function Tabs() {
  const [activeTab, setActiveTab] = useState('about');

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return <p>Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.

        I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a....</p>;
      case 'experiences':
        return <p>Experiences content goes here.</p>;
      case 'recommended':
        return <p>Recommended content goes here.</p>;
      default:
        return null;
    }
  };

  return (
    <div className="tabs-container">
        <i class="material-icons">
        
        <img src={icon1} alt='Hi' height={20}/>
        
        </i> 
      
       
      <div className="tabs">
        <button
          className={activeTab === 'about' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('about')}

        >
        
          About Me
        </button>
        <button
          className={activeTab === 'experiences' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('experiences')}
        >
          Experiences
        </button>
        <button
          className={activeTab === 'recommended' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('recommended')}
        >
          Recommended
        </button>
      </div>

      {/* Tab content section */}
      <div className='icon2'>
      <img src={icon2} alt='Hi' height={20}/>
      </div>
   <div className='bar'>
      <img  src={bar} alt='Hi' height={80} />
      </div>
      <div className="tab-content">
        {renderContent()}
      </div>
    
    </div>
  );
}

export default Tabs;

import React, { useContext, useState } from 'react';
import Context from '../app/Context';
import Tutorial from "./Modals/Tutorial";
import Settings from './Modals/Settings';
import "./Header.css"

function Header() {

const {settingsRef} = useContext(Context);

  const [showTutorial, setShowTutorial] = useState(true);
  const [showSettings, setShowSettings] = useState(false);

  return (
    <header className="header">
        <div className="invisible-header"></div>
        <span>Nomele</span>
        <div className="container-header">
            <Tutorial showTutorial={showTutorial} setShowTutorial={setShowTutorial}></Tutorial>
            <button onClick={e => setShowTutorial(true)} tabIndex={-1}> 
                <i className="lni lni-question-circle"></i>
            </button>
            <Settings showSettings={showSettings} setShowSettings={setShowSettings}></Settings>
            <button ref={settingsRef} onClick={e => setShowSettings(true)} tabIndex={-1}>
                <i className="lni lni-cog"></i>
            </button>
        </div>
    </header>
  );
}

export default Header;
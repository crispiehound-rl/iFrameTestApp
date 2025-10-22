import { useState } from 'react'; // Uncomment when using iFrame version
import './App.css';

function App() {
  // URLs for easy switching between different links
  // const hubspotUrl = "https://app.hubspot.com/contacts/242733467/record/0-3/163831689925"
  const hubspotUrl1 = 'https://app-na3.hubspot.com/contacts/342409300/record/0-1/147182272479';
  // const revenuelensUrl = "https://www.revenuelens.ai/"

  // OPTION 1: Open in new tab (commented out)
  // const handleLinkClick = () => {
  //   // window.open(hubspotUrl, '_blank', 'noopener,noreferrer')
  //   window.open(hubspotUrl1, '_blank', 'noopener,noreferrer')
  //   // window.open(revenuelensUrl, '_blank', 'noopener,noreferrer') // Alternative URL
  // }

  // OPTION 2: iFrame functionality (currently active)
  const [showIframe, setShowIframe] = useState(false);

  const handleLinkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowIframe(true);
  };

  const handleCloseIframe = () => {
    setShowIframe(false);
  };

  return (
    <div className="app">
      {/* NEW TAB VERSION (commented out) */}
      {/* <button 
        onClick={handleLinkClick}
        className="iframe-link"
      >
        Click here to open link
      </button> */}

      {/* IFRAME VERSION (currently active) */}
      {!showIframe ? (
        <a href={hubspotUrl1} onClick={handleLinkClick} className="iframe-link">
          Click here to open iFrame
        </a>
      ) : (
        <div className="iframe-container">
          <div className="iframe-header">
            <h2>HubSpot Contact Record</h2>
            <button onClick={handleCloseIframe} className="close-button">
              ✕ Close
            </button>
          </div>
          <iframe
            src={hubspotUrl1}
            title="HubSpot Contact Record"
            className="iframe-content"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
}

export default App;

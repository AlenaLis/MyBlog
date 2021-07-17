import './App.scss';
import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./components/main";
function App() {
  return (

    <div className="App">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@500&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div className="wrapper">
          <div className="wrapper__header">
            <Header />
          </div>
          <div className="wrapper__main">
            <Main />
          </div>
          <div className="wrapper__footer">
            <Footer />
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;

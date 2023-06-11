import Button from "react-bootstrap/Button";

import './App.css';



function  TranslateButton(){
    // this will be used to translate from english to spanish and vise versa
    // toggle button preferred 
}

function NavBar (){
    return (
        <div className='navbar'>
            <a href='http://localhost:3000/#React'>Home </a>
            <a href='https://www.google.com'>Projects </a>
            <a href='https://www.google.com'>Contact </a>
            {/* <TranslateButton /> */}

        </div>
    )
}
function Hero () {
    const me = {
        name: 'Hernán Silva',
        email: 'hernan97silva@gmail.com',
        phone: '806-207-1894',   
    };
    return(
        <div className='heroContainer'>
            <div className='heroInfo'>
            <p><b>Hi</b> I'm <br/>
            <b>{me.name}</b></p>
            </div>
            <div className='heroImageContainer'>
                <img src='https://img.itch.zone/aW1hZ2UvMjY3MjkvMTA4MjE1LnBuZw==/315x250%23c/td1frL.png'
                alt='imagePlaceholder'
                className='heroImage'></img>
            </div>
        </div>
    );
}

function Badges (){
    return(
        <div className='badgeContainer'>
            <div className='badgeTitle'>
                <h3>Badges</h3>
            </div>
            <div className='badgeIcons'></div>
            {/* source for badages : <a href="https://icons8.com">Icons8</a> https://icons8.com/icon/set/logos/dusk */}
            <img width="64" height="64" src="https://img.icons8.com/dusk/64/html-5.png" alt="html-5"/>
            <img width="64" height="64" src="https://img.icons8.com/dusk/64/css3.png" alt="css3"/>
            <img width="64" height="64" src="https://img.icons8.com/dusk/64/javascript-logo.png" alt="javascript-logo"/>
            <img width="64" height="64" src="https://img.icons8.com/dusk/64/react.png" alt="react"/>
            <img width="64" height="64" src="https://img.icons8.com/ios/50/8D6C9F/angularjs.png" alt="angularjs"/>
            <img width="64" height="64" src="https://img.icons8.com/dusk/64/java-coffee-cup-logo.png" alt="java-coffee-cup-logo"/>
            <img width="64" height="64" src="https://img.icons8.com/dusk/64/python.png" alt="python"/>
            <img width="64" height="64" src="https://img.icons8.com/dusk/64/github.png" alt="github"/>
            
        </div>
    );
}
        
    

// this is a temp 404
function VersionOne() {
  //    const gooseImage = URL('https://cdn.drawception.com/drawings/1033588/fclJFJyAAg.png')
     return (
      <div className='heroContainer'>
              <div className='heroInfo'>
              <h1>Greetings!</h1><p>The chef will be out shortly with your meal
              </p>
              </div>
              <div className='heroImageContainer'>
                  <img src='https://cdn.drawception.com/drawings/1033588/fclJFJyAAg.png'
                  alt='imagePlaceholder'
                  className='heroImage'></img>
              </div>
          </div>
      );
  
  }
  

function App() {
  return (
    <div className="App">
        <header className='App-header'>
        {/* <NavBar /> */}
        </header>
      <body className="App-body">
      {/* <Hero />
      <Badges />
      <Button onClick={() => alert("Hello!")}>
         Say Hello
      </Button> */}

      <VersionOne />
      </body>
      
    </div>
  );
}

export default App;

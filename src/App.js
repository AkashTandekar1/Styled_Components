import { ThemeProvider } from 'styled-components';
import { createGlobalStyle } from 'styled-components';

import { Darkbutton, Styledbutton } from './Components/button';
import { Hbutton } from './Components/button';
import { FancyButton } from './Components/button';
import { SubmitButton } from './Components/button';
import { AnimatedLogo } from './Components/button';
import { InsideButton } from './Components/button';
import Newbar from './Components/ResponsiveNavbar/Newbar';
import logo from './logo.svg'

import './App.css';

function App() {

  const add = () => {
    console.log("Added Styled components")
  }

  const Theme = {
    dark:{
       primary:'#000',
       text: '#fff'
    },

    light:{
      primary:'#fff',
      text: '#000'
    },

    fontFamily: 'Roboto'
  }

  const GlobalStyle = createGlobalStyle`
  button
    {
      font-family: ${(props) => props.theme.fontFamily}
    }
  `
 
  return (
    <ThemeProvider theme={Theme}>

      <GlobalStyle/>
    <div className="App">

      <AnimatedLogo src={logo}></AnimatedLogo>

      <Styledbutton onClick={add} type="submit">
        <Hbutton>Hello</Hbutton> 
        <InsideButton>
            Hello Akash
        </InsideButton>

      </Styledbutton>
    
 
     <div>
        <br/>
     </div>

     <Styledbutton onClick={add} variant='outline'>
          Hello
     </Styledbutton>

     <div>
        <br/>
     </div>

     <FancyButton>
      Hello
     </FancyButton>

     <div>
        <br/>
     </div>

     <SubmitButton>
       Hello
     </SubmitButton>
    </div>


    <div>
        <br/>
     </div>


     <Darkbutton>
        Hello
     </Darkbutton>

     {/* Newbar component */}
     <Newbar/>

    </ThemeProvider>
  );
}

export default App; 

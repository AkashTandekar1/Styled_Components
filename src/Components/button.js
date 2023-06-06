import styled, { keyframes } from "styled-components"

// Styling common components using template literal syntax
export const Styledbutton = styled.button`
border: none;
padding: 10px 10px;

// Passing props to the property
background-color: ${(props) => 
    props.variant === 'outline' ? 'blue' : 'green' 
};
color:white;
opacity: 0.7;
width: 200px;

// Adding Pseudo classes
&:hover{
    background-color:  ${(props) => 
    props.variant !== 'outline' ? 'blue' : 'green'
};
}
`
 
export const Hbutton = styled.h1`
font-size: 30px;
`
    
export const InsideButton = styled.div`
color: black;
padding: 20px 20px;    
`
 
// Extending Styledbutton component and adding two properties to itz
export const FancyButton = styled(Styledbutton)`
background-image: linear-gradient(to right, #ffd365, #fda085 100%);
border: none; 
` 

// Adding props and html attributes
export const SubmitButton = styled(Styledbutton).attrs((props) => ({
    type: "submit",
}))
`
box-shadow: 0 9px #999;
&:active {
    background-color: ${(props) => props.variant === 'outline' ? 'blue' : 'green'};
    box-shadow: 0 5px #666;
    transform: translateY(4px)
}
`

const rotate = keyframes` 
 from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const AnimatedLogo = styled.img`
height: 40vmin;
pointer-events: none;
animation: ${rotate} infinite 20s linear;
`

// Theming concept
export const Darkbutton = styled(Styledbutton)`
border: 2px solid ${(props) => props.theme.dark.primary };
background-color: ${(props) => props.theme.dark.primary };
color:  ${(props) => props.theme.dark.text };
`
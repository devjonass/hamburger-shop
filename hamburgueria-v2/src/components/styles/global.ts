import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
html, body, figure, img, div, section, article, input, button,span, textarea, p, h1, h2, h3, h4, h5, h6, a, ul, li, ol, footer, aside, form, header, label, select, option{
    margin: 0;
    padding: 0;
    border: 0;
    outline: none;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    list-style: none;
    font-family: 'Inter', sans-serif;
    text-decoration: none; 
    
  } 
    
  
  :root {
  --color-primary: #27AE60;
  --color-primary-50: #93D7AF;
  --color-secondary: #EB5757;
  --color-Grey-100: #333333;
  --color-Grey-50: #828282;
  --color-Grey-20: #E0E0E0;
  --color-Grey-0: #F5F5F5;
  --color-Negative: #E60000;
  --color-Warning:#FFCD07;
  --color-Sucess:#168821;
  --color-Sucess:#155BCB;


 
  --heading-1: 1.625rem;
  --heading-2: 1.375rem;
  --heading-3: 1.125rem;
  --heading-4: .875rem;
  --headline: 1rem;
  --body: .875rem;
  --body-600: .875rem;
  --caption: .75rem;
  
}
`;
export default GlobalStyle;

import React,{useState  } from 'react'
import '../../Assets/Styles/Layout/Header.css'
import logo from '../../Assets/Images/Logo/1.png'
import {lightTheme, darkTheme,GlobalStyles} from '../../Components/Theme/Theme'
import styled,{ThemeProvider} from 'styled-components'

const StyledApp = styled.div`
`

function Index() {

  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={theme  === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
      <div className=''>
   <nav className="navbar navbar-light ">
  <div className="container container-fluid">
    <a href='/#'>
    <img  src={logo} alt=''/>
    </a>
    
    <form className="d-flex">
    <div className='d-flex search mx-4'>
    
    <i className="fa-solid mt-1 me-2 fa-magnifying-glass"></i>
    <a href='/job' className='fw-600'>İş Axtarın</a>
    </div>

    <div>
        <a href='/login'>Daxil Olun</a>
    </div>
    </form>
  </div>
</nav>

    </div> 
      </StyledApp>
    </ThemeProvider>
  );
}

export default Index



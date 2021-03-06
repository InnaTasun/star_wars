import Main from './Main';
import Movie from './Movie';
import styled from 'styled-components';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import homeLogo from '../images/homeLogo.png';
import Search from './Search';
import SearchResults from './SearchResults';
import Character from './Character';

function App({ className }) {
  return (
    <div className={`${className} content`}>
      <BrowserRouter>
        <header className='content--header header'>
          <Link to='/'>
            <img className='header--home-link' src={homeLogo} alt='home logo' />
          </Link>
          <Search className='header--search' />
        </header>

        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/search/:q' element={<SearchResults />} />
          <Route path='/films/:id' element={<Movie />} />
          <Route path='/people/:id' element={<Character />} />
        </Routes>
      </BrowserRouter>

      <footer className='content--footer'>
        <p>Created by Inna Tasun &copy; 2021</p>
      </footer>
    </div>
  );
}

const StyledApp = styled(App)`
  min-height: 100vh;
  min-width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Helvetica, Verdana, Arial, sans-serif;
  }

  @media (max-width: 1130px) {
    aside {
      display: none;
    }
  }

  .content {
    width: 100%;
    padding: 1rem;

    &--header {
      height: 40px;
    }

    &--footer {
      text-align: center;
      vertical-align: bottom;
      margin-top: 40px;
    }
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 20px;

    &--home-link {
      height: 40px;
      margin-bottom: -5px;
    }

    &--search {
      height: 30px;
    }
  }
`;

export default StyledApp;

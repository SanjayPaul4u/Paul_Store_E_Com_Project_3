# Welcome to PaulStore Made By Sanjay Paul 🔥🔥🔥

## (1)FRONTEND: Creating React + Vite - First Look
    -npm create vite
    -choose react & javascript

    -cd client
    -npm install
    -npm run dev
## (2)FRONTEND: Set Up Frontend part
    - adding bootstrap
    - set title & content
    - add fav icon

## (3)FRONTEND: React router set up
    - npm i react-router-dom
    - <BrowserRouter>
    - <Routes>
        <Route exact path="/home" element={<Home/>}/>
      </Routes>
     </BrowserRouter>

## (4)FRONTEND: Styled Component Add
    - npm i styled-components

    - GlobalStyle Added
    - ThemeProvider added
    - Custom Button Style component create

## (5)FRONTEND: Redux Tool Kit Setup
    - npm i @reduxjs/toolkit
    - npm i react-redux

    -- slice create
            import { createSlice } from '@reduxjs/toolkit'

    -- store configure
            import {configureStore} from '@reduxjs/toolkit'

    -- Connect react with redux toolkit
            import { Provider } from 'react-redux'
            import store from './store/index.jsx'

## (6)FRONTEND: Header - Navbar Component create
    - npm i react-icons
    - use react -icons

## (7)FRONTEND: Product Page 'Header' Component Done

## (8)FRONTEND: Product Page 'Grid View' Component Done

## (9)FRONTEND: Product Page 'List View' Component Done

## (10)FRONTEND: Product Page 'Filter' Component Done
    - product page almost done

## (11)FRONTEND: Working on 'SingleProduct' Component
    - Single image styling done

## (12)FRONTEND:  'SingleProduct' Component styling done
    
## (13)FRONTEND:  'API CALL - Fetch all products' and 'Grid & List' View Functionality
    - npm i axios
    - we have used "REDUX TOOL KIT" 
    - see the all file for better understand

## (14)FRONTEND:  Infinite Scralling create
    - npm i react-infinite-scroll-component

## (15)FRONTEND:  SEARCH filter done 🔥


## (16)FRONTEND:  FILTERING with Query 🔥 (Very Important part)
    - import {useSearchParams} from 'react-router-dom';
    - const [query, setQuery] = useSearchParams();


    - const copy = new URLSearchParams(query);
    - copy.set("search", searchVal);
    - setQuery(copy);

    - query("search");

## (17)FRONTEND:  SORT Filter done

## (18)FRONTEND:  Category Wise Filter done

## (19)FRONTEND:  Clear Filter Function and Api call Done
    here 
    - useSearchParams();
    - new URLSearchParams(query);
    - api call (in createAsyncThunk );
        very important
    
## (20) FRONTEND:  Color Filter Function Done & PRODUCT PAGE DONE🔥

## (21) FRONTEND:  Single Product page almost done 🔥

## (22) FRONTEND:  Cart Page Styling Done

## (23) FRONTEND:  Login and SignUp Page Styling Done

## (24) FRONTEND:  Contact Page Styling Done

## (25) FRONTEND:  Footer Component Styling Done
    

    
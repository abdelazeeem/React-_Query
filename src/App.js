import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { QueryClientProvider , QueryClient  } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import './App.css'
import { HomePage } from './components/Home.page'
import { RQSuperHeroesPage } from './components/RQSuperHeroes.page'
import { SuperHeroesPage } from './components/SuperHeroes.page'
import {RQSuperHeroPage} from './components/RQSuperHero.page'
import { ParalleQueriespage } from './components/ParalleQueries.page'
import { DynamicParallelpage } from './components/DynamicParallel.page'
import { DependentQueriespage } from './components/DependentQueries.page'
import { PaginatedQueriespage } from './components/PaginatedQueries.page'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient} >
      
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/super-heroes'>Traditional Super Heroes</Link>
            </li>
            <li>
              <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
            </li>
          </ul>
        </nav>
        <Routes>
        <Route path='/rq-Paginated/' element={<PaginatedQueriespage/>}  />
          <Route path='/rq-dependet-parallel' element={<DependentQueriespage email ='x@gmail.com'/>} />
          <Route path='/rq-dynamic-parallel' element={<DynamicParallelpage heroId={[1 ,3 ]} />} />
          <Route path='/rq-parallel' element={<ParalleQueriespage/>} />
          <Route path='/rq-super-heroes/:heroId' element={<RQSuperHeroPage/>}  />
          <Route path='/super-heroes' element={  <SuperHeroesPage />  } />
          <Route path='/rq-super-heroes' element={<RQSuperHeroesPage />} />
          <Route path='/' element= {< HomePage />} />
        </Routes>
      </div>
    </Router>
    <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  )
}

export default App

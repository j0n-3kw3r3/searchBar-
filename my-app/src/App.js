import './App.css'
import SearchBar from './component/SearchBar';
import BookData from './Data.json'


function App() {
  return (
    <div className='App'>

      <SearchBar placeholder='Search for a book...' data={BookData}/>

    </div>
  );
}

export default App;

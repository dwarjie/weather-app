import RequestCityName from './api/RequestAPICall';

function App() {
  RequestCityName('London')

  return (
   <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1> 
  );
}

export default App;

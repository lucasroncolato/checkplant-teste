import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Map from './components/Map';

const App = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 relative">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default App;

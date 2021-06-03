import './App.css';
import Header from './components/Header/Header';
import PageWrapper from './components/PageWrapper/PageWrapper';
import VisualizationTable from './components/VisualizationTable/VisualiztionTable';

function App() {
  return (
    <div className="App">
      <PageWrapper>
        <Header />
        <VisualizationTable />
      </PageWrapper>
    </div>
  );
}

export default App;

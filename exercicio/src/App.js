import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { MainContent } from "./components/MainContent";
import { Card } from "./components/Card";
import "./App.css";

function App() {
  return (
    <>
      <Header />

      <MainContent>
        <Card 
          titulo="Produto 1" 
          descricao="Descrição do produto 1" 
        />

        <Card 
          titulo="Produto 2" 
          descricao="Descrição do produto 2" 
        />

        <p>Texto de exemplo</p>
      </MainContent>

      <Footer />
    </>
  );
}

export default App;
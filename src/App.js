import logo from './logo.svg';
import './App.css';
import FoodList from './Components/FoodList';
import { Row, Divider, Button } from 'antd';

function App() {
  return (
    <div className="App">
      {/* Display Add Food component here */}

      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        <FoodList />
      </Row>
    </div>
  );
}

export default App;

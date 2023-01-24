import React , { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { get_dat } from "./Redux/Action/Action";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
 
  const dispatch=useDispatch()
  useEffect(()=>{
  dispatch(get_dat())
  },[])
  const data=useSelector(state=>state.post)
  console.log(data)
  return (
    <div className="App">
    {data.map((el)=>
    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={el.imageUrl} />
      <Card.Body>
        <Card.Title>{el.title}</Card.Title>
        <Card.Text>
        {el.namee}<br></br>
        {el.body}<br></br>
        {el.video}

        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    )}
    </div>
  );
}

export default App;

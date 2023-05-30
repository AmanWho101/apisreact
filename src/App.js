import * as ReactDom from 'react-dom/client';
import './App.css';
import axios from "axios"
import { useEffect,useState  } from 'react';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';



//https://jsonplaceholder.typicode.com/todos



function App() {

//   // var x = read();
//  useEffect(()=>{
//     axios('v1/')
//     .then(res =>res)
//     .then(res=>console.log(res.data))
//   });


  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(`api1/?category=region`)
    .then((response) => response.json())
    .then((resdata) =>{
      console.log(resdata)
     setData(resdata);
     console.log(data)
      
    })
    .catch((err) => {
      console.log(err.message);
    });
  }
useEffect(()=>{
fetchData();
},[]);

return (
    <div className="App">
      <table>
        <thead>
        <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Sex</th>
        <th>Region</th>
        <th>Year Of MEmbership</th>
        <th>Action</th>
      </tr>    
        </thead>
      <tbody>
 
        
      
       
       {
        data.map((item,index)=>(
          <tr>
          <td>{index+1}</td>
          <td>{item.firstname}</td>
          <td>{item.lastname}</td>
          <td>{item.sex}</td>
          <td>{item.region}</td>
          <td>{item.yearof}</td>
          <td><a href={item.yearof}>Generate</a></td>
          
          </tr>
        ))
       }
          
          
     
          </tbody>
        
        </table>
    </div>
  );
}

export default App;

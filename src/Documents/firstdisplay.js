import React,{useState, useEffect} from 'react'
import './displayfirst.css'
export default function Header() {
const [filter, setFilter] = useState([]);
const [abcde, setAbcde] = useState([0]);
const contestfetch = () => {
  fetch("https://www.kontests.net/api/v1/all")
  .then((response) => {
      return response.json();
  }).then((abcd)=>{
      let data = abcd
      setAbcde(data)
  })
}
useEffect(() =>{
  contestfetch();
})
const eventfunction=(event)=>{
  const searchWord = event.target.value;
  const newFilter = abcde.filter((value) => {
    return value.site.toLowerCase().includes(searchWord.toLowerCase());
  });
  if(searchWord ===""){
    setFilter([])
  }
  else{
    setFilter(newFilter);
  }
}
  return ( 
    <div>
    <h1 style={{position:"relative",width:"170px",textAlign:"center",top:"10px",left:"10px", borderRadius:"7px",color:"white", backgroundColor:"orange"}}>Contestz</h1>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div style={{display:"flex", justifyContent:"space-around",marginTop:"8px",position:"relative"}}>
      <div className="searchbarall">
    <h1>Search by</h1>
    <h1>Website</h1>  
      <div style={{display:"flex", flexDirection:"column",}}>  
      <input className="form-control" type="search" placeholder="Search" aria-label="Search" onChange={eventfunction}></input>{filter.length !== 0 && (   
      <div  style={{border:"solid",borderTop:"none", height:"100px",overflow:"auto", borderWidth:"1px", borderColor:"black",position:"relative"}}>
        {

         filter.map((value, key) =>{
          if(value.status==="CODING"){
            value.status= "ONGOING Contest"
          }else if(value.status==="BEFORE"){
            value.status="PAST Contest"
          }
        return(<div style={{display:"flex"}}><a key={key} className="hy" href={value.url} target="blank"><p>{value.name}</p></a><div style={{position:"relative", left:"10px"}}>({value.status})</div></div>);      
      }
         )
        }
      </div>
    )
    }
    </div>
    </div>
    <div style={{position:"relative",top:"-40px"}}>
    <img src="https://cdn-icons-png.flaticon.com/512/5272/5272307.png" className="imageee"></img>
      </div>         
      </div> 
    </div>
  )
}

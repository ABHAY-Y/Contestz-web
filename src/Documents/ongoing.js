import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
export default function Ongoingcontests() {
  const [name, setName] = useState([0]);
  const contestfetch = () => {
    fetch("https://kontests.net/api/v1/all").then((response) => {
      return response.json()
    }).then(abcd => {
      setName(abcd)
    })
  }
  useEffect(() => { contestfetch() })
  return (<div style={{ backgroundColor: '#6e31a6', display: "flex", flexDirection: "column" }}>
    <div style={{ margin: 'auto', height: 'fit-content', width: 'fit-content', backgroundColor: 'yellow' }}>Ongoing Contests</div>
    <div>
      <Card style={{ display: 'grid', gridAutoFlow: 'column', gridAutoColumns: '30%', overflowX: 'auto', overscrollBehaviorInline: 'contain' }}>
        {name.map((abc, ty) => {
          if (abc.status === "CODING") {
            return (<Card.Body key={ty}>
              <Card.Title>{abc.name}</Card.Title>
              <div>From: </div><Card.Subtitle className="mb-2 text-muted">{abc.start_time}</Card.Subtitle>
              <div>To: </div><Card.Subtitle className="mb-2 text-muted">{abc.end_time}</Card.Subtitle>
              <h6><Card.Text>{abc.site}</Card.Text>
              </h6><Card.Link href={abc.url}>{abc.url}</Card.Link>
            </Card.Body>)
          }
          return null;
        })}
      </Card>
    </div>
  </div>);
}
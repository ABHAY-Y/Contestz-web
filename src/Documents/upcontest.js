import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
export default function Upcontest() {
    const [name, setName] = useState([0]);
    const contestfetch = () => {
        fetch("https://kontests.net/api/v1/all")
            .then((response) => {
                return response.json();
            }).then((abcd) => {
                let data = abcd
                setName(data)
            })
    }
    useEffect(() => {
        contestfetch();
    })
    return (
        <div style={{ backgroundColor: '#6e31a6' }}>
            <div style={{ margin: 'auto', height: 'fit-content', width: 'fit-content', backgroundColor: 'yellow' }}>Upcoming Contests</div>
            <Card style={{ display: 'grid', gridAutoFlow: 'column', gridAutoColumns: '30%', overflowX: 'auto', overscrollBehaviorInline: 'contain' }}>
                {name.map((abcd, index) => {
                    if (abcd.status === "BEFORE") {
                        return (
                            <Card.Body key={index}>
                                <Card.Title>{
                                    abcd.name
                                }</Card.Title>
                                <div>From: </div><span> <Card.Subtitle className="mb-2 text-muted">{
                                    abcd.start_time
                                }</Card.Subtitle></span>
                                <div>To: </div>
                                <Card.Subtitle className="mb-2 text-muted">{
                                    abcd.end_time
                                }</Card.Subtitle>
                                <h6>
                                    <Card.Text>{
                                        abcd.site
                                    }
                                    </Card.Text>
                                </h6>
                                <Card.Link href={abcd.url}>{
                                    abcd.url
                                }</Card.Link>
                            </Card.Body>)
                    }
                    return null;
                })}
            </Card>
        </div>
    );
}
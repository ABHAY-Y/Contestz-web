import React from 'react'

export default function Footer() {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "70px", paddingTop: "100px", backgroundColor: "rgb(244, 238, 220)" }}>
            <div style={{ textAlign: "center", paddingLeft:"1%", paddingRight:"1%" }}>Contestz is formed for displaying the details of ongoing or past coding contests of selected coding websites and also helps coders to redirect to corresponding coding contest's web portal. With Contestz, coders can easily track the ongoing and past coding contests.</div>
            <h1 style={{ position: "relative", width: "170px", textAlign: "center", borderRadius: "7px", color: "white", backgroundColor: "orange", alignSelf: "center" }}>Contestz</h1>
        </div>
    )
}

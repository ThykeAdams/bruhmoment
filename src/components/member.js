import { useState, useEffect } from 'react'

import logo from "../public/loader.gif"


import online from "../public/status/online.png"
import offline from "../public/status/offline.png"
import dnd from "../public/status/dnd.png"
import idle from "../public/status/idle.png"



export default function Membercard({ id, icon, aboutMe }) {
  const [loaded, setLoaded] = useState(false)
  const [showBanner, setBanner] = useState(true)
  const [background, setBackground] = useState("BLACK")
  const [japi, setJapi] = useState()

  useEffect(() => {
    fetch(`https://japi.rest/discord/v1/user/${id}`).then(r => r.json()).then(d => {
      setJapi(d)
      setLoaded(true)
    }).catch(e => {
      setLoaded(false)
      console.log(e)
    })
  }, [])
  let text;
  let size;
  let size2;
  let opt = {}
  console.log(japi?.presence)


  return (<div className="col-sm-3">
    {loaded ?
      <div className="col-auto" style={{ marginBottom: "2rem", height: "100%" }}>
        <div className="member-card h-99">
          <div class="profile-card" style={{ backgroundColor: background, height: "8rem" }}>
            {showBanner ? <img style={{ width: "100%", height: "8rem" }} className="banner" src={`https://japi.rest/discord/v1/user/${id}/banner?size=1024&proxied=true&animated=true `} onError={err => { if (err) setBanner(false) }} alt="Banner cannot load" /> : ""}
            <div className="pfp-cont">
              <img className="pfp" style={{ width: "6rem" }} src={japi?.data?.avatarURL} alt={"OwO"}></img>
            </div>
          </div>
          <div className="bottom-text">
            <h5 className="text-start"><strong>{japi?.data?.username}<span className="text-start text-muted">#{japi?.data?.discriminator}</span></strong> {icon}</h5>
          </div>
          {text ? <p style={{ padding: "0px" }}> ‎‏‏</p> : ""}
          <div className="text-divider"></div>
          <p style={{ padding: "1rem" }} className="text-start text-muted">{aboutMe}
          </p>
        </div>
      </div>
      : <div className="col-auto">
        <div style={{ padding: "2rem 1.2rem" }} className="member-card">
          <div className="row justify-content-md-center">
            <img alt="loader" style={{ width: "10rem" }} src={logo} />
            <h1>Loading...</h1>
          </div>
        </div>
      </div>}
  </div>)
}
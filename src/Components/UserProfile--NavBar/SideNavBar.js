import React from "react"



export default function SideNavBar () {
  return (
    <div className="sideNav userProfile">
      <img className="avatar" src="" alt="" />

      <div className="name">John Doe</div>

      <div className="location">| Melbourne</div>

      <ul className="functions">
        <li><a href="">Overview</a></li>
        <li><a href="">User Information</a></li>
        <li><a href="">User Setting </a></li>
        <li><a href="">Notification Setting </a></li>
        <li><a href="">Privacy</a></li>
        <li><a href="">Security</a></li>
        <li><a href="">Payments</a></li>
        <li><a href="">Help</a></li>
        <li><a href="">About</a></li>
      </ul>
    </div>
  )
}


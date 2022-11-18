import React from "react"
import { Link } from "react-router-dom"

export default function ShowMyPet () {
  return (
    <div className="adoptedPet">
      <div className="myPetBtm"><Link to="/petlist">Learn More.</Link></div>
    </div>
  )
}
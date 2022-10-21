import React from "react"

export default function Volunteer () {
  return (
    <div className="volunteer userProfile">

      <h3>volunteer component</h3>
      <div className="requirement">
        <p className="requimentTitle">Volunteer Requirements:</p>

        <ul className="requirementDetails">
          <li>- Must be at least 16 years old.</li>
          <li>- Teenagers aged 12-15 can volunteer with a parent or guardian present at all times</li>
          <li>- Can complete 8 hours of volunteer work per month for one year</li>
          <li>- Able to attend scheduled volunteer activities on time</li>
          <li>- Be able to squat, bend, turn, lift and stand for extended periods of time when directly involved in animal care</li>
          <li>- Working in a friendly manner with people -All volunteer positions involve direct interaction with the public, staff and other volunteers</li>
        </ul>
      </div>

      <form className="applyForm">
        <label className="formTitle" htmlFor="applyreason">Apply Reason</label> <br />
        <input type="textarea" id="applyReaon" name="applyreason" /> <br />

        <input type="submit" value="Post" />

      </form>


    </div>
  )
}
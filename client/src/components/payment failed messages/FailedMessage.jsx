import React from "react"
import Button from "../button/Button"

const FailedMessage = ({ props }) => {
  return (
    <>
      <div className="flex flex-col items-center w-full md:w-538px min-h-screen px-6 py-12 mx-auto">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <div>
          <Button title="Contact support" />
          <Button title="try again" />
        </div>
      </div>
    </>
  )
}

export default FailedMessage

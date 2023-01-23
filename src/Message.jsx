import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Card } from 'reactstrap'
export default function Message() {
  const goto = useNavigate()
  return (
    <div>
      <Card className="dashboard_card m-3 shadow-sm p-4">
        <h3 className="card_title">Message</h3>
        <button
          className="primary_button"
          onClick={() => goto('/send-message')}
        >
          Create message
        </button>
      </Card>
    </div>
  )
}

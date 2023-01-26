import { useSelector } from 'react-redux'

export default function Dashboard() {
  const {user} = useSelector(p=>p.auth)

  return (
    <div>
      {JSON.stringify({user})}
      Dashboard
    </div>
  )
}

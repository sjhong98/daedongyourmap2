import Image from 'next/image'
import SignIn from './auth/signIn'
import Map from './components/map'
import MapLayout from './mapLayout'

export default function Home() {
  return (
    <div className="flex justify-between">
      <MapLayout />
    </div>
  )
}

import MapLayout from './components/map/mapLayout'

export default function Home() {
  return (
    <div className="flex justify-between">
      <title>대동, 당신의 지도</title>
      <MapLayout />
    </div>
  )
}

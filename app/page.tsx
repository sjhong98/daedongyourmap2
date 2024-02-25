import { GetCount } from './components/map/getCount';
import Map from './components/map/map'
import MapLayout from './components/map/mapLayout'

type CountType = {point: string, count: number}

export default async function Home() {
    let counts: CountType[] = [];
    await GetCount("main")
    .then((res) => {
        counts = res;
    })

  return (
    <div className="flex justify-between">
      <title>대동, 당신의 지도</title>
      <MapLayout>
          <Map counts={counts} />
      </MapLayout>
    </div>
  )
}

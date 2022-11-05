import { useEffect } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import axiosInstance from '../../services/utils/axiosInstance'
import './Dashboard.scss'

const Dashboard = () => {
  // useEffect(() => {
  //   axiosInstance.get('http://localhost:8000/users/').then(res => {
  //     console.log(res)
  //   })
  // }, [])

  const center = [23.810331, 90.412521]

  return (
    <div className='map'>
      <MapContainer
        className='map-container'
        center={center}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={center}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default Dashboard

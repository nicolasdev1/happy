import React from 'react'
import { Map, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

import { FiPlus } from 'react-icons/fi'
import {
  Container,
  Aside,
  Header,
  Footer,
  CreateOrphanage
} from './styles'

const OrphanagesMap = () => {
  return (
    <Container>
      <Aside>
        <Header>
          <img src="/images/map-marker.svg" alt="Happy" />
          
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </Header>

        <Footer>
          <strong>Bertioga</strong>
          <span>São Paulo</span>
        </Footer>
      </Aside>

      <Map
        center={[-23.834741, -46.138987]}
        zoom={16}
        style={{ width: '100%', height: '100%', zIndex: 5 }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
      </Map>

      <CreateOrphanage to="">
        <FiPlus size={32} color="#fff" />
      </CreateOrphanage>
    </Container>
  )
}

export default OrphanagesMap

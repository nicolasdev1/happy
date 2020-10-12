import React from 'react'

import { FiArrowRight } from 'react-icons/fi'

import {
  Container,
  Wrapper,
  Location,
  EnterApp
} from './styles'

const Landing = () => {
  return (
    <Container>
      <Wrapper>
        <img src="/images/logo.svg" alt="Happy" />

        <main>
          <h1>Leve felicidade para o mundo</h1>

          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <Location>
          <strong>Bertioga</strong>
          <span>São Paulo</span>
        </Location>

        <EnterApp to="/orphanages">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </EnterApp>
      </Wrapper>
    </Container>
  )
}

export default Landing

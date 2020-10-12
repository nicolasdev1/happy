import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  position: relative;

  display: flex;

  width: 100vw;
  height: 100vh;
`

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 440px;

  padding: 80px;

  background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);
`

export const Header = styled.header`
  > h2 {
    font-size: 40px;
    font-weight: 800;
    line-height: 42px;

    margin-top: 64px;
  }

  > p {
    line-height: 28px;

    margin-top: 24px;
  }
`

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;

  line-height: 24px;

  > strong {
    font-weight: 800;
  }
`

export const CreateOrphanage = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 10;

  position: absolute;
  right: 40px;
  bottom: 40px;

  width: 64px;
  height: 64px;

  background-color: #15c3d6;
  border-radius: 20px;

  transition: background-color .2s;

  &:hover {
    background-color: #17d6eb;
  }
`

import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);

  width: 100vw;
  height: 100vh;
`

export const Wrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  width: 100%;
  max-width: 1100px;

  height: 100%;
  max-height: 680px;

  background: url('/images/landing.svg') no-repeat 80% center;

  > main {
    max-width: 350px;

    > h1 {
      font-size: 76px;
      font-weight: 900;
      line-height: 70px;
    }

    > p {
      font-size: 24px;
      line-height: 34px;

      margin-top: 40px;
    }
  }
`

export const Location = styled.div`
  position: absolute;
  right: 0;
  top: 0;

  display: flex;
  flex-direction: column;

  font-size: 24px;
  line-height: 34px;
  text-align: right;

  > strong {
    font-weight: 800;
  }
`

export const EnterApp = styled(Link)`
  position: absolute;
  right: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 80px;
  height: 80px;

  background-color: #f6d666;
  border-radius: 30px;

  transition: background-color .2s;

  &:hover {
    background-color: #96feff;
  }
`

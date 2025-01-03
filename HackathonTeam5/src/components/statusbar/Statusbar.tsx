import React from 'react'
import { Container } from "./Statusbar.styles"
import Signal from "../../assets/signal.svg"
import Wifi from "../../assets/wifi.svg"
import Battery from "../../assets/battery.svg"
const Statusbar = () => {
  return (
    <Container>
        <div className='time'>9:41</div>
        <div className='dynamic'>
            <div className='notch'></div>
        </div>
        <div className='right-side'>
            <img src={Signal} alt="signal" />
            <img src={Wifi} alt="wifi" />
            <img src={Battery} alt="battery" />
        </div>
    </Container>
  )
}

export default Statusbar
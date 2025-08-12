import { useEffect, useRef, useState } from 'react'

import './App.css'
import ScrollVideo from "./assets/gabrielly-xv-party.mp4"
import BackgroundImg from "./assets/background.svg"


function App() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [showButtons, setShowButtons] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShowButtons(true)
    }, 4000)
  }, [])

  return (
    <div className='app-container'>
      <img
        src={BackgroundImg}
        className='frame'
        alt='Background decoration'
      />
      <video
        ref={videoRef}
        src={ScrollVideo}
        className='scroll-video'
        controls={false}
        autoPlay
        muted
      />
      {showButtons && (
        <div className='link-button-container'>
          <a
            className='link-button'
            href='https://wa.me/5551997781699/?text=Agrade%C3%A7o%20muito%20pelo%20convite%20para%20o%20anivers%C3%A1rio%20da%20Gabrielly.%20Confirmo%20minha%20presen%C3%A7a%20e%20estou%20animado(a)%20para%20comemorar%20esse%20dia%20especial%20com%20voc%C3%AAs.%20At%C3%A9%20I%C3%A1!%20'
          >
            👑 Confirmar presença
          </a>
          <a
            className='link-button'
            href='https://www.google.com/maps/place/Sal%C3%A3o+do+Sindicato+dos+servidores+municipais/@-29.9747634,-52.3661742,17z/data=!3m1!4b1!4m6!3m5!1s0x951b5d6284c79453:0x3ac2c2fc275f0283!8m2!3d-29.9747634!4d-52.3661742!16s%2Fg%2F11t_gnngtn?entry=ttu&g_ep=EgoyMDI1MDgwNi4wIKXMDSoASAFQAw%3D%3D'
          >
            📍 Localização do salão
          </a>
        </div>
      )}
    </div>
  )
}

export default App

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
    }, 4000) // espera 1 segundo antes de iniciar o vídeo
  }, [])

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      position: 'relative',
      background: `url('${BackgroundImg}') no-repeat center center fixed`,
      backgroundSize: 'cover',
    }}>
      <video
        ref={videoRef}
        src={ScrollVideo}
        style={{
          maxWidth: '100vw',
          maxHeight: '80vh',
          height: "auto"
        }}
        controls={false}
        autoPlay
        muted
      />
      {showButtons && (
        <div style={{
          position: 'absolute',
          left: '50%',
          top: 'calc(50% + 132px)', // ajusta a distância abaixo do vídeo conforme necessário
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: "column",
          gap: '10px',
          zIndex: 2
        }}>
          <a
            className='link-button'
          >
            Confirmar presença
          </a>
          <a
            className='link-button'
          >
            Localização do Salão
          </a>
        </div>
      )}
    </div>
  )
}

export default App

import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [phase, setPhase] = useState('closed')
  const revealTimerRef = useRef(null)

  const whatsappLink =
    'https://wa.me/40752291659?text=O%20sa%20fiu%20alaturi%20de%20tine%20in%20aceasta%20zi%20importanta%20!'

  useEffect(() => {
    return () => {
      if (revealTimerRef.current) {
        clearTimeout(revealTimerRef.current)
      }
    }
  }, [])

  const openEnvelope = () => {
    if (phase !== 'closed') {
      return
    }

    setPhase('opening')

    revealTimerRef.current = setTimeout(() => {
      setPhase('front')
      revealTimerRef.current = null
    }, 980)
  }

  const onEnvelopeKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      openEnvelope()
    }
  }

  return (
    <main className="page-shell">
      <section className="invitation-experience" aria-label="Invitație aniversare Cati">
        <header className="hero-copy">
          <p className="eyebrow">8 mai 2026</p>
          <h1>Aniversarea de 40 de ani</h1>
          <p className="subtitle">Cati te invită să sărbătorim împreună un moment special.</p>
        </header>

        <div
          className={`envelope-scene ${phase}`}
          onClick={openEnvelope}
          onKeyDown={onEnvelopeKeyDown}
          role="button"
          tabIndex={0}
          aria-label={phase === 'closed' ? 'Apasă pentru a deschide plicul' : 'Invitația este deschisă'}
        >
          <div className="envelope-core" aria-hidden="true">
            <div className="envelope-pocket">
              <article className="letter">
                <p className="letter-kicker">Invitație aniversară</p>
                <h2>Invitație</h2>
                <p className="letter-title">CATI - 40</p>
                <div className="letter-separator" />
                <p className="letter-line">Eveniment: Aniversare 40 de ani Cati</p>
                <p className="letter-line">Data: 8 mai 2026</p>
                <p className="letter-line">Locație: Strada Lăzăturii nr. 122, Tocile</p>
                <p className="letter-line">Confirmare până la: 20 aprilie 2026</p>
              </article>
            </div>

            <div className="envelope-flap" />
            <div className="envelope-front" />
          </div>
          <p className="hint">{phase === 'closed' ? 'Apasă plicul ca să deschizi invitația' : 'Te așteptăm cu drag!'}</p>
        </div>

        {phase === 'front' && (
          <a className="confirm-button" href={whatsappLink} target="_blank" rel="noreferrer">
            Confirmă participarea prin mesaj
          </a>
        )}
      </section>
    </main>
  )
}

export default App

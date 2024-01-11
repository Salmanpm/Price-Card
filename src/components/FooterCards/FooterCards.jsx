import React from 'react'
import './FooterCards.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faUser,faDatabase,faEnvelope } from '@fortawesome/free-solid-svg-icons'
function FooterCards() {
  return (
    <>
    <div className='free-card'>
      <div className="bt">
        <button>Free Forever</button>
      </div>
      <div className="ft-head">
      <h4>Free Starter</h4>
      </div>
      <div className="ft-para">
        <p>The queckest and easiest way to try protocols with basic functinalities</p>
      </div>
      <div className="ft-bt">
        <button>Get Started <i><FontAwesomeIcon icon={faArrowRight} /></i></button>
      </div>
    </div>
    <div className='enterprise-plan'>
      <div className="bt-enterprise">
        <button>Let's Connect</button>
      </div>
      <div className="ft-head">
      <h4>Enterprise Plan</h4>
      </div>
      <div className="ft-para2">
        <p>Effortlessly customize and fine-tune services as your needs shift, ensuring the perfect tools for success</p>
      </div>
      <div className="ft-bt-enterprise">
        <button>Get Started <i><FontAwesomeIcon icon={faArrowRight} /></i></button>
      </div>
    </div>
    </>
  )
}

export default FooterCards

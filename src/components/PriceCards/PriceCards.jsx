import React from 'react'
import './PriceCards.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight, faUser, faDatabase,faEnvelope} from '@fortawesome/free-solid-svg-icons'
function PriceCards() {
  return (
    <div>
      <div className="heading">
        <h2>Choose a plan that's just right for you !</h2>
      </div>
      <div className="btn">
        <button className='fixed-color'>Monthly</button>
        <button>Annually</button>
      </div>
      <div className="cards">
        <div className="card1">
            <div className="head mg-left"><h2>Basic</h2></div>
            <div className="price mg-left"><p>$89.99/mo </p></div>
            <div className="price-new mg-left"> <p>$9.99/mo</p></div>
            <div className="btn-inside mg-left"><button>Get Started <i><FontAwesomeIcon icon={faArrowRight} /></i></button></div>
            <hr />
            <div className="what mg-left"><p>What you'll get:</p></div>
            <div className="users mg-left"><p><FontAwesomeIcon icon={faUser} /> Upto 25 Users</p></div>
            <div className="storage mg-left"><p><FontAwesomeIcon icon={faDatabase} /> Upto 25gb Storage</p></div>
            <div className="email mg-left"><p><FontAwesomeIcon icon={faEnvelope} /> Email Support</p></div>
            <div className="exp mg-left"><a href=''><p>Explore Features</p></a></div>
        </div>
        <div className="card2">
            <div className="head mg-left"><h2>Standard</h2></div>
            <div className="price mg-left"><p>$189.99/mo </p></div>
            <div className="price-new mg-left"> <p>$99.99/mo</p></div>
            <div id='color-rose' className="btn-inside mg-left"><button>Get Started <i><FontAwesomeIcon icon={faArrowRight} /></i></button></div>
            <hr />
            <div className="what mg-left"><p>What you'll get:</p></div>
            <div className="users mg-left"><p><FontAwesomeIcon icon={faUser} /> Upto 50 Users</p></div>
            <div className="storage mg-left"><p><FontAwesomeIcon icon={faDatabase} /> Upto 60gb Storage</p></div>
            <div className="email mg-left"><p><FontAwesomeIcon icon={faEnvelope} /> Email+Chat Support</p></div>
            <div className="exp mg-left"><a href=''><p>Explore Features</p></a></div>
        </div>
        <div className="card3">
            <div className="head mg-left"><h2>Premium</h2></div>
            <div className="price mg-left"><p>$389.99/mo </p></div>
            <div className="price-new mg-left"> <p>$199.99/mo</p></div>
            <div id='color3' className="btn-inside mg-left"><button>Get Started <i><FontAwesomeIcon icon={faArrowRight} /></i></button></div>
            <hr />
            <div className="what mg-left"><p>What you'll get:</p></div>
            <div className="users mg-left"><p><FontAwesomeIcon icon={faUser} /> Upto 75 Users</p></div>
            <div className="storage mg-left"><p><FontAwesomeIcon icon={faDatabase} /> Upto 100gb Storage</p></div>
            <div className="email mg-left"><p><FontAwesomeIcon icon={faEnvelope} /> Email+Chat+Whatsapp Support</p></div>
            <div className="exp mg-left"><a href=''><p>Explore Features</p></a></div>
        </div>
      </div>
    </div>
  )
}

export default PriceCards

import React from 'react'
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGreaterThan , faBoxesStacked ,faTree ,faPuzzlePiece, faCircleQuestion, faEnvelope ,faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
function Sidebar() {
  return (
    <div className='fix'>
      <div className="side-image">
        <img src="https://envri.eu/wp-content/uploads/2016/08/software-developer-copy.jpg" alt="img" />
        <h4>Ram Mohan  <span> <FontAwesomeIcon icon={faGreaterThan} /></span></h4>
        <p>rammohan@gmail.com</p>
      </div>
      <div className="side-contents">
        <div className="items">
            <div className="btn1">
            <button> <i> <FontAwesomeIcon icon={faBoxesStacked} />  </i> Dashboard</button>
            </div>
            <div className="btn2">
                <button> <i> <FontAwesomeIcon icon={faTree} /></i> Perks </button>
            </div>
            <div className="btn3">
                <button> <i> <FontAwesomeIcon icon={faPuzzlePiece} /></i> Addons</button>
            </div>
            <div className="btn4">
                <button> <i><FontAwesomeIcon icon={faCircleQuestion} /></i> FAQ</button>
            </div>
            <div className="btn5">
                <button> <i><FontAwesomeIcon icon={faEnvelope} /></i> Support</button>
            </div>
            <a href=""><p>Logout <i><FontAwesomeIcon icon={faRightFromBracket} /></i> </p></a>
        </div>
      </div>
    </div>
  )
}

export default Sidebar

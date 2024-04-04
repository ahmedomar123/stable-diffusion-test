// importo link per navigare all'interno della mia app
// <link> equivale ad <a> in html
import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import siteLogo from "../assets/site-logo.svg"
import pdf from "../pdf/triplesense-reply-test.pdf"

const Navbar = () => {
  // mi serve per sapere dove mi trovo nella mia app
  const location = useLocation()
  
  // definisco la variabile di stato del menu mobile
  const [isOpen, setIsOpen] = useState(false) 

  const handleBtnToggleMenu = () => {    
    if (!isOpen) {
      setIsOpen(true)
    } else {
      setIsOpen(false)
    }
  }

  return (
    <nav className="site-nav">            
      {
        // se è stato caricato allora renderizza logo
        siteLogo && (
          <a
            className="site-logo-wrap" 
            href="https://www.triplesense.it/"
            target="_blank">
              <img 
                src={siteLogo} 
                alt="" />            
          </a>
        )
      }      

      <ul>
        <li>
          <Link
            className={ location?.pathname === "/" ? "is-active" : ""}
            to="/"
            title="Home">
            Home
          </Link>
        </li>
        <li>
          <Link 
            className={ location?.pathname === "/ecosystem" ? "is-active" : ""}
            to="/ecosystem"
            title="ecosystem">
            Ecosystem
          </Link>
        </li>
        <li>
          <Link 
            className={ location?.pathname === "/extensions" ? "is-active" : ""}
            to="/extensions"
            title="Extensions">
            Extensions
          </Link>
        </li>
      </ul>

      {
        pdf && (
          <a 
            href={pdf}
            className="btn btn-primary"
            download="Benchmarking and scouting of Stable Diffusion ecosystem">
              Download the report
          </a>
        )
      }    

      <div className={`mobile-voices-wrap ${isOpen ? "is-visible" : ""}`}>
        <ul>
          <li>
            <Link
              className={ location?.pathname === "/" ? "is-active" : ""}
              to="/"
              title="Home">
              Home
            </Link>
          </li>
          <li>
            <Link 
              className={ location?.pathname === "/ecosystem" ? "is-active" : ""}
              to="/ecosystem"
              title="ecosystem">
              Ecosystem
            </Link>
          </li>
          <li>
            <Link 
              className={ location?.pathname === "/extensions" ? "is-active" : ""}
              to="/extensions"
              title="Extensions">
              Extensions
            </Link>
          </li>
        </ul>

        {
          pdf && (
            <a 
              href={pdf}
              className="btn btn-primary"
              download="Benchmarking and scouting of Stable Diffusion ecosystem">
                Download the report
            </a>
          )
        }    
      </div>  

      <button 
        className={`btn btn-primary btn-toggle-menu-mob ${isOpen ? "is-open" : ""}`}
        onClick={handleBtnToggleMenu}>
          <span></span>
          <span></span>
          <span></span>
      </button>
    </nav>
  )
}

export default Navbar
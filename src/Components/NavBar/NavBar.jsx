import'./NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseUser} from'@fortawesome/free-solid-svg-icons'
import { faCircleInfo} from'@fortawesome/free-solid-svg-icons'
import { faBriefcase} from'@fortawesome/free-solid-svg-icons'
import { faAddressBook} from'@fortawesome/free-solid-svg-icons'
import { faBars} from'@fortawesome/free-solid-svg-icons'




const NavBar = () => {
  const ShowMenu = () =>{
    const menu =document.querySelector(".nav-menu")
    menu.classList.toggle("active")
  }
  return (
    <>
   <nav>
     <h1 className='logo'>Trippy</h1>
     <div className='items'>
        <ul>
            
          <li><FontAwesomeIcon icon={faHouseUser} style={{color: "#0c0d0d",}} />Home</li> 
          <li><FontAwesomeIcon icon={faCircleInfo} style={{color: "#121212",}} />About</li> 
          <li> <FontAwesomeIcon icon={faBriefcase} style={{color: "#0d0d0d",}} />Services</li>
          <li><FontAwesomeIcon icon={faAddressBook} style={{color: "#141415",}} />Contact </li>
        </ul> 
        <button>Sign Up</button>
     </div>
     <button className='bars' onClick={ShowMenu}><FontAwesomeIcon icon={faBars} style={{color: "#0c0d0d"}} /></button>
   </nav>
   <div className='nav-menu'>
        <ul>
             <li><FontAwesomeIcon icon={faHouseUser} style={{color: "#0c0d0d",}} />Home</li>
             <li><FontAwesomeIcon icon={faCircleInfo} style={{color: "#121212",}} />About</li> 
            <li> <FontAwesomeIcon icon={faBriefcase} style={{color: "#0d0d0d",}} />Services</li>
            <li><FontAwesomeIcon icon={faAddressBook} style={{color: "#141415",}} />Contact </li>
         </ul> 
        <button>Sign Up</button>
     </div>

   </>
  )
}

export default NavBar
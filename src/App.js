import NavBar from './components/navbar/index'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin, faGithub, faGoogleDrive } from '@fortawesome/free-brands-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  library.add(faLinkedin, faGithub, faGoogleDrive)

  return (
    <NavBar/>
  )
}

export default App;

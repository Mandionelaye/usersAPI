import './App.css';
import UserList from './UserList';
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.min.js'

function App() {

  return (
    <>
    <div className='containe'>
             <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
  <div className="container-fluid">
    <p className="navbar-brand text-white">Utilisateurs</p>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <p className="nav-link active text-white" aria-current="page">Accuil</p>
        </li>
        <li className="nav-item">
          <p className="nav-link text-white" >Message</p>
        </li>
        <li className="nav-item">
          <p className="nav-link text-white" >parametre</p>
        </li>
      </ul>
      <form className="d-flex">
        <input  className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

    <div className="container-fluid d-flex justify-content-center mt-2">
       <UserList/>
    </div>
    </div>
    <footer className='bg-light h p-2'>liste des utilisateurs © 2023 API </footer>
   
    </>
  );
}

export default App;

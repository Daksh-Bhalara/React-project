import { Link, Outlet } from "react-router-dom"


function Layout() {

    return (
        <>
            <div className="container">
                <div className="row">
                    {/* <div className="col-2 align-middle">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-8ZwFbOB9WgVlJ2O7g4RzyJqNSzyjGY3OvA&s" className="d-block w-50 " alt="..." />
                    </div> */}
                    <div className="col-10 mb-3">
                        <nav className="navbar navbar-expand-lg bg-body-tertiary nav">
                            <div className="container-fluid">
                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <Link className="nav-link active" to={"/Home"}> Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to={"/About"}>About</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" href="#">Store</Link>
                                        </li>
                                        <li className="nav-item">
                                            <div class="dropdown">
                                                <Link class="btn " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Product
                                                </Link>
                                                <ul class="dropdown-menu">
                                                    <li><Link class="dropdown-item" to={"/Plastic"}>Plastic</Link></li>
                                                    {/* <li><a class="dropdown-item" href="#">HardWare</a></li> */}
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link " aria-disabled="true">Contect Us</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className="col nav-item m-2 add_btn">
                        <Link className="btn btn-outline-info add" aria-disabled="true" to={'/Add'}>ADD</Link>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
        
    )
}
export default Layout;
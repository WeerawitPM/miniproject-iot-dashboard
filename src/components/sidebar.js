import { Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './sidebar.css';

const Sidebar = () => {
    return (
        <body>
            <main class="d-flex flex-nowrap">
                <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                    <div class="center">
                        <img src="https://media.discordapp.net/attachments/1003000600776151141/1032690259743485993/unknown.png"></img>
                        ESWeather
                    </div>
                    <div class="position-sticky pt-3 sidebar-sticky flex-shrink-0 p-3">
                        <ul class="nav flex-column">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/"><span data-feather="home" class="align-text-bottom"></span>Home</Link>
                            </li>
                            <ul class="list-unstyled ps-0">
                                <li class="mb-1">
                                    <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                                        Dashboard
                                    </button>
                                    <div class="collapse" id="dashboard-collapse">
                                        <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                            <li><Link class="white d-inline-flex text-decoration-none rounded" to="Realtime">Realtime</Link></li>
                                            <li><Link class="white d-inline-flex text-decoration-none rounded" to="Weekly">Weekly</Link></li>
                                            <li><a class="white d-inline-flex text-decoration-none rounded">Monthly</a></li>
                                            <li><a class="white d-inline-flex text-decoration-none rounded">Annually</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="mb-1">
                                    <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#report-collapse" aria-expanded="false">
                                        Report
                                    </button>
                                    <div class="collapse" id="report-collapse">
                                        <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                            <li><a href="#" class="white d-inline-flex text-decoration-none rounded">Day</a></li>
                                            <li><a href="#" class="white d-inline-flex text-decoration-none rounded">Weekly</a></li>
                                            <li><a href="#" class="white d-inline-flex text-decoration-none rounded">Monthly</a></li>
                                            <li><a href="#" class="white d-inline-flex text-decoration-none rounded">Annually</a></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><span data-feather="layers" class="align-text-bottom"></span>Devices</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </main>
            <Outlet />
        </body>
    )
}
export default Sidebar;
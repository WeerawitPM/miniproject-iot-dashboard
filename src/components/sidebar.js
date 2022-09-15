import { Outlet, Link } from "react-router-dom";
import './sidebar.css';

const Sidebar = () => {
    return (
        <body>
            <main class="d-flex flex-nowrap">
                <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                    <div class="position-sticky pt-3 sidebar-sticky flex-shrink-0 p-3">
                        <ul class="nav flex-column">

                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/">
                                    <span data-feather="home" class="align-text-bottom"></span>
                                    Home
                                </Link>
                            </li>
                            <ul class="list-unstyled ps-0">
                                <li class="mb-1">
                                    <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                                        Dashboard
                                    </button>
                                    <div class="collapse" id="dashboard-collapse">
                                        <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                            <li><Link class="link-dark d-inline-flex text-decoration-none rounded" to="Realtime">Overview</Link></li>
                                            <li><Link class="link-dark d-inline-flex text-decoration-none rounded" to="Weekly">Weekly</Link></li>
                                            <li><a class="link-dark d-inline-flex text-decoration-none rounded">Monthly</a></li>
                                            <li><a class="link-dark d-inline-flex text-decoration-none rounded">Annually</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="mb-1">
                                    <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                                        Report
                                    </button>
                                    <div class="collapse" id="dashboard-collapse">
                                        <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                            <li><a href="#" class="link-dark d-inline-flex text-decoration-none rounded">Day</a></li>
                                            <li><a href="#" class="link-dark d-inline-flex text-decoration-none rounded">Weekly</a></li>
                                            <li><a href="#" class="link-dark d-inline-flex text-decoration-none rounded">Monthly</a></li>
                                            <li><a href="#" class="link-dark d-inline-flex text-decoration-none rounded">Annually</a></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <span data-feather="layers" class="align-text-bottom"></span>
                                    Register
                                </a>
                            </li>

                        </ul>

                        <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
                            <span>Saved reports</span>
                            <a class="link-secondary" href="#" aria-label="Add a new report">
                                <span data-feather="plus-circle" class="align-text-bottom"></span>
                            </a>
                        </h6>
                        <ul class="nav flex-column mb-2">
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <span data-feather="file-text" class="align-text-bottom"></span>
                                    Current month
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <span data-feather="file-text" class="align-text-bottom"></span>
                                    Last quarter
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <span data-feather="file-text" class="align-text-bottom"></span>
                                    Social engagement
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <span data-feather="file-text" class="align-text-bottom"></span>
                                    Year-end sale
                                </a>
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
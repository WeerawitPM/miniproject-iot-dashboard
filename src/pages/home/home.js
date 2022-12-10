import "./home.css";
import useFetch from "./datatest";
import GaugeChart from 'react-gauge-chart'

const Home = () => {
    // const [data] = useFetch("https://backend-embedded.herokuapp.com/");
    const chartStyle = {
        height: 100,
        width: 250,
        textColor: '#000000',
    };

    return (
        <body>
            <div class="container-fluid">
                <div class="row">
                    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 class="h2">Home</h1>
                            <div class="btn-toolbar mb-2 mb-md-0">
                                <div class="btn-group me-2">
                                    <button type="button" class="btn btn-sm btn-outline-secondary">Share</button>
                                    <button type="button" class="btn btn-sm btn-outline-secondary">Export</button>
                                </div>
                                <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
                                    <span data-feather="calendar" class="align-text-bottom"></span>
                                    This week
                                </button>
                            </div>
                        </div>

                        <div class="my-4 w-100" width="900" height="380">
                            <GaugeChart id="gauge-chart1" style={chartStyle} />
                        </div>

                    </main>
                </div>
            </div>
        </body>
    );
};
export default Home;
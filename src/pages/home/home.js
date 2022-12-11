import "./home.css";
import Chart from "./Chart";
import moment from "moment/moment";
import "moment/locale/th";
import Weather from "./Weather";

const Home = () => {

    setInterval(() => {
        document.getElementById("Time").innerHTML = moment().format("LTS");
    }, 1000);
    setInterval(() => {
        document.getElementById("Date").innerHTML = moment().format("dddd, DD MMMM YYYY");
    });

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
                        <div class="row">
                            <div class="col gauge-center">
                                <div class="dateTime">
                                    <p id="Time" class="p-time"></p>
                                    <p id="Date"></p>
                                </div>
                            </div>
                            <div class="col gauge-center">
                                <Weather />
                            </div>
                        </div>
                        <br></br>
                        <div class="row">
                            <div class="col gauge-center">
                                <div class="dateTime">
                                    <Chart height={'200px'} width={'300px'} chartId={'630f67ac-abe7-4912-8db3-db35526cbdbd'} maxDataAge={10} background={'tranparent'} />
                                </div>
                            </div>
                            <div class="col gauge-center">
                                <div class="dateTime">
                                    <Chart height={'200px'} width={'300px'} chartId={'630f695c-f920-41db-80e3-da5cb6cf5bab'} maxDataAge={10} background={'tranparent'} />
                                </div>
                            </div>
                        </div>

                    </main>
                </div>
            </div>
        </body>
    );
};
export default Home;
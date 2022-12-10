import Chart from "../../home/Chart.js";

const ReportDay = () => {
    // const [data] = useFetch("https://backend-embedded.herokuapp.com/");

    return (
        <body>
            <div class="container-fluid">
                <div class="row">
                    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 class="h2">ReportDay</h1>
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
                                <Chart height={'600px'} width={'550px'} chartId={'6310e78b-e4c6-4544-8915-da1bc355f94a'} maxDataAge={60} />
                            </div>
                        </div>

                    </main>
                </div>
            </div>
        </body>
    );
};
export default ReportDay;
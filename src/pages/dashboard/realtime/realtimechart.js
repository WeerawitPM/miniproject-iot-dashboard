import React, { useState, useEffect, useCallback } from "react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from "recharts";
import axios from "axios";

// const data = [
//     {
//         name: "Page A",
//         uv: 4000,
//         pv: 2400,
//         amt: 2400
//     },
//     {
//         name: "Page B",
//         uv: 3000,
//         pv: 1398,
//         amt: 2210
//     },
//     {
//         name: "Page C",
//         uv: 2000,
//         pv: 9800,
//         amt: 2290
//     },
//     {
//         name: "Page D",
//         uv: 2780,
//         pv: 3908,
//         amt: 2000
//     },
//     {
//         name: "Page E",
//         uv: 1890,
//         pv: 4800,
//         amt: 2181
//     },
//     {
//         name: "Page F",
//         uv: 2390,
//         pv: 3800,
//         amt: 2500
//     },
//     {
//         name: "Page G",
//         uv: 3490,
//         pv: 4300,
//         amt: 2100
//     }
// ];

export default function RealtimeChart() {
    const [hasError, setErrors] = useState(false);
    const [data, setData] = useState(null);

    async function fetchData() {
        try {
            // const headers = {
            //   "Content-Type": "application/json",
            //   "Access-Control-Allow-Origin": "*",
            // };
            const url = "https://backend-embedded.herokuapp.com/";
            const res = await axios.get(url);
            setData(res.data);
        } catch (err) {
            setErrors(err);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    const [opacity, setOpacity] = useState({
        Temperature_C: 1,
        Humadity: 1
    });

    const handleMouseEnter = useCallback(
        (o) => {
            const { dataKey } = o;

            setOpacity({ ...opacity, [dataKey]: 0.5 });
        },
        [opacity, setOpacity]
    );

    const handleMouseLeave = useCallback(
        (o) => {
            const { dataKey } = o;
            setOpacity({ ...opacity, [dataKey]: 1 });
        },
        [opacity, setOpacity]
    );
    return (
        <div style={{ width: "100%", height: 380 }}>
            <ResponsiveContainer>
                <AreaChart
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="Time_Seconds" />
                    <YAxis />
                    <Tooltip />
                    <Legend
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    />
                    <Area type="monotone"
                        dataKey="Humadity"
                        stroke="#8884d8"
                        strokeOpacity={opacity.Temperature_C}
                        fill="#8884d8"
                        opacity={opacity.Temperature_C}
                    />
                                        <Area
                        type="monotone"
                        dataKey="Temperature_C"
                        stackId="1"
                        stroke="#ffc658"
                        strokeOpacity={opacity.Humadity}
                        fill="#ffc658"
                        opacity={opacity.Humadity}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}
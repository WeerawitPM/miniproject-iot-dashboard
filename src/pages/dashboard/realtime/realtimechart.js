import React, { useState, useEffect, useCallback } from "react";
import {
    LineChart,
    Line,
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
//         Day: "Monday",
//         Temperature_C: 25,
//         Humadity: 80,
//     },
//     {
//         Day: "Tuesday",
//         Temperature_C: 26,
//         Humadity: 85,
//     },
//     {
//         Day: "Wednesday",
//         Temperature_C: 27,
//         Humadity: 75,
//     },
//     {
//         Day: "Thursday",
//         Temperature_C: 28,
//         Humadity: 81,
//     },
//     {
//         Day: "Friday",
//         Temperature_C: 29,
//         Humadity: 82,
//     }
// ];

export default function RealtimeChart() {
    const [hasError, setErrors] = useState(false);
    const [data, setData] = useState(null);

    setInterval(() => {
        fetchData();
    }, 60000);

    async function fetchData() {
        try {
            // const headers = {
            //   "Content-Type": "application/json",
            //   "Access-Control-Allow-Origin": "*",
            // };
            const url = "http://localhost:5000/latest";
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
        <div style={{ width: "100%", height: 550 }}>
            <ResponsiveContainer>
                <LineChart
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="AllDateTime" interval={5} angle={-45} textAnchor="end" height={150}/>
                    <YAxis type="number" domain={[0, 100]}/>
                    <Tooltip />
                    <Legend
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    />
                    <Line type="monotone"
                        dataKey="Humadity"
                        stroke="#8884d8"
                        strokeWidth={5}
                        strokeOpacity={opacity.Temperature_C}
                        fill="#8884d8"
                        opacity={opacity.Temperature_C}
                    />
                    <Line
                        type="monotone"
                        dataKey="Temperature_C"
                        stackId="1"
                        stroke="#ffc658"
                        strokeWidth={5}
                        strokeOpacity={opacity.Humadity}
                        fill="#ffc658"
                        opacity={opacity.Humadity}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
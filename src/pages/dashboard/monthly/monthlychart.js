import React, { useState, useEffect, useCallback } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from "recharts";
import axios from "axios";

export default function MonthlyChart() {
    const [hasError, setErrors] = useState(false);
    const [data, setData] = useState(null);

    async function fetchData() {
        try {
            // const headers = {
            //   "Content-Type": "application/json",
            //   "Access-Control-Allow-Origin": "*",
            // };
            const url = "http://192.168.43.3:5000/month";
            const res = await axios.get(url);
            setData(res.data);
        } catch (err) {
            setErrors(err);
        }
    }

    useEffect(() => {
        fetchData();
        console.log(data);
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
        <div style={{ width: "100%", height: 500 }}>
            <ResponsiveContainer>
                <BarChart
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="Date" />
                    <YAxis type="number" domain={[0, 100]} />
                    <Tooltip />
                    <Legend
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    />
                    <Bar
                        type="monotone"
                        dataKey="Temperature_C"
                        stackId="1"
                        stroke="#ffc658"
                        strokeOpacity={opacity.Humadity}
                        fill="#ffc658"
                        opacity={opacity.Humadity}
                    />
                    <Bar type="monotone"
                        dataKey="Humadity"
                        stroke="#8884d8"
                        strokeOpacity={opacity.Temperature_C}
                        fill="#8884d8"
                        opacity={opacity.Temperature_C}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
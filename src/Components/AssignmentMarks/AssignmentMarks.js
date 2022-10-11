import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AssignmentMarks = () => {
    const data = [
        {
            name: 'Assignment 1',
            marks: 60,
            quiz: 9,
        },
        {
            name: 'Assignment 2',
            marks: 54,
            quiz: 8,
        },
        {
            name: 'Assignment 3',
            marks: 60,
            quiz: 9,
        },
        {
            name: 'Assignment 4',
            marks: 60,
            quiz: 10,
        },
        {
            name: 'Assignment 5',
            marks: 60,
            quiz: 10,
        },
        {
            name: 'Assignment 6',
            marks: 60,
            quiz: 7,
        },
        {
            name: 'Assignment 7',
            marks: 30,
            quiz: 8,
        },
        {
            name: 'Assignment 8',
            marks: 30,
            quiz: 10
        }
    ];
    return (
        <div>
            <LineChart
                width={500}
                height={300}
                data={data}

            >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="marks" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="quiz" stroke="#82ca9d" />

            </LineChart>
        </div>
    );
};

export default AssignmentMarks;
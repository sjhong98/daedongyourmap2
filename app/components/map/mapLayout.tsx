'use client';

import { useState } from "react";
import Map from "./map";

export default function MapLayout() {
    const [selectedPoint, setSelectedPoint] = useState<string>("");

    return (
        <div className=''>
            <Map setState={setSelectedPoint} /> 
        </div>
    )
}
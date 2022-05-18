import React, { useState } from 'react'
import ReactMapGL, { Marker, Popup } from "react-map-gl"
import { getCenter } from 'geolib'

function Map({ searchResults }) {
    const coordinates = searchResults.map(item => ({ latitude: item.lat, longitude: item.long }))
    const center = getCenter(coordinates)

    const [viewport, setViewPort] = useState({
        width: "100%",
        height: "100%",
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11,
    })
    const [selectedLocation, setSelectedLocation] = useState("")


    return (
        <ReactMapGL
            mapStyle='mapbox://styles/dylanjuresa/cl3aoize6004i14p07gb4ou76'
            mapboxAccessToken={process.env.mapbox_key}
            {...viewport}
            onMove={evt => setViewPort(evt.viewState)}
        >
            {searchResults.map((result) => (
                <div key={result.long}>
                    <Marker
                        longitude={result.long}
                        latitude={result.lat}
                        offsetLeft={-20}
                        offsetTop={-10}
                    >
                        <p
                            role="img"
                            onClick={() => setSelectedLocation(result.title)}
                            className="cursor-pointer text-2xl animate-bounce"
                            aria-label="push-pin">📍</p>
                    </Marker>

                    {selectedLocation === result.title ? (
                        < Popup
                            onClose={() => setSelectedLocation("")}
                            closeOnClick={false}
                            latitude={result.lat}
                            longitude={result.long}
                        >
                            {selectedLocation}
                        </Popup>
                    ) : false}

                </div>


            ))
            }


        </ReactMapGL >)


}

export default Map
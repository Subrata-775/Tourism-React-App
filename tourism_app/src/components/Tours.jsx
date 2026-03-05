import React from 'react'
import Card from './Card'

function Tours({ tours, removeTour }) {
    return (
        <div>
            <div>
                <h2>Love with Subrata</h2>
            </div>

            <div>
                {
                    tours.map((tour) => {
                        return <Card key={tour.id} {...tour} removeTour={removeTour} />
                    })
                }
            </div>

        </div>
    )
}

export default Tours
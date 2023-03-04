import React from 'react'
import { HomeCard } from 'components/Card/HomeCards'

export default function EventSection() {
    return (
        <>
            <div className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2 className='text-center fw-bold'>Lates Events</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt consectetur, error necessitatibus consequatur repellendus cupiditate. Odit nobis voluptate recusandae laudantium ad perspiciatis? Error, accusamus quos! Esse saepe nulla facere odio.</p>
                        </div>
                    </div>

                    <div className="row d-flex justify-content-center align-items-center flex-wrap px-4">

                        <HomeCard
                            imgType="events"
                            title="A healing Holiday"
                            text="Healing Holidays are on the rise to help maximize your health and hapiness... "
                        />
                        <HomeCard
                            imgType="tech"
                            title="Spots around world"
                            text="From tofu to teahouses, here's our guide to Kyoto's best restaurant to visit... "
                        />
                        <HomeCard
                            imgType="event planning"
                            title="Skip chichen Itza"
                            text="It's remote and challenging to get, but braving the jungle and exploring these ruins..."
                        />
                        <HomeCard
                            imgType="electronics"
                            title="The best electronics"
                            text="If learning to surf has in your to-do list for a while,the good news is:it's never too late..."
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

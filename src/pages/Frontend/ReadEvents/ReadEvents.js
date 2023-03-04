import React from 'react'
import EventInfoCard from 'components/Card/EventInfoCard'

export default function ReadEvents() {
  let id = 1;
  return (
    <>
      {(() => {
        switch (id) {
          case 1:
            return (
              <EventInfoCard
                title="Healing Holidays are on the rise to help maximize your health and hapiness..."
                creator="A healing Holiday"
                creatorInfo="Founder circle"
                imgSize="800x500"
                imgType="events"
                description="With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci aspernatur ad eos aperiam? Culpa cumque atque fugiat assumenda aspernatur!"
              />
            )
          case 2:
            return (
              <EventInfoCard
                title="From tofu to teahouses, here's our guide to Kyoto's best restaurant to visit... "
                creator="Spots around world"
                creatorInfo="Founder circle"
                imgSize="800x500"
                imgType="tech"
                description="With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci aspernatur ad eos aperiam? Culpa cumque atque fugiat assumenda aspernatur!"
              />
            )
          case 3:
            return (
              <EventInfoCard
                title="It's remote and challenging to get, but braving the jungle and exploring these ruins... "
                creator="Skip chichen Itza"
                creatorInfo="Founder circle"
                imgSize="800x500"
                imgType="event planning"
                description="With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci aspernatur ad eos aperiam? Culpa cumque atque fugiat assumenda aspernatur!"
              />
            )
          case 4:
            return (
              <EventInfoCard
                title="It's remote and challenging to get, but braving the jungle and exploring these ruins..."
                creator="The best electronics"
                creatorInfo="Founder circle"
                imgSize="800x500"
                imgType="electronics"
                description="With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci aspernatur ad eos aperiam? Culpa cumque atque fugiat assumenda aspernatur!"
              />
            )

          default:
            return <h1>No event match</h1>;
        }
      })()}
    </>
  )
}

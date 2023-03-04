import React from 'react'
import Hero from './Hero'
import EventSection from './EventSection'
import EventInfoCard from 'components/Card/EventInfoCard'

export default function Index() {
  return (
    <>
      <Hero />

      <EventSection />

      <EventInfoCard
        title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi illum tempore veritatis laborum animi, repudiandae debitis, obcaecati commodi minima quas tenetur numquam error ab, maxime magnam odit officiis praesentium fugiat!"
        creator="Edward Newgate"
        creatorInfo="Founder circle"
        imgSize="1200x900"
        imgType="random"
        description="With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci aspernatur ad eos aperiam? Culpa cumque atque fugiat assumenda aspernatur!"
      />
    </>
  )
}
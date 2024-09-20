import React from 'react'
import { Navbar } from './component/Navbar'
import { Hero } from './component/Hero'
import { HomeComponent } from './component/HomeComponent'
import JobListing from './component/JobListing'
const App = () => {
  return (
    <>
   
    <Navbar/> 
   
   <Hero/>
   
   <HomeComponent/>
   
    <JobListing/>

    <section className="m-auto max-w-lg my-10 px-6">
      <a
        href="jobs.html"
        className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</a
      >
    </section>
    </>
  )
}

export default App
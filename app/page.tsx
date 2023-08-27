'use client';
import React from 'react'
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Hero from '@/components/Hero'
import SearchBar from '@/components/SearchBar'
import CustomeFilter from '@/components/CustomeFilter'
import { fetchCars } from '@/utils'
import CarCard from '@/components/CarCard'
import { fuels, yearsOfProduction } from '@/constants'
import ShowMore from '@/components/ShowMore'

export default  function Home() {
  const [allCars, setAllCars] = useState([])
  const [loading, setLoading] = useState(false);

  const [manufacturer, setManufacturer] = useState('')
  const [model, setModal] = useState('');

  const [fuel, setFuel] = useState('')
  const [year, setYear] = useState(2022)
  const [limit, setLimit] = useState(10)
  
  const getCars = async () =>{
    setLoading(true)
    try{
    const result = await fetchCars({manufacturer,year,fuel,limit, model});
    setAllCars(result)
  }catch(error){
      console.log(error)
    }finally{
      setLoading(false)
    }
  }

  useEffect(() => {
    getCars()
  }, [fuel, limit, year, manufacturer, model,])
  

  // const isEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className="home__text-container">
          <h1 className='text-4xl font-extrabold'>
            Car Catalogue
          </h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar setManufacturer={setManufacturer} setModal={setModal}/>

          <div className='home__filter-container'>
            <CustomeFilter title="fuel" options={fuels} setFilter={setFuel}/>
            <CustomeFilter title="year" options={yearsOfProduction} setFilter={setYear}/>
          </div>
        </div>

        {allCars.length === 0 ? (
          <div className='home__error-container'>
            <h2 className='text-red-600 text-xl font-bold'>Oops, no results</h2>
          </div>
        ) : (
          <section>
            <div className='home__cars-wrapper'>
              {allCars.map(car => <CarCard car={car}/>)}
            </div>
            {
              loading && 
              <div className='mt-16 w-full flex-center'>
                <Image src='/loader.svg'
              alt='loader'
              width={50}
              height={50}
              className='object-contain' />
              </div>
            }
            <ShowMore
              pageNumber={limit / 10}
              isNext={limit > allCars.length}
              setLimit={setLimit}
            />
          </section>
        )}

      </div>

    </main>
  )
}

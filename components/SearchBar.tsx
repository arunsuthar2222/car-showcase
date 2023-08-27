"use client"
import Image from 'next/image'
import React, {useState} from 'react'
import SearchManufacturer from './SearchManufacturer'
import { useRouter } from 'next/navigation'
import { manufacturers } from '@/constants'
import { SearchBarProps } from '@/types'
const SearchButton = ({otherClasses}: {otherClasses: string}) =>{
  return (
    <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
     <Image src='/magnifying-glass.svg' alt='maginifying glass' width={40} height={40} className='object-contain'/>
    </button>
  )
}

const SearchBar = ({setManufacturer, setModal}: SearchBarProps) => {
    const router = useRouter()
    const [searchManufacturer, setSearchManufacturer] = useState('')
    const [searchModel, setSearchModel] = useState('')
    
    // const updateSearchParams = () =>{
    //   const searchParams = new URLSearchParams(window.location.search);

    //   if(searchModel){
    //     searchParams.set('model', searchModel.toLocaleLowerCase())
    //   }else{
    //     searchParams.delete('model')
    //   }     
    //   if(searchManufacturer){
    //     setManufacturer('manufacturer', searchManufacturer.toLocaleLowerCase())
    //   }else{
    //     searchParams.delete('manufacturer')
    //   }

    //   const newPathname = `${window.location.pathname}?${searchParams.toString()}`
    //   router.push(newPathname)

    // }
    
    const handleSearch = (e:React.FormEvent<HTMLFormElement>) =>{

     e.preventDefault();
     if(searchManufacturer === '' && searchModel === ''){
        return alert('Please fill search')
     }
     setModal(searchModel)
     setManufacturer(searchManufacturer)
    }

  return (
    <form className='searchbar' onSubmit={handleSearch}>
     <div className="searchbar__item">
        <SearchManufacturer setManufacturer={setSearchManufacturer} manufacturer={searchManufacturer}/>
        <SearchButton otherClasses='sm:hidden' />
     </div>
     <div className='searchbar__item'>
      <Image src='/model-icon.png' width={25} height={25} className='absolute w-[20px] h-[20px] ml-4' alt='car model'/>
      <input type='text' name='model' value={searchModel} onChange={(e) => setSearchModel(e.target.value)} placeholder='Tiguan' className='searchbar__input'/>
      <SearchButton otherClasses='sm:hidden'/>
     </div>
     <SearchButton otherClasses='max-sm:hidden'/>
    </form>
  )
}

export default SearchBar
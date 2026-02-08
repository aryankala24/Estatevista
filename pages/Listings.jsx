import { useState,useEffect } from "react";
import { useProperties } from "../context/PropertyContext";
import PropertyCard from "../components/PropertyCard";
import FilterBar from "../components/FilterBar";
export default function Listings(){
 const {properties}=useProperties();
 const [filters,setFilters]=useState({query:""});
 const [filtered,setFiltered]=useState(properties);
 useEffect(()=>{
  setFiltered(properties.filter(p=>p.address.toLowerCase().includes(filters.query.toLowerCase())));
 },[filters,properties]);
 return(<section className='mx-auto max-w-7xl p-4'>
  <h1 className='mb-6 text-3xl font-semibold'>Property Listings</h1>
  <FilterBar filters={filters} setFilters={setFilters}/>
  {filtered.length===0? <p className='text-gray-600'>No properties match your search.</p> :
   <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>{filtered.map(p=><PropertyCard key={p.id} property={p}/>)}</div>}
 </section>);
}

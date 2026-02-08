export default function FilterBar({filters,setFilters}){
 return(<section className='mb-6 flex flex-wrap gap-4'>
  <input type='text' placeholder='Search address or city…' className='flex-1 rounded border p-2' value={filters.query} onChange={e=>setFilters({...filters,query:e.target.value})}/>
 </section>);
}

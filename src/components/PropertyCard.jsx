import { Link } from "react-router-dom";
export default function PropertyCard({property}){
 const {id,title,address,price,image,bedrooms,bathrooms}=property;
 return(<div className='rounded-lg border bg-white shadow-sm transition hover:shadow-lg'>
  <img src={image} alt={title} className='h-48 w-full rounded-t-lg object-cover'/>
  <div className='space-y-1 p-4'>
   <h3 className='text-lg font-semibold'>{title}</h3>
   <p className='text-sm text-gray-500'>{address}</p>
   <p className='font-medium text-primary'>{price}</p>
   <p className='text-sm text-gray-500'>{bedrooms} bd • {bathrooms} ba</p>
   <Link to={`/property/${id}`} className='mt-2 inline-block rounded bg-primary px-3 py-1 text-white'>View Details</Link>
  </div>
 </div>);
}

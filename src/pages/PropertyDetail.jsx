import { useParams } from "react-router-dom";
import { useProperties } from "../context/PropertyContext";
export default function PropertyDetail(){
 const {id}=useParams();
 const {properties}=useProperties();
 const property=properties.find(p=>p.id===Number(id));
 if(!property)return<p className='p-4'>Property not found.</p>;
 const {title,address,price,image,description,bedrooms,bathrooms}=property;
 return(<section className='mx-auto max-w-5xl p-4'>
  <img src={image} alt={title} className='mb-4 h-80 w-full rounded-lg object-cover'/>
  <h1 className='mb-2 text-3xl font-bold'>{title}</h1>
  <p className='mb-1 text-gray-500'>{address}</p>
  <p className='mb-4 text-xl font-semibold text-primary'>{price}</p>
  <div className='mb-6 flex gap-4 text-gray-700'><span>{bedrooms} Bedrooms</span><span>{bathrooms} Bathrooms</span></div>
  <p className='leading-relaxed'>{description}</p>
 </section>);
}

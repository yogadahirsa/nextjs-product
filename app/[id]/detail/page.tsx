import Image from "next/image";
import Link from 'next/link';
import { fetchSingleProduct } from '@/app/lib/data';

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  
  const data = await fetchSingleProduct(id);
  console.log(data);

  return (
    <>
      <div className="flex justify-between m-3">
        <div>Detail Product</div>
        <button className="border bg-red-200">
          <Link href="/">Back</Link> 
        </button>
      </div>
      <ul className="bg-gray-200 m-3 p-3">
        <li>Title: {data.title}</li> 
        <li>Description: {data.desription}</li> 
        <li>Category: {data.category}</li> 
        <li>Price: {data.price}</li> 
        <li>Images: 
          {data.images?.map((item) => (
            <Image 
              key={item} 
              src={item} 
              width={200}
              height={200}
              alt="Product Images"
            />        
          ))}
        </li> 
      </ul>
    </> 
  )
}

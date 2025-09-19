'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';

type SelectProps = {
  data: [],
};

export default function Select({data}: SelectProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleChange(pilih: string) {
    const params = new URLSearchParams(searchParams);
    if (pilih && pilih !== 'all') {
      params.set('query', pilih);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <>
      <label>Filter:</label>
      <select onChange={(e) => handleChange(e.target.value)} className="border">
        <option disabled>Choose Category</option> 
        <option value='all'>All</option> 
        {data?.map((item)=>(
          <option 
            value={item} key={item}>{item}
          </option> 
        ))}
      </select> 
    </>
  )
}

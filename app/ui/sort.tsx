'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default function Sort() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleChange(pilih: string) {
    const params = new URLSearchParams(searchParams);
    if (pilih) {
      params.set('sort', pilih);
    } else {
      params.delete('sort');
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <>
      <label>Sort:</label>
      <select onChange={(e) => handleChange(e.target.value)} className="border">
        <option value="">All</option> 
        <option value="asc">Lower Price</option> 
        <option value="desc">Highest Price</option> 
      </select> 
    </>
  )
}

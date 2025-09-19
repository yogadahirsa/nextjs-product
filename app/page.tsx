import Image from "next/image";
import { 
  fetchProducts, 
  fetchCategories,
  fetchProductsByCategory,
  sortData,
} from '@/app/lib/data';
import Table from '@/app/ui/table';
import Select from '@/app/ui/select';
import Sort from '@/app/ui/sort';

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const sort = searchParams?.sort || '';

  let data;
  let products;

  if (query) {
    data = await fetchProductsByCategory(query);
  }
  else {
    data = await fetchProducts();
  }

  products = data.products; 

  if (sort) {
    products = await sortData(sort, products); 
  }

  const category = await fetchCategories();
  
  return (
    <>
      <Select data={category} />
      <Sort />
      <Table data={products} />
    </>
  );
}

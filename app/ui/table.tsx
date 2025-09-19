import { ProductType } from '@/app/lib/definition';
import Image from 'next/image';
import Link from 'next/link';

type TableProps = {
  data: ProductType[];
};

export default function Table({ data }: TableProps) {
  return (
    <table className="border m-3">
      <thead>
        <tr className="border">
          <th className="border">ID</th>
          <th className="border">Title</th>
          <th className="border">Description</th>
          <th className="border">Price</th>
          <th className="border">Pic</th>
          <th className="border">Detail</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((item) => (
          <tr key={item.id} className="border">
            <td className="border">{item.id}</td>
            <td className="border">{item.title}</td>
            <td className="border">{item.description}</td>
            <td className="border">{item.price}</td>
            <td className="border bg-green-200">
              <Image
                src={item.thumbnail}
                width={20}
                height={20}
                alt="thumbnail"
              />
            </td>
            <td className="border bg-yellow-200 cursor-pointer hover:font-bold">
              <Link
                href={`/${item.id}/detail`}
              >Detail</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

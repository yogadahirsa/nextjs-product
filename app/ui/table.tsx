import { ProductType } from '@/app/lib/definition';
import Image from 'next/image';

type TableProps = {
  data: ProductType[];
};

export default function Table({ data }: TableProps) {
  return (
    <table className="border m-3">
      <thead>
        <tr className="border">
          <th>ID</th>
          <th>Title</th>
          <th>Description</th>
          <th>Price</th>
          <th>Pic</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((item) => (
          <tr key={item.id} className="border">
            <td className="border">{item.id}</td>
            <td className="border">{item.title}</td>
            <td className="border">{item.description}</td>
            <td className="border">{item.price}</td>
            <td className="border">
              <Image
                src={item.thumbnail}
                width={20}
                height={20}
                alt="thumbnail"
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

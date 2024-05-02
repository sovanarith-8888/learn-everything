"use client"
import { ProductType } from '@/lib/definition';
import { useEffect, useState } from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';
const Dashboard = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  // fetch product
  useEffect(()=>{
    setLoading(true)
    fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => {setProducts(data) ;setLoading(false)})
    .catch(err => {
      console.error(err)
      setLoading(false)
    })
  },[])

  const columns:TableColumn<ProductType>[] = [
    {
      name: 'Product Title',
      selector: row => row.title,
    },
    {
      name: 'Price',
      selector: row => row.price,
      
    },
    // {
    //   name: 'Description',
    //   selector: row => row.description,
    // },
    {
      name: "Image",
      selector: (row): JSX.Element | any => <img src={row.image} alt="product image" className='w-16 h-16' />
    },
    {
      name: "Controll",
      selector: (row): JSX.Element | any => <div>
        <button
        onClick={()=> console.log(row)} className='text-blue-600 border border-1 p-2'>View</button>
        <button className='text-yellow-300 border border-1 p-2'>Edit</button>
        <button className='text-danger-600 border border-1 p-2'>Delete</button>
        
      </div>
    }
  ];
  
  const data = [
    {
      id: 1,
      title: 'Beetlejuice',
      year: '1988',
    },
    {
      id: 2,
      title: 'Ghostbusters',
      year: '1984',
    },
    {
      id: 3,
      title: 'KhmerGhost',
      year: '1984',
    },
    {
      id: 4,
      title: 'The Uma',
      year: '1984',
    },
  ]
  
  return (
    <>
      <DataTable
        className='w-[100%]'
			  columns={columns}
			  data={products}
        progressPending={loading}
        pagination
		  />
    </>
  )
}

export default Dashboard
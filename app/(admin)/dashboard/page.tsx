"use client"
import { ProductType } from '@/lib/definition';
import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
const Dashboard = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  // fetch product
  useEffect(()=>{
    setLoading(true)
    fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => setProducts(data))
    .catch(err => {
      console.err
    })
  },[])

  const columns = [
    {
      name: 'Title',
      selector: row => row.title,
      sortable: true,
    },
    {
      name: 'Year',
      selector: row => row.year,
      sortable: true,
    },
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
			  columns={columns}
			  data={data}
		  />
    </>
  )
}

export default Dashboard
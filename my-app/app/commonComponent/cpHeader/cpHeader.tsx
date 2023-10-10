'use client'
 
import {} from 'react'
import Link from "next/link";

  // async function getheaderData() {
  //     let response = await fetch("http://localhost:3000/api/header");
  //     response = await response.json();
  //     console.log(response, "response");
  //     return response;
  //   }

    const  getheaderData = async () =>{
    const res = await fetch("http://localhost:3000/api/header");
    return res.json();
   }

const CpHeader = async ()=>{
    const headerData = await getheaderData();
    console.log(headerData, "data");

    return(
        <>
        <div className='cp-header'>
        <ul className='sidebar-list'>
        {headerData.map((item, index) => {
              return (
                <li  key={index}>
                   <Link 
                    href={{
                      pathname: `/${item.menuLink}`,
                    }}
                    className='sidebar-list-item'
                  >
                    {item.menuItem}
                  </Link>
                  
                </li>
              );
            })}
        </ul>
        </div>
        </>
    )
}

export default CpHeader
 
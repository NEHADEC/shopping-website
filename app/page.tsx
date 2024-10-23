//import React from 'react'
// import Hero from './components/Hero'
// import Newproducts from './components/Newproducts'
// import Testimonial from './components/Testimonial'

// export default function Home(){
//   return(
    // <main>
    //   <Hero />
    //   <Newproducts />
    //   <Testimonial />
    // </main>
 // )
//}
// pages/_app.tsx
// pages/_app.tsx




// app/page.tsx
// app/page.tsx
'use client'
import React from 'react';
import Hero from './components/Hero'; // Ensure correct path
import Newproducts from './components/Newproducts'; // Ensure correct path
import Testimonial from './components/Testimonial'; // Ensure correct path

export default function Home() {
  return (
    <main>
      <Hero />
      <Newproducts />
      <Testimonial />
    </main>
  );
}

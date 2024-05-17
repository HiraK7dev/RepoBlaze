import React from 'react'
import Navbar from '../components/Navbar'

function Create() {
  return (
    <>
    <Navbar/>
    <div className='h-full w-full flex justify-center items-start'>
      {/* Text Editor */}
      <div className='w-1/2 h-full p-4 pr-2'>
        <div className='bg-neutral w-full h-[89dvh] rounded-xl p-8 font-mono overflow-auto'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, fuga! Aliquam, temporibus. Totam vel enim molestiae at ipsum veniam, dicta cum accusamus omnis! Ad totam cumque natus? Voluptatem, voluptate commodi!
        </div>
      </div>
      {/* Code Generator */}
      <div className='w-1/2 h-full p-4 pl-2'>
        <div className="mockup-code h-[89dvh] pl-4">
          <pre><code>without prefix</code></pre>
        </div>
      </div>
    </div>
    </>
  )
}

export default Create
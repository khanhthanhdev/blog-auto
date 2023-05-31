import React from 'react'

type Props = {}

const Footer = () => {
  return <footer className='bg-wh-900 text-wh-50 py-10 px-10'>  
        <div className='justify-between mx-auto gap-16 sm:flex'>
            <div className='mt-16 basis-1/2 sm:mt-0'>
                <h4 className='font-bold'>BLOG OF THE FUTURE</h4>
                <p className='my-5'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Dolorem laboriosam velit earum inventore totam! Ratione unde accusamus repudiandae voluptates! 
                    Officia sequi eius nihil temporibus saepe? Voluptates deserunt dolor optio? Perferendis.
                </p>
                <p>Khanhthanhdev All Rights Reserved</p>
            </div>
            <div className='mt-16 basis-1/4 sm:mt-0'>
                <h4 className='font-bold'>Links</h4>
                <p className='my-5'>
                    Some link here
                </p>
                <p>Khong biet dien gi</p>
            </div>
            <div className='mt-16 basis-1/4 sm:mt-0'>
                <h4 className='font-bold'>Contact Us</h4>
                <p className='my-5'>
                    thanhkt27507@gmail.com
                </p>
                <p>+84 364491720</p>
            </div>
        </div>
    
    </footer>
}

export default Footer
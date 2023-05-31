import React from 'react'
import Image from 'next/image';



type Props = {
    isDark ?: boolean;

}

const SocialLinks = ({isDark = false}: Props) => {
  return (
    <div className='flex justify-between items-center gap-7'>
        <a href="https://twitter.com" target="-blank" rel="noopener noreferrer">
            <Image 
                className={`${isDark ? "brightness-0" : ""}  hover:opacity-50`}
                alt="twitter"
                src={"/public/assets/social_twitter.png"}
                width={20}
                height={20}
            />
        </a>
        <a href="https://google.com" target="-blank" rel="noopener noreferrer">
            <Image 
                className={`${isDark ? "brightness-0" : ""}  hover:opacity-50`}
                alt="google"
                src={"/public/assets/social_twitter.png"}
                width={20}
                height={20}
            />
        </a>
        <a href="https://github.com/khanhthanhdev" target="-blank" rel="noopener noreferrer">
            <Image 
                className={`${isDark ? "brightness-0" : ""}  hover:opacity-50`}
                alt="github"
                src={"/public/assets/social_twitter.png"}
                width={20}
                height={20}
            />
        </a>
        <a href="https://facebook.com/khanhthanhdev" target="-blank" rel="noopener noreferrer">
            <Image 
                className={`${isDark ? "brightness-0" : ""}  hover:opacity-50`}
                alt="facebook"
                src={"/public/assets/social_twitter.png"}
                width={20}
                height={20}
            />
        </a>
    </div>
  )
}

export default SocialLinks
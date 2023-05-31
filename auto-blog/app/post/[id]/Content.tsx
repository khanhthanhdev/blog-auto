"use client";

import React, {useState } from 'react'
import { FormattedPost } from '@/app/types';
import { XMarkIcon } from "@heroicons/react/24/solid"


type Props = {
    post: FormattedPost;
}

const Content = ({post}: Props) => {

    const [isEditable, setIsEditable] = useState<boolean>(false)

    const [title, setTitle] = useState<string>(post.title)

    const [titleError, setTitleError] = useState<string>("")

    const [content, setContent] = useState<string>(post.content)

    const [contentError, setContentError] = useState<string>("")



  return <div className='prose w-full max-x-full mb-10'>
    <h5 className="text-wh-300">{`Home > ${post.category} > ${post.title}`}</h5>

    <div className='flex justify-between items-center'>
        <h4 className='bg-accent-orange py-2 px-5 text-wh-900 text-sm font-bold'>{post.category}</h4>
    <div className='mt-4'>
        {isEditable ? (
            <div className='flex justify-between gap-3'>
                <button onClick = {() => console.log(`cancle edit`)}
            </div>
        )}
    </div>

    </div>
  </div>

}

export default Content
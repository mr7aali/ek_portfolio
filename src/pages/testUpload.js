

import dynamic from 'next/dynamic';
import React from 'react';
const MediaUploader = dynamic(() => import("@/components/HomePage/MediaUploader"));

const TestUploadPage = () => {
    return (
        <div className='flex justify-center items-center h-[100vh]'>
            {/* <MediaUploader />*/}
            <div>
                <h1>Video Player </h1>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/5JIZ7FtJiGg?si=0IiT-wU3LMXWtZUH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    );
};

export default TestUploadPage;
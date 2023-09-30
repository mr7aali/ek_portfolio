
import dynamic from 'next/dynamic';
import React from 'react';

const MediaUploader = dynamic(() => import('@/components/sheared/MediaUploader'), { ssr: false })
const TestUploadPage = () => {
    return (
        <div className='flex justify-center items-center h-[100vh]'>
            <MediaUploader />
        </div>
    );
};

export default TestUploadPage;
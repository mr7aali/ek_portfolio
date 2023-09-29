import MediaUploader from "@/components/sheared/MediaUploader";
import axios from "axios";
import React, { useState } from "react";






const VideoUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);


  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };





  return (
    <>
    <MediaUploader/>
    </>
  );
};

export default VideoUploader;

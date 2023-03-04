import { DragEventHandler, useRef, useState } from "react";
import ImgAddBanner from "image/add-banner.png";
import Image from "next/image";
import Modal from "@/components/modal";

const ChooseBanner = () => {
    const [file, setFile] = useState(null);
    const [dragging, setDragging] = useState(false);
  
    const fileInputRef = useRef<HTMLInputElement>(null);
    
    const handleDragOver = (event: any) => {
        event.preventDefault();
        setDragging(true);
      };
    
      const handleDragLeave = () => {
        setDragging(false);
      };
    
      const handleDrop = (event: any) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        setFile(file);
        setDragging(false);
      };
    
      const handleFileSelect = (event: any) => {
        const file = event.target.files[0];
        setFile(file);
      };

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    //   onClick={() => fileInputRef?.current?.click()}
    >
      <Image
        className="max-w-lg cursor-pointer"
        src={ImgAddBanner}
        alt="ImgAddBanner"
      />
      <input
        ref={fileInputRef}
        id="dropzone-file"
        type="file"
        className="hidden"
        accept="image/*"
        onChange={handleFileSelect}
        multiple
      />
     {/* Choose a banner modal  */}
     <Modal>
        <div className=" h-96 w-96 p-4">
            <h3 className="text-heading-3 text-gray">Choose a banner</h3>
        </div>
     </Modal>
    
    </div>
  );
};

export default ChooseBanner;

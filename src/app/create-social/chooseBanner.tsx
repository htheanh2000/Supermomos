import { DragEventHandler, useRef, useState } from "react";
import ImgAddBanner from "image/add-banner.png";
import Image from "next/image";
import Modal from "@/components/modal";
import Icon from "@/components/icon";
import Button from "@/components/button";
import { Field, useField } from "formik";

interface IProps {
  value: unknown;
  onChange: (text:string) => void;
}

const ChooseBanner = ({value, onChange}: IProps) => {
  const [file, setFile] = useState<number>();
  const [dragging, setDragging] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const size = 10;
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handlePickBanner = (item: number) => {
    setIsOpen(false);
    setFile(item);
    onChange(`${process.env.NEXT_PUBLIC_S3_BASE_URL}/banner_${item}.jpg`)
  };

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
    >
      {file ? (
        <img
          loading="lazy"
          onClick={() => setIsOpen(true)}
          className="cursor-pointer bg-contain w-[500px] rounded-tl-[32px] rounded-br-[32px] "
          src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/banner_${file}.jpg`}
          alt="random image"
        />
      ) : (
        <Image
          className="max-w-lg cursor-pointer"
          src={ImgAddBanner}
          alt="ImgAddBanner"
          onClick={() => setIsOpen(true)}
        />
      )}
      
      {/* <input
        ref={fileInputRef}
        id="dropzone-file"
        type="file"
        className="hidden"
        accept="image/*"
        onChange={handleFileSelect}
        multiple
      /> */}
      {/* Choose a banner modal  */}
      {isOpen && (
        <Modal>
          <div className="">
            <div className="flex justify-between  p-4 ">
              <h3 className="text-heading-3 font-bold text-gray">
                Choose a banner {isOpen ? "true " : "flase"}
              </h3>
              <Icon onClick={() => setIsOpen(false)} size="lg" name="close" />
            </div>
            <div className="w-full border-b-2 h-1  border-gray " />
            <div className="min-h-[600px] overflow-y-scroll">
            <div className="px-4 grid grid-cols-6 grid-flow-row gap-1 justify-items-center items-center  my-4 ">
              {Array.from(Array(size).keys()).map((item, index) => (
                <img
                  key={item}
                  loading="lazy"
                  onClick={() => handlePickBanner(index+1)}
                  className="cursor-pointer bg-contain w-48 h-32"
                  src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/banner_${index+1}.jpg`}
                  alt="random image"
                />
              ))}
            </div>
            </div>
            
            <div className="w-full border-b-2 h-1  border-gray" />
            <div className="flex float-right p-4">
              <Button style="secondary" className="w-20">
                Close
              </Button>
              <Button className="w-20">Save</Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ChooseBanner;

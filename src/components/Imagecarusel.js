import React, {useRef, useState} from 'react';
import {Carousel} from "antd";
import ModalImage from "react-modal-image";
const ImageCarousel = ({ imageUrls }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
    const imageRef = useRef(null); // 创建一个ref引用

    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNextSlide = () => {
        setCurrentSlide(currentSlide + 1);
    };

    const handlePrevSlide = () => {
        setCurrentSlide(currentSlide - 1);
    };

    const handleImageClick = (index) => {
        setSelectedImage(imageUrls[index]);
        const imageElement = imageRef.current; // 获取引用的DOM元素
        if (imageElement) {
            const rect = imageElement.getBoundingClientRect(); // 获取位置信息
            const top = rect.top + window.scrollY;
            const left = rect.left + window.scrollX + rect.width / 2;
            setModalPosition({ top, left });
        }

    };

    const closeModal = () => {
        setSelectedImage(imageUrls[0]);
    };
    return (
            <div className="centered-div">
                {selectedImage && (
                    <div className="modal-image-container" style={{ top: modalPosition.top, left: modalPosition.left }}>
                        <ModalImage
                            small={selectedImage}
                            large={selectedImage}
                            alt="Selected Image"
                            onClose={closeModal}
                            imageBackgroundColor="transparent"
                            hideDownload={true}
                            hideZoom={true}
                            hideRotate={true}
                            className="modal-image"
                        />
                    </div>
                )
                }
                <Carousel autoplay={true}  slidesToShow={3} slidesPerRow={1} current={currentSlide} className="image-gallery">
                    {imageUrls.map((url, index) => (
                        <div key={index}   className="image-container">
                            <img src={url} alt={`Image ${index + 1}`}  onClick={() => handleImageClick(index)}
                                 className="image-container"
                                 ref={imageRef} // 将引用绑定到图片元素
                            />
                        </div>
                    ))}
                </Carousel>

            </div>



    );
};

export  default  ImageCarousel;

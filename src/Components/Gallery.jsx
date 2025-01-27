import React from "react";
import "../styles/gallery.css";
import gateway from "../assets/PackagesImages/gateway.jpg";
import swatroad from "../assets/PackagesImages/swatroad.jpg";
import mesmerizingBeauty from "../assets/PackagesImages/greenerymountains.jpg";
import travel from "../assets/Valley images/travel.jpg";

const Gallery = () => {
  return (
    <>
      <div className="py-6 bg-white dark:bg-gray-800 sm:py-8 lg:py-12 font-Manrope">
        <div className="h-auto px-4 mx-auto max-w-screen-2xl md:px-8">
          <div className="flex items-center justify-between gap-8 mb-4 sm:mb-8 md:mb-12">
            <div className="flex flex-col items-start gap-4">
              <h1 className="w-full mb-4 text-4xl font-bold text-center text-slate-800 xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-Manrope animate-fadeInFromLeft">
                Photo's Gallery
              </h1>

              <p className="w-full text-slate-800 md:block font-Manrope xs:text-sm sm:text-md md:text-lg lg:text-xl xl:text-xl">
                Welcome to the scenic wonders of Swat Valley, often called the
                "Switzerland of the East." This gallery showcases breathtaking
                views of lush green valleys, snow-capped mountains,
                crystal-clear rivers, and serene lakes that will leave you
                mesmerized. <br /> Swat Valley is a paradise for couples seeking
                a romantic getaway, a serene retreat for local travelers, and a
                captivating destination for international adventurers. Whether
                you're looking to explore historical sites, indulge in thrilling
                adventures, or simply immerse yourself in nature's beauty, Swat
                Valley offers something special for everyone.
                <br /> Our tours are tailored to provide unforgettable
                experiences, from luxury stays and guided treks to personalized
                services designed just for you. Let these images inspire your
                journey and take the first step towards creating cherished
                memories with us.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
            <a
              href="#"
              className="relative flex items-end h-48 overflow-hidden bg-gray-100 rounded-lg shadow-lg group md:h-80"
            >
              <img
                src={gateway}
                loading="lazy"
                alt="Photo by Minh Pham"
                className="absolute inset-0 object-center w-full h-full transition duration-200 object-fit group-hover:scale-110"
              />

              <div className="absolute inset-0 opacity-50 pointer-events-none bg-gradient-to-t from-gray-800 via-transparent to-transparent"></div>

              <span className="relative inline-block mb-3 ml-4 text-sm text-white md:ml-5 md:text-lg">
                Gateway to Swat Valley
              </span>
            </a>

            <a
              href="#"
              className="relative flex items-end h-48 overflow-hidden bg-gray-100 rounded-lg shadow-lg group md:col-span-2 md:h-80"
            >
              <img
                src={swatroad}
                loading="lazy"
                alt="Photo by Magicle"
                className="absolute inset-0 object-cover object-center w-full h-full transition duration-200 group-hover:scale-110"
              />

              <div className="absolute inset-0 opacity-50 pointer-events-none bg-gradient-to-t from-gray-800 via-transparent to-transparent"></div>

              <span className="relative inline-block mb-3 ml-4 text-sm text-white md:ml-5 md:text-lg">
                Enchanting Roads with Heights
              </span>
            </a>

            <a
              href="#"
              className="relative flex items-end h-48 overflow-hidden bg-gray-100 rounded-lg shadow-lg group md:col-span-2 md:h-80"
            >
              <img
                src={mesmerizingBeauty}
                loading="lazy"
                alt="Photo by Martin Sanchez"
                className="absolute inset-0 object-cover object-center w-full h-full transition duration-200 group-hover:scale-110"
              />

              <div className="absolute inset-0 opacity-50 pointer-events-none bg-gradient-to-t from-gray-800 via-transparent to-transparent"></div>

              <span className="relative inline-block mb-3 ml-4 text-sm text-white md:ml-5 md:text-lg">
                Mesmerizing Greenery & Bliss Beauty
              </span>
            </a>

            <a
              href="#"
              className="relative flex items-end h-48 overflow-hidden bg-gray-100 rounded-lg shadow-lg group md:h-80"
            >
              <img
                src={travel}
                loading="lazy"
                alt="Photo by Lorenzo Herrera"
                className="absolute inset-0 object-cover object-center w-full h-full transition duration-200 group-hover:scale-110"
              />

              <div className="absolute inset-0 opacity-50 pointer-events-none bg-gradient-to-t from-gray-800 via-transparent to-transparent"></div>

              <span className="relative inline-block mb-3 ml-4 text-sm text-white md:ml-5 md:text-lg">
                Enchanting places with Heights
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* beautiful grid */}
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="grid gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <p className="heading">Tour's Before</p>
      <div className="gallery-image">
        <div className="img-box">
          <img src="https://picsum.photos/350/250?image=444" alt="" />
          <div className="transparent-box">
            <div className="caption">
              <p>Library</p>
              <p className="opacity-low">Architect Design</p>
            </div>
          </div>
        </div>
        <div className="img-box">
          <img src="https://picsum.photos/350/250/?image=232" alt="" />
          <div className="transparent-box">
            <div className="caption">
              <p>Night Sky</p>
              <p className="opacity-low">Cinematic</p>
            </div>
          </div>
        </div>
        <div className="img-box">
          <img src="https://picsum.photos/350/250/?image=431" alt="" />
          <div className="transparent-box">
            <div className="caption">
              <p>Tea Talk</p>
              <p className="opacity-low">Composite</p>
            </div>
          </div>
        </div>
        <div className="img-box">
          <img src="https://picsum.photos/350/250?image=474" alt="" />
          <div className="transparent-box">
            <div className="caption">
              <p>Road</p>
              <p className="opacity-low">Landscape</p>
            </div>
          </div>
        </div>
        <div className="img-box">
          <img src="https://picsum.photos/350/250?image=344" alt="" />
          <div className="transparent-box">
            <div className="caption">
              <p>Sea</p>
              <p className="opacity-low">Cityscape</p>
            </div>
          </div>
        </div>
        <div className="img-box">
          <img src="https://picsum.photos/350/250?image=494" alt="" />
          <div className="transparent-box">
            <div className="caption">
              <p>Vintage</p>
              <p className="opacity-low">Cinematic</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;

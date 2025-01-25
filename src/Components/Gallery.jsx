import React from "react";
import "../styles/gallery.css";

const Gallery = () => {
  return (
    <>
      <div className="py-6 bg-white dark:bg-gray-800 sm:py-8 lg:py-12">
        <div className="h-auto px-4 mx-auto max-w-screen-2xl md:px-8">
          <div className="flex items-center justify-between gap-8 mb-4 sm:mb-8 md:mb-12">
            <div className="flex flex-col items-start gap-4">
              <h2 className="text-5xl font-bold text-slate-800 lg:text-5xl ">
                Gallery
              </h2>

              <p className="hidden max-w-screen-sm text-gray-500 dark:text-gray-300 md:block">
                This is a section of some simple filler text, also known as
                placeholder text. It shares some characteristics of a real
                written text.
              </p>
            </div>

            {/* <a
              href="#"
              className="inline-block px-4 py-2 text-sm font-semibold text-center text-gray-500 transition duration-100 bg-white border rounded-lg outline-none dark:bg-gray-700 dark:border-none dark:text-gray-200 ring-indigo-300 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"
            >
              More
            </a> */}
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
            <a
              href="#"
              className="relative flex items-end h-48 overflow-hidden bg-gray-100 rounded-lg shadow-lg group md:h-80"
            >
              <img
                src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
                loading="lazy"
                alt="Photo by Minh Pham"
                className="absolute inset-0 object-cover object-center w-full h-full transition duration-200 group-hover:scale-110"
              />

              <div className="absolute inset-0 opacity-50 pointer-events-none bg-gradient-to-t from-gray-800 via-transparent to-transparent"></div>

              <span className="relative inline-block mb-3 ml-4 text-sm text-white md:ml-5 md:text-lg">
                VR
              </span>
            </a>

            <a
              href="#"
              className="relative flex items-end h-48 overflow-hidden bg-gray-100 rounded-lg shadow-lg group md:col-span-2 md:h-80"
            >
              <img
                src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=1000"
                loading="lazy"
                alt="Photo by Magicle"
                className="absolute inset-0 object-cover object-center w-full h-full transition duration-200 group-hover:scale-110"
              />

              <div className="absolute inset-0 opacity-50 pointer-events-none bg-gradient-to-t from-gray-800 via-transparent to-transparent"></div>

              <span className="relative inline-block mb-3 ml-4 text-sm text-white md:ml-5 md:text-lg">
                Tech
              </span>
            </a>

            <a
              href="#"
              className="relative flex items-end h-48 overflow-hidden bg-gray-100 rounded-lg shadow-lg group md:col-span-2 md:h-80"
            >
              <img
                src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=1000"
                loading="lazy"
                alt="Photo by Martin Sanchez"
                className="absolute inset-0 object-cover object-center w-full h-full transition duration-200 group-hover:scale-110"
              />

              <div className="absolute inset-0 opacity-50 pointer-events-none bg-gradient-to-t from-gray-800 via-transparent to-transparent"></div>

              <span className="relative inline-block mb-3 ml-4 text-sm text-white md:ml-5 md:text-lg">
                Dev
              </span>
            </a>

            <a
              href="#"
              className="relative flex items-end h-48 overflow-hidden bg-gray-100 rounded-lg shadow-lg group md:h-80"
            >
              <img
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600"
                loading="lazy"
                alt="Photo by Lorenzo Herrera"
                className="absolute inset-0 object-cover object-center w-full h-full transition duration-200 group-hover:scale-110"
              />

              <div className="absolute inset-0 opacity-50 pointer-events-none bg-gradient-to-t from-gray-800 via-transparent to-transparent"></div>

              <span className="relative inline-block mb-3 ml-4 text-sm text-white md:ml-5 md:text-lg">
                Retro
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
      <p className="heading">CSS Gallery</p>
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

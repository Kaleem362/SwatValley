import React from "react";
import imageone from "../Blog/blogimages/imageone.jpg";
import stupasimages from "../Blog/blogimages/stupas.jpg";
import malamjabba from "../Blog/blogimages/blogimagemalamjabba.jpg";
import saidu from "../Blog/blogimages/saidu.jpg";
import mahodandlake from "../Blog/blogimages/mahodandlake.jpg";
import kalam from "../Blog/blogimages/kalam.jpg";
import kabab from "../Blog/blogimages/kabab.jpg";
import river from "../Blog/blogimages/river.jpg";
import Adventuriousimage from "../Blog/blogimages/Adventuriousimage.jpg";
import { FaArrowTrendDown } from "react-icons/fa6";
import { Link } from "react-router-dom";

const BlogDetail = () => {
  return (
    <>
      {/* pagination */}
      <div className="flex gap-2 px-10 py-2 bg-gray-300 pagination-div ">
        <Link to={"/blog"} className="hover:underline">
          Home
        </Link>
        {"/"}
        <Link to={"/blogdetail"} className="hover:underline">
          Blog Details
        </Link>
      </div>
      <div className="w-full px-6 py-4 bg-gray-100 pagination-div font-Manrope">
        <div className="main-container w-[70%]">
          <a
            href="https://www.theswattours.com/tourpackages"
            className="decoration-none"
          >
            <h1 className="my-4 text-2xl font-extrabold underline xs:text-lg sm:text-lg lg:text-2xl 2xl:text-3xl card-title font-Manrope">
              Exploring Paradise: The Ultimate Guide to the Best Places to Visit
              in Swat Valley
            </h1>
          </a>
          <img
            src={imageone}
            alt="https://www.theswattours.com/"
            className="!w-[100%] !h-[350px] object-cover my-4"
          />
          <p>
            Nestled amidst the majestic mountains of Pakistan, Swat Valley
            beckons with its pristine beauty and enchanting landscapes. From
            lush green meadows to crystal-clear lakes and cascading waterfalls,
            this hidden gem offers a breathtaking escape for nature enthusiasts
            and adventure seekers alike. Embark on a journey through this
            paradise as we unveil the ultimate guide to the best places to visit
            in Swat Valley.
          </p>
          <h1 className="my-4 text-2xl font-extrabold underline xs:text-lg sm:text-lg lg:text-2xl 2xl:text-3xl card-title font-Manrope">
            The Rich History and Culture of Swat Valley
          </h1>
          <img
            src={stupasimages}
            alt="https://www.theswattours.com/"
            className="!w-[100%] !h-[350px] object-cover my-4"
          />
          <p>
            Swat Valley, often referred to as the "Switzerland of the East," is
            not only a feast for the eyes but also a treasure trove of
            historical and cultural significance. Once a major center of
            Buddhism, the valley is home to ancient relics such as the Butkara
            Stupa, which offers a glimpse into its spiritual past. The Swat
            Museum in Mingora houses an impressive collection of artifacts that
            reflect the valley's rich history. The local Pashto-speaking
            community is known for its warm hospitality and vibrant traditions.
            Visitors can experience traditional Swati music, dance, and crafts
            by engaging with local artisans and participating in cultural
            festivals.
          </p>
          <h1 className="my-4 text-2xl font-extrabold underline xs:text-lg sm:text-lg lg:text-2xl 2xl:text-3xl card-title font-Manrope">
            Must-Visit Natural Attractions in Swat Valley
          </h1>
          <a href="https://www.theswattours.com/tourpackages">
            <h1 className="flex items-center gap-3 my-4 text-2xl font-extrabold text-blue-500 underline xs:text-lg sm:text-lg lg:text-2xl 2xl:text-3xl card-title font-Manrope">
              Malamjabba{" "}
              <FaArrowTrendDown size={18} className="text-slate-900" />
            </h1>
          </a>
          <img
            src={malamjabba}
            alt="https://www.theswattours.com/"
            className="!w-[100%] !h-[350px] object-contain my-4 "
          />
          <p>
            A renowned hill station, Malam Jabba is famous for its skiing
            resorts and breathtaking panoramic views. Whether you visit in
            winter for skiing or in summer for hiking, Malam Jabba promises an
            unforgettable experience.
          </p>
          <a href="https://www.theswattours.com/tourpackages">
            <h1 className="flex items-center gap-3 my-4 text-2xl font-extrabold text-blue-500 underline xs:text-lg sm:text-lg lg:text-2xl 2xl:text-3xl card-title font-Manrope">
              Mahodand Lake{" "}
              <FaArrowTrendDown size={18} className="text-slate-900" />
            </h1>
          </a>
          <img
            src={mahodandlake}
            alt="https://www.theswattours.com/"
            className="!w-[100%] !h-[350px] object-contain my-4 "
          />
          p Located in the Usho Valley, Mahodand Lake is a serene glacial lake
          surrounded by dense pine forests and towering peaks. The crystal-clear
          waters make it a perfect spot for boating and picnicking.
          <a href="https://www.theswattours.com/tourpackages">
            <h1 className="flex items-center gap-3 my-4 text-2xl font-extrabold text-blue-500 underline xs:text-lg sm:text-lg lg:text-2xl 2xl:text-3xl card-title font-Manrope">
              Saidu Sharif{" "}
              <FaArrowTrendDown size={18} className="text-slate-900" />
            </h1>
          </a>
          <img
            src={saidu}
            alt="https://www.theswattours.com/"
            className="!w-[100%] !h-[350px] object-contain my-4 "
          />
          <p>
            As the administrative center of Swat, Saidu Sharif is known for its
            historical and cultural significance. The Saidu Baba Shrine and the
            Saidu Sharif Museum offer a blend of spirituality and history.
          </p>
          <a
            href="https://www.theswattours.com/tourpackages"
            className="decoration-none"
          >
            <h1 className="my-4 text-2xl font-extrabold text-blue-500 underline xs:text-lg sm:text-lg lg:text-2xl 2xl:text-3xl card-title font-Manrope">
              Exploring the Majestic Swat River
            </h1>
          </a>
          <img
            src={river}
            alt="https://www.theswattours.com/"
            className="!w-[100%] !h-[350px] object-contain my-4 self-start"
          />
          <p>
            The Swat River, originating from the Hindu Kush mountains, meanders
            through the valley, providing a lifeline for local communities. It
            offers exciting recreational activities such as trout fishing,
            boating, and white-water rafting.
          </p>
          <h1 className="flex items-center gap-3 my-4 text-2xl font-extrabold underline xs:text-lg sm:text-lg lg:text-2xl 2xl:text-3xl card-title font-Manrope">
            The Enchanting Valley of Kalam
          </h1>
          <img
            src={kalam}
            alt="https://www.theswattours.com/"
            className="!w-[100%] !h-[350px] object-contain my-4 self-start"
          />
          <a
            href="https://www.theswattours.com/tourpackages"
            className="text-xl font-extrabold text-blue-600 underline"
          >
            Kalam Valley{"  "}
          </a>
          situated at an altitude of 2,000 meters, is a paradise of lush
          meadows, dense forests, and gushing streams. It serves as the gateway
          to stunning destinations like:
          <ul className="list-disc list-inside">
            <li>
              Kundol Lake – A breathtaking alpine lake accessible via a scenic
              trek.
            </li>
            <li>
              Ushu Forest – A vast expanse of pine and cedar trees, perfect for
              hiking and wildlife spotting.
            </li>
          </ul>
          <h1 className="my-4 text-2xl font-extrabold underline xs:text-lg sm:text-lg lg:text-2xl 2xl:text-3xl card-title font-Manrope">
            Adventure Activities in Swat Valley
          </h1>
          <img
            src={Adventuriousimage}
            alt="https://www.theswattours.com/"
            className="!w-[100%] !h-[350px] object-contain my-4 self-start"
          />
          <ul className="list-disc list-inside">
            Swat offers a variety of adventure activities, including:
            <li>
              <b>Trekking –</b> Trails such as Mingora to Malam Jabba and
              Spindhor Lake offer stunning landscapes.
            </li>
            <li>
              <b>Rock Climbing –</b> Popular spots near Malam Jabba and Ushu
              Forest provide thrilling challenges.
            </li>
            <li>
              <b>Water Sports –</b> The Swat River is ideal for white-water
              rafting and kayaking.
            </li>
          </ul>
          <h1 className="my-4 text-2xl font-extrabold underline xs:text-lg sm:text-lg lg:text-2xl 2xl:text-3xl card-title font-Manrope">
            Local Cuisine: A Taste of Swat Valley
          </h1>
          <img
            src={kabab}
            alt="https://www.theswattours.com/"
            className="!w-[100%] !h-[350px] object-contain my-4 self-start"
          />
          <ul className="list-disc list-inside">
            Swat’s culinary traditions are a delightful blend of flavors.
            Must-try dishes include:
            <li>
              <b>Chapli Kebab –</b>A spicy minced meat patty, often served with
              naan.
            </li>
            <li>
              <b>Sajji –</b>Marinated whole chicken or lamb, slow-cooked over an
              open flame.
            </li>
            <li>
              <b>Swati Halwa –</b>A rich dessert made with semolina, ghee, and
              nuts.
            </li>
          </ul>
          <h1 className="my-4 text-2xl font-extrabold underline xs:text-lg sm:text-lg lg:text-2xl 2xl:text-3xl card-title font-Manrope">
            Best Times to Visit Swat Valley
          </h1>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;

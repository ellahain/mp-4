import getData from "@/lib/getData";
import Image from "next/image";
import {ImageTypes} from "@/types/ImageTypes";

export default async function Artworks() {

    const images = await getData()

    return (
        <div className="flex flex-wrap justify-evenly py-16 mx-16 border-10 border-gray-700 bg-pink-950">
            {
                images.records.map((image: ImageTypes) =>
                    <div key={image.id}
                         className="flex flex-col justify-center bg-white text-center  max-w-23% h-120 w-100 p-2 m-1 mx-auto border-10 border-amber-300">
                        <h1 className="font-serif font-bold text-[20px]">{image.title}</h1>
                        <p className="font-serif text-[18px]">Dated: {image.dated}</p>
                        <Image className="mx-auto" src={image.primaryimageurl} alt={image.title} height={250}
                               width={250}/>
                    </div>
                )
            }

        </div>
    );
}
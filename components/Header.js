import React from 'react';
import Image from "next/image";
import {SearchIcon} from "@heroicons/react/outline";
import {HomeIcon, PlusCircleIcon} from "@heroicons/react/solid";

function Header(props) {
    return (
        <div className={"shadow-sm border-b  top-0 sticky bg-white z-30"}>
            <div className={"flex items-center justify-between max-w-6xl xl:mx-auto"}>
                {/*Left*/}
                <div className={"cursor-pointer h-24 w-24 relative hidden lg:inline-grid"}>
                    <Image
                        className={"object-contain"}
                        layout={"fill"}
                        src={`http://www.jennexplores.com/wp-content/uploads/2015/09/Instagram_logo_black.png`}
                        width={200}
                        height={100}
                    />
                </div>
                <div className={"cursor-pointer h-10 w-10 relative lg:hidden"}>
                    <Image
                        className={"object-contain"}
                        layout={"fill"}
                        src={`https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png`}
                        width={200}
                        height={100}
                    />
                </div>

                {/*Middle*/}

                <div className={"relative"}>
                    <div className={"absolute top-2 left-2"}>
                        <SearchIcon className={"h-5 text-gray-500 "}/>
                    </div>
                    <input type={"text"} placeholder={"Search"} className={"bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md"}/>
                </div>
                {/*Right*/}
                <div className={"flex items-center space-x-4"}>
                    <HomeIcon className={"hidden md:inline-flex h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out"}/>
                    <PlusCircleIcon className={"h-6 cursor-pointer hover:scale-125 transition-transform ease-out"}/>
                    <img
                        className={"h-10 rounded-full cursor-pointer"}
                        src={"data:image/jpeg;base64,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"} alt={""}/>
                </div>
            </div>
        </div>

    );
}

export default Header;
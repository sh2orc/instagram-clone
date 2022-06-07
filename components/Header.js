import React from 'react';
import Image from "next/image";
import {SearchIcon} from "@heroicons/react/outline";

function Header(props) {
    return (
        <div className={"flex items-center justify-between max-w-6xl"}>
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
            <div>right side</div>

        </div>
    );
}

export default Header;
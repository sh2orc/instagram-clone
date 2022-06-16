import React from 'react';
import Image from "next/image";
import {SearchIcon} from "@heroicons/react/outline";
import {HomeIcon, PlusCircleIcon} from "@heroicons/react/solid";
import {useSession, signIn, signOut} from "next-auth/react";

function Header(props) {

    const {data : session} = useSession();

    console.log(session);

    return (
        <div className={"shadow-sm border-b  top-0 sticky bg-white z-30 p-5"}>
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
                    {session ? (
                        <>
                            <PlusCircleIcon className={"h-6 cursor-pointer hover:scale-125 transition-transform ease-out"}/>
                            <img onClick={signOut}
                                className={"h-10 rounded-full cursor-pointer"}
                                src={session.user.image} alt={""}/>
                        </>
                    ) : (
                        <button onClick={signIn}>Sign in </button>
                    )}

                </div>
            </div>
        </div>

    );
}

export default Header;
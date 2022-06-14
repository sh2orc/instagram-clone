import React from 'react';
import {DotsHorizontalIcon} from "@heroicons/react/solid";
import {HeartIcon, ChatIcon, BookmarkIcon} from "@heroicons/react/outline";

function Post( { img, userImg, username, id } ) {
    return (
        <div className={"bg-white border rounded-md my-7"}>
            {/*Post header*/}
            <div className={"flex items-center p-5"}>
                <img className={"h-12 rounded-full object-cover border p-1 mr-3"} src={userImg} alt={""}/>
                <p className={"font-bold flex-1"}>{username}</p>
                <DotsHorizontalIcon className={"h-5"}/>
            </div>

            {/*Posts Image*/}
            <img className={"object-cover w-full"} src={img} alt={""}/>

            {/*Post Buttons*/}
            <div className="flex justify-between px-4 pt-4">
                <div className="flex space-x-4">
                    <HeartIcon className="btn"/>
                    <ChatIcon className="btn"/>
                </div>
                <BookmarkIcon className="btn"/>
            </div>
        </div>
    );
}

export default Post;
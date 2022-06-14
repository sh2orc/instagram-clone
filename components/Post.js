import React from 'react';
import {DotsHorizontalIcon} from "@heroicons/react/solid";

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
        </div>
    );
}

export default Post;
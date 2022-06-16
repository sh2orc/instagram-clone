import React from 'react';
import {useSession, signOut} from "next-auth/react";

function MiniProfile(props) {

    const {data : session } = useSession();

    return (
        <div>
        { session ? (
                <div className={"flex items-center justify-between mt-14 ml-10"}>
                    <img className={"h-16 rounded-full border p-[2px] hover:scale-125"}
                         alt={'user-image'}
                         src={session.user.image}
                    />
                    <div className="flex-1 ml-4">
                        <h2 className={"font-bold"}>{session.user.name}</h2>
                        <h3 className={"text-sm text-gray-400"}>Welcome to instagram</h3>
                    </div>
                    <button onClick={signOut} className={"font-semibold text-blue-400 text-sm"}>
                        Sign out
                    </button>
                </div>
            ):(
                <></>
            )
        }
        </div>
    );
}

export default MiniProfile;
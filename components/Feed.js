import React from 'react';
import Stories from "./Stories";
import Posts from "./Posts";
import MiniProfile from "./MiniProfile";
import Suggestions from "./Suggestions";
import {useSession} from "next-auth/react";

function Feed(props) {
    const {data : session } = useSession();

    return (
        <main className={`grid ${session ? "grid-cols-1 md:grid-cols-3 md:max-w-6xl mx-auto" : "grid-cols-1 md:grid-cols-2 md:max-w-3xl mx-auto"} `}>
            <section className={"md:col-span-2"}>
                {/*stories*/}
                <Stories/>

                {/*posts*/}
                <Posts/>
            </section>

            <section className={"hidden md:inline-grid md:col-span-1"}>
                <div className={"fixed w-[380px]"}>
                    {/*mini profile*/}
                    <MiniProfile/>

                    {/*suggesti*/}
                    <Suggestions/>

                </div>

            </section>
        </main>
    );
}

export default Feed;
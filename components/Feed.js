import React from 'react';
import Stories from "./Stories";
import Posts from "./Posts";

function Feed(props) {
    return (
        <main>
            <section>
                {/*stories*/}
                <Stories/>

                {/*posts*/}
                <Posts/>
            </section>

            <section>
                {/*mini profile*/}

                {/*suggest*/}
            </section>
        </main>
    );
}

export default Feed;
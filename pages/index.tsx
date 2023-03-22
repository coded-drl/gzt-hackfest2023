import type { NextPage } from "next";

// import { } from "../utils";
// import { } from "../components"

const Home: NextPage = () => {
    return (
        <>
            <main className="flex flex-col items-center min-h-screen p-5 bg-primary-purple">
                <div className="m-auto w-full">
                    <h3 className="text-4xl text-white text-center font-semibold my-5">
                        GenZ <b className="text-primary-green font-semibold">Hackfest </b>
                        <b className=" text-primary-yellow font-semibold">2023 </b>
                        &mdash; <i className="text-lg align-middle font-normal">Website Coming Soon 👀</i>
                    </h3>

                    <h3 className="text-lg md:text-2xl text-white text-center font-medium my-5">
                        While you're here, you should checkout the &nbsp;
                        <a className="underline" href="http://genztechies.com/gallery">
                            pictures
                        </a>
                        &nbsp; from &nbsp;
                        <a className="underline" href="https://hackfest2022.genztechies.com">
                            Hackfest 2022
                        </a>
                        &nbsp; 🫣
                    </h3>
                </div>
            </main>
        </>
    );
};

export default Home;

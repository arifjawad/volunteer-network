import React from 'react';
import Footer from "../../components/sections/footer"
import {
    useHistory
} from "react-router-dom";

const Notfound = () => {
    const history = useHistory();


    return (
        <>
            <div className="container px-4 mt-80 ml-52 flex flex-auto ">
                <div>
                    <h2 className="text-6xl"> <span className="text-green-500">404</span> page <span className="text-yellow-500">not found</span></h2>
                    <button className="border-2 border-blue-500 mt-20 text-blue-500 active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={() => history.goBack()}>
                        Back to previous
                    </button>
                </div>

                <iframe src="https://giphy.com/embed/l4FGq1kJo9mPcSfBu" title="404 Gif"></iframe>
            </div>

            <div className="container px-4 mt-60 ml-52 ">
                <Footer></Footer>
            </div>


        </>
    );
};

export default Notfound;
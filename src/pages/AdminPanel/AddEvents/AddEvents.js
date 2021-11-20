import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Events from '../../Events/Events';
import SideNav from '../PanelSections/SideNav';

const axios = require('axios').default;

const AddEvents = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imgURL, setImgURL] = useState(null);

    const onSubmit = data => {

        const eventData = {
            eventName: data.eventName,
            imageUrl: imgURL
        };
        const url = `http://localhost:5055/addEvents`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(eventData)
        }).then(
            res => console.log('server side response')

        )
        console.log("this is sending", eventData)
    };

    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', '8588ce47ae9b491dc6964944e8320e5b');
        imageData.append('image', event.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then((res) => {
                setImgURL(res.data.data.display_url);


            }).catch((error) => {
                console.log(error);
            })
    }
    return (
        <>
            <section className="container">
                <div className="flex flex-wrap">

                    <div className="flex-1">
                        <SideNav></SideNav>
                    </div>

                    <div className="mt-20 flex-1">
                        <h1 className="text-center font-bold text-4xl border-b-2 p-3 mb-20">Add New Event</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3 mt-3 pt-0 flex flex-auto">
                                <p className="mb-3 w-2/6">Event Name :</p>
                                <input type="text" name="eventName" placeholder="type here" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative  bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full"  {...register("eventName")} />
                            </div>
                            <br />
                            <div className="mb-3 mt-3 pt-0 flex flex-auto justify-between">
                                <p className="mb-3 w-2/6">Upload Thumbnail :</p>
                                <input name="eventImg" type="file" className="text-yellow-600 active:bg-lightBlue-600 cursor-pointer font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" onChange={handleImageUpload} />
                                <br />
                            </div>
                            <div className="text-center mt-10">
                                <input className="bg-green-500 text-white active:bg-lightBlue-600 cursor-pointer font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </section>




        </>
    );
};

export default AddEvents;
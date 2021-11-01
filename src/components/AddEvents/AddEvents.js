import { getDefaultNormalizer } from '@testing-library/react';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
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
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="eventName" defaultValue="New event" {...register("eventName")} />
                <br />
                <input name="eventImg" type="file" onChange={handleImageUpload} />
                <input type="submit" />
            </form>
        </>
    );
};

export default AddEvents;
import React from "react";
import MainComp from "./mainComp";
import './mainPage.css'
import PhotosUrl from "./photo-main/photo";

export default function MainPage () {







    return (
        <>
        <div className="content">
            <MainComp url={PhotosUrl.mobileCenter} section={"Mobile"}/>
            <MainComp url={PhotosUrl.tvCenter} section={"Tv"}/>
            <MainComp url={PhotosUrl.laptopCenter} section={"Laptop"}/>
        </div>
        </>
    )
}
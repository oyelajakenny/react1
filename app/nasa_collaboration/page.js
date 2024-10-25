"use client";

import React, { useState, useEffect } from "react";
import styles from "./page.module.css";

// Read "/app/nasa_collaboration/README.md" for more info about the API_KEY
// You need a proper API_KEY for the requests to work
const API_KEY = "nDgmi28bavvf27vTGSZ8JoPwd4BfLJtrJP6DKhgC";

const NASA_URLs = {
  astronomyPicOfTheDay: `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`,
  marsRoverPhoto: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${API_KEY}`,
};

const RoverPhoto =({src, date, roverName}) => {
  return (
    <div >
      <h4>{roverName}</h4>
      <p>Date: {date}</p>
      <img
        className={styles.nasaPicOfTheDayImg}
        src={src}
        alt={`${roverName} Rover Photo`}
      />
    </div>
  );
}
export const NasaCollaboration = () => {
  const [dailyImg, setDailyImg] = useState({});
  const [roverPhoto, setRoverPhoto] = useState({});

  useEffect(() => {
  
    const fetchRoverPhotos = async () => {
      try {
        const roverPhotoResponse = await fetch(NASA_URLs.marsRoverPhoto).then(
          (response) => response.json()
        );
        setRoverPhoto(roverPhotoResponse);
      } catch (error) {
        console.error("Error fetching Mars Rover photos:", error);
      }; 
    }
const fetchDailyImg = async () => {
    try {
      const dailyImgResponse = await fetch(NASA_URLs.astronomyPicOfTheDay).then(
        (response) => response.json()
      );
      setDailyImg(dailyImgResponse);
    } catch (error) {
      console.error("Error fetching Astronomy Picture of the Day:", error);
    };
}
    fetchRoverPhotos();
fetchDailyImg()
    // TASK - React 1 week 3
    // fetch the extra data for NASA_URLs.astronomyPicOfTheDay and save it to the dailyImg state variable
  }, []);

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Collaboration with NASA</h1>
        <section className="card">
          <h2>Astronomy Picture of the day</h2>
          <div className={styles.picsofTheDay}>
            <h1>{dailyImg.title}</h1>
            <p>{dailyImg.explanation}</p>
            <img src={dailyImg.url}></img>
          </div>
          {/* TASK - React 1 week 3 */}
          {/* After fetching data from the NASA_URLs.astronomyPicOfTheDay url, display the returned data here */}
          {/* You should display the title, explanation, and the image using the url from the response */}
        </section>
        <section className="card">
          <h2>Rover Photos</h2>
          <div className={styles.Rovers}>
            {/* TASK - React 1 week 3 */}
            {/* Iteratate over the roverPhoto?.photos array and display all the pictures! */}
            {roverPhoto?.photos?.length ? (
              roverPhoto.photos.map((photo, index) => (
                <RoverPhoto
                  key={index}
                  src={photo.img_src}
                  date={photo.earth_date}
                  roverName={photo.rover.name}
                />
              ))
            ) : (
              <p>Loading rover photos...</p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default NasaCollaboration;



import Navbar from "./Navbar";
import "./Styles/ContestProfile.css";

import React, { useState, useEffect } from "react";
const rankColors = {
  newbie: 'rank-color-newbie',
  pupil: 'rank-color-pupil',
  specialist: 'rank-color-specialist',
  expert: 'rank-color-expert',
  'candidate master': 'rank-color-candidate-master',
  master: 'rank-color-master',
  'international master': 'rank-color-international-master',
  grandmaster: 'rank-color-grandmaster',
  'international grandmaster': 'rank-color-international-grandmaster',
  'legendary grandmaster': 'rank-color-legendary-grandmaster',
};
const ContestProfile = ({ platform, username }) => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        if (platform === "codeforces") {
          let response = await fetch(
            `https://codeforces.com/api/user.info?handles=samnoon`
          );
          const data = await response.json();
          var normalizedData = {
            username: data.result[0].handle,
            platform: "Codeforces",
            rating: data.result[0].rating,
            avatarUrl: 'cf.svg',
            rank: data.result[0].rank,
            contests: data.result[0].contestParticipation,
          };
          setProfileData(normalizedData);
        }
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfileData();
  }, [platform, username]);

  return (
    <div className="contest-profile-frame">
      {profileData ? (
        <>
          <h2>{profileData.username}</h2>
          <p>Platform: {profileData.platform}</p>
          <p>Rating: {profileData.rating}</p>

          <p>Rank:  <span className={`rank-color-box ${rankColors[profileData.rank.toLowerCase()]}`}>{profileData.rank}</span> </p>
          <img
            src={profileData.avatarUrl}
            alt={`${profileData.username}'s avatar`}
          />
        </>
      ) : (
        <p>Loading profile data...</p>
      )}
    </div>
  );
};

const CompetitiveAchievement = ({ title, event, description }) => {
  return (
    <div>
      <div className="competitive-profiles">
        <ContestProfile platform="codeforces" username="samnoon" />
      </div>
      <div className="competitive-achievement">
        <h2 className="title">{title}</h2>
        <p className="event">{event}</p>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

const Achievements = () => {
  return (
    <div className="app">
      <Navbar />

      <h1>My Competitive Programming Achievements</h1>
      <CompetitiveAchievement
        title="ACM ICPC Asia Dhaka Regional"
        event="Programming Content"
        description="Participated two times in 2018 and 2019"
      />
    </div>
  );
};
export default Achievements;

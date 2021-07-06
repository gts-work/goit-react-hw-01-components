import React from "react";
import PropTypes from "prop-types";
import "./Profile.css";

const Profile = ({ name, tag, location, avatar, stats }) => (
    <div class="profile">
        <div class="description">
            <img src={avatar} alt={name} class="avatar" />
            <p class="name">{name}</p>
            <p class="tag">@{tag}</p>
            <p class="location">{location}</p>
        </div>

        <ul class="stats">
            <li>
                <span class="label">Followers</span>
                <span class="quantity">{stats.followers}</span>
            </li>
            <li>
                <span class="label">Views</span>
                <span class="quantity">{stats.views}</span>
            </li>
            <li>
                <span class="label">Likes</span>
                <span class="quantity">{stats.likes}</span>
            </li>
        </ul>
    </div>
);

Profile.defaultProps = {
    avatar: "",
    tag: "",
};

Profile.propTypes = {
    avatar: PropTypes.string,
    tag: PropTypes.string,
    name: PropTypes.string,
    stats: PropTypes.shape({
        followers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number,
    }),
};

export default Profile;

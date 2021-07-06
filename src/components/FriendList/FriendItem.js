import React from "react";
import PropTypes from "prop-types";

const FriendItem = ({ id, avatar, name, isOnline }) => (
    <li class="item" key={id}>
        <span class="status">
            {isOnline ? <p>is Online</p> : <p>not Online</p>}
        </span>
        <img class="avatar" src={avatar} alt={name} width="48" />
        <p class="name">{name}</p>
    </li>
);

FriendItem.defaultProps = {
    avatar: "",
};

FriendItem.propTypes = {
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.string,
};

export default FriendItem;

import React from "react";
import PropTypes from "prop-types";
import FriendItem from "./FriendItem";

const FriendsList = ({ friends }) => (
    <ul class="stat-list">
        {friends.map((friend) => (
            <FriendItem
                id={friend.id}
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
            />
        ))}
    </ul>
);

FriendsList.defaultProps = {
    friends: PropTypes.shape({
        avatar: "",
    }),
};

FriendsList.propTypes = {
    friends: PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.string,
    }),
};

export default FriendsList;

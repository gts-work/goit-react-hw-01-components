import React from "react";
import PropTypes from "prop-types";
import FriendItem from "./FriendItem";
import styles from './FriendList.module.css'

const FriendsList = ({ friends }) => (
    <ul className={styles.stat_list}>
        {friends.map((friend) => {
            let isOnline = 'onLine'
            if (!friend.isOnline) {
               isOnline = 'offLine'
            }

            return (
            <FriendItem
                id={friend.id}
                avatar={friend.avatar}
                name={friend.name}
                isOnline={isOnline}
            />
        )})}
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
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.string.isRequired,
    }),
};

export default FriendsList;

import React from "react";
import PropTypes from "prop-types";
import styles from './FriendList.module.css'


const FriendItem = ({ id, avatar, name, isOnline }) => (
    <li className={styles.item} key={id}>
        <span className={styles[isOnline]}></span>
        <img className={styles.avatar} src={avatar} alt={name} width="48" />
        <p className={styles.name}>{name}</p>
    </li>
);

FriendItem.defaultProps = {
    avatar: "",
    isOnline: "onLine",
};

FriendItem.propTypes = {
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.oneOf(['onLine', 'offLine']),
};

export default FriendItem;

import React from "react";
import PropTypes from "prop-types";
import styles from './Statistics.module.css'
import generatorColor from '../../color_generate'


console.log("colorRange: ", generatorColor())



const StatisticItem = ({ id, label, percentage }) => (
    <li className={styles.item} style={{ backgroundColor: generatorColor() }} key={id}>
        <span className={styles.label}>{label}</span>
        <span className={styles.percentage}>{percentage}%</span>
    </li>
);

StatisticItem.propTypes = {
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
};

export default StatisticItem;

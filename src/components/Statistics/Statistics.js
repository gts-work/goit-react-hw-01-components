import React from "react";
import PropTypes from "prop-types";
import StatisticItem from "./StatisticItem";
import styles from './Statistics.module.css'

const Statistics = ({ title, stats }) => (
    <section className={styles.statistics}>
        <h2 className={styles.title}>{title}</h2>

        <ul className={styles.stat_list}>
            {stats.map((stat) => (
                <StatisticItem
                    id={stat.id}
                    label={stat.label}
                    percentage={stat.percentage}
                />
            ))}
        </ul>
    </section>
);

Statistics.defaultProps = {
    title: "Upload stats",
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.shape({
        id: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }),
};

export default Statistics;

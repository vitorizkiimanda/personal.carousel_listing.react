import styles from "./styles.module.css";

const Listing = (props) => {
    const { dataList } = props;
    return (
        <>
            <div className={styles.container}>
                {dataList.map((val, index) => (
                    <img
                        src={val.url}
                        alt=""
                        className={styles.image}
                        key={val.id}
                    />
                ))}
            </div>
            <div className={styles.bottomTransition} />
        </>
    );
};

export default Listing;

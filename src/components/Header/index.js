import styles from "./styles.module.css";

export default () => {
    return (
        <div className={styles.container}>
            <img
                src="profile_pict.jpeg"
                alt="profile pict"
                className={styles.imageProfile}
            />
            <div className={styles.containerText}>
                <div className={styles.itemTextIconUserData}>
                    <span className={styles.textName}>Vito Rizki Imanda</span>
                    <img
                        src="icon_verified.svg"
                        alt="profile pict"
                        className={styles.imageIconVerified}
                    />
                    <img
                        src="icon_hamburger.svg"
                        alt="profile pict"
                        className={styles.imageIconHamburger}
                    />
                </div>
                <div className={styles.textDesc500}>Front-end Engineer</div>
                <div className={styles.containerTextIcon}>
                    <span className={styles.itemTextIcon}>
                        <img
                            src="icon_pinpoint.svg"
                            alt="profile pict"
                            className={styles.imageIcon}
                        />
                        <span className={styles.textDesc}>Jakarta</span>
                    </span>
                    <span className={styles.itemTextIcon}>
                        <img
                            src="icon_email.svg"
                            alt="profile pict"
                            className={styles.imageIcon}
                        />
                        <span className={styles.textDesc}>
                            vitorizkiimanda@gmail.com
                        </span>
                    </span>
                </div>
            </div>
        </div>
    );
};

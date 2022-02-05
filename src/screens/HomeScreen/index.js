import { useEffect, useState } from "react";

import { Carousel, FAB, Header, Listing } from "../../components";

import { getList } from "../../service/serviceListing";

import appStyles from "../../App.module.css";
import styles from "./styles.module.css";

export default () => {
    // state
    const [dataList, setDataList] = useState([]);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // didmount
    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            const { data, error } = await getList();

            if (error) throw new Error("TIMEOUT");

            setDataList(data);

            setIsLoading(false);
            setIsError(false);
        } catch (error) {
            setIsLoading(false);
            setIsError(true);
        }
    };

    if (isLoading) return <div>loading..</div>;
    if (isError) return <div>error..</div>;

    return (
        <div className={appStyles.container}>
            <Header />
            <Carousel />
            <Listing dataList={dataList} />
            <FAB />
        </div>
    );
};

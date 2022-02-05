const timeout = (ms, promise) => {
    return new Promise((resolve, reject) => {
        const timer = setTimeout(() => {
            reject(new Error("TIMEOUT"));
        }, ms);

        promise
            .then((value) => {
                clearTimeout(timer);
                resolve(value.json());
            })
            .catch((reason) => {
                clearTimeout(timer);
                reject(reason);
            });
    });
};

export const getList = async () => {
    try {
        const val = await timeout(
            10000,
            fetch(`https://jsonplaceholder.typicode.com/photos`)
        );
        return { data: val, error: null };
    } catch (err) {
        return { data: null, error: err };
    }
};

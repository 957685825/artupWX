const getCropitData = function (extraPostData, customParams) {
    const cropitData = build();

    return {...extraPostData, ...cropitData, ...customParams}
};

export default getCropitData
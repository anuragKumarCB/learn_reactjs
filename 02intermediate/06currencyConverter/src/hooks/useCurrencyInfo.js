import React, { useEffect, useState } from 'react'

const useCurrencyInfo = (currency) => {
    // need to get currency data when page load or on currency change, amount chage

    //need a state where we can store data.(state because it can update ui too)
    const [data, setData] = useState({})    //initial value is empty object


    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((res) => res.json())  //mostly api call return data in string format so conversion in json
            .then((res) => setData(res[currency]))
    }, [currency])

    return data;    //only data becasue we have access to fulll hook via export
}

export default useCurrencyInfo

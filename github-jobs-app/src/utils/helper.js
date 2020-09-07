

// This will just format the date string the API gives us
export function formatDate(date) {

    /**
     * Input = Sun Sep 06 14:30:27 UTC 2020
     * str1 = 06
     * str2 = Sep
     * str3 = 2020
     * return add all strings together then replace all spaces with '/'
     */
    const str1 = date.substring(8, 10);
    const str2 = date.substring(4, 8);
    const str3 = date.substring(date.length - 4);
    return (str1.concat(' ', str2, str3).replace(/\s/g, '/'));
}
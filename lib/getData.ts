const API_KEY = process.env.HARVARD_ART_MUSEUM_API_KEY;


export default async function getData() {
    /*Learned how to do _exists_ from https://www.elastic.co/guide/en/elasticsearch/reference/7.17/query-dsl-query-string-query.html*/

    /*try/catch for error handling*/
    try {
        const res = await fetch(`https://api.harvardartmuseums.org/object?q=imagepermissionlevel:0+_exists_:primaryimageurl&apikey=${API_KEY}`)
    } catch {
        throw new Error(res.statusText);
    }

    return res.json();
}
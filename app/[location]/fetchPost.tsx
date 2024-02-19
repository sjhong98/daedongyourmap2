export const fetchPost = async (value: string, lastIndex?: number, ) => {
    let startIndex;
    if(lastIndex === undefined) {
        const getFirstPost = await fetch('https://firestore.googleapis.com/v1/projects/daedongyourmap-ad63d/databases/(default)/documents:runQuery', {
            method: 'POST',
            cache: 'no-cache',
            body: JSON.stringify({
                "structuredQuery": {
                    "from": [{
                        "collectionId": "posts",
                    }],
                    "where": {
                        "fieldFilter": {
                            "field": { "fieldPath": "point" },
                            "op": "EQUAL",
                            "value": { "stringValue": `${value}` }
                        }
                    },
                    "orderBy": [{
                            "field": { "fieldPath": "createTime" },
                            "direction": "DESCENDING" 
                    }],
                    "limit": 1,
                }
            })
        });
        const firstPost = await getFirstPost.json();
        if(firstPost && firstPost) startIndex = firstPost[0].document.fields.createTime.doubleValue;
        else startIndex = 0;
    } else {
        startIndex = lastIndex;
    } 

    const response = await fetch('https://firestore.googleapis.com/v1/projects/daedongyourmap-ad63d/databases/(default)/documents:runQuery', {
        method: 'POST',
        cache: 'no-cache',
        body: JSON.stringify({
            "structuredQuery": {
                "from": [{
                    "collectionId": "posts",
                }],
                "where": {
                    "fieldFilter": {
                        "field": { "fieldPath": "point" },
                        "op": "EQUAL",
                        "value": { "stringValue": `${value}` }
                    }
                },
                "orderBy": [{
                        "field": { "fieldPath": "createTime" },
                        "direction": "DESCENDING" 
                }],
                "startAt": {
                    "values": { "doubleValue": startIndex },
                    "before": true,
                },
                "limit": 30
            }
        })
    });

    const data = await response.json();

    let extract: any[] = [];
    data.map((elem: any) => {
        let item = elem.document;
        let curComments:any;
        if(item) {
            if(item.fields.comments.arrayValue.values === undefined) curComments = [];
            else curComments = item.fields.comments.arrayValue.values;
            item !== undefined && extract.push({
                createTime: item.fields.createTime.doubleValue,
                title: item.fields.title.stringValue,
                content: item.fields.content.stringValue,
                point: item.fields.point.stringValue,
                photo: item.fields.photo.arrayValue.values,
                user: item.fields.user.stringValue,
                comments: curComments,
                name: item.name,
                likes: item.fields.likes.arrayValue.values,
            });
        }
    });
    // console.log("rough data : " , data);
    return extract;
} 
  
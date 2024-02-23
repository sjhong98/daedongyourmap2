export const fetchPost = async (location: string, email:string, lastIndex?: number) => {
    let startIndex;
    let body: any;
    if(lastIndex === undefined) {
        if(location !== "all" && email === "all") {
            body = JSON.stringify({
                "structuredQuery": {
                    "from": [{
                        "collectionId": "posts",
                    }],
                    "where": {
                        "fieldFilter": {
                            "field": { "fieldPath": "point" },
                            "op": "EQUAL",
                            "value": { "stringValue": `${location}` }
                        }
                    },
                    "orderBy": [{
                            "field": { "fieldPath": "createTime" },
                            "direction": "DESCENDING" 
                    }],
                    "limit": 1,
                }
            })
        } else if(location === "all" && email !== "all") {
            body = JSON.stringify({
                "structuredQuery": {
                    "from": [{
                        "collectionId": "posts",
                    }],
                    "where": {
                        "fieldFilter": {
                            "field": { "fieldPath": "user" },
                            "op": "EQUAL",
                            "value": { "stringValue": `${email}` }
                        }
                    },
                    "orderBy": [{
                            "field": { "fieldPath": "createTime" },
                            "direction": "DESCENDING" 
                    }],
                    "limit": 1,
                }
            })
        } else {
            body = JSON.stringify({
                "structuredQuery": {
                    "from": [{
                        "collectionId": "posts",
                    }],
                    "where": {
                        "compositeFilter": {
                            "op": "AND",
                            "filters": [
                                {
                                    "fieldFilter": {
                                        "field": { "fieldPath": "user" },
                                        "op": "EQUAL",
                                        "value": { "stringValue": `${email}` }
                                    }
                                },
                                {
                                    "fieldFilter": {
                                        "field": { "fieldPath": "point" },
                                        "op": "EQUAL",
                                        "value": { "stringValue": `${location}` }
                                    }
                                }
                            ]
                        }
                    },
                    "orderBy": [{
                            "field": { "fieldPath": "createTime" },
                            "direction": "DESCENDING" 
                    }],
                    "limit": 1,
                }
            })
        }
        // 첫 게시물의 createTime 기준 내림차순 게시물 받기 위해 첫 게시물 데이터 패치
        const getFirstPost = await fetch('https://firestore.googleapis.com/v1/projects/daedongyourmap-ad63d/databases/(default)/documents:runQuery', {
            method: 'POST',
            cache: 'no-cache',
            body: body
        });
        const firstPost = await getFirstPost.json();
        console.log(firstPost);
        
        if(firstPost && firstPost) startIndex = firstPost[0].document.fields.createTime.doubleValue;
        else startIndex = 0;
    } else {
        startIndex = lastIndex;
    } 

    let requestBody: any;
    if(location !== "all" && email === "all") {
        requestBody = JSON.stringify({
            "structuredQuery": {
                "from": [{
                    "collectionId": "posts",
                }],
                "where": {
                    "fieldFilter": {
                        "field": { "fieldPath": "point" },
                        "op": "EQUAL",
                        "value": { "stringValue": `${location}` }
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
    } else if(location === "all" && email !== "all") {
        requestBody = JSON.stringify({
            "structuredQuery": {
                "from": [{
                    "collectionId": "posts",
                }],
                "where": {
                    "fieldFilter": {
                        "field": { "fieldPath": "user" },
                        "op": "EQUAL",
                        "value": { "stringValue": `${email}` }
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
    } else {
        requestBody = JSON.stringify({
            "structuredQuery": {
                "from": [{
                    "collectionId": "posts",
                }],
                "where": {
                    "compositeFilter": {
                        "op": "AND",
                        "filters": [
                            {
                                "fieldFilter": {
                                    "field": { "fieldPath": "user" },
                                    "op": "EQUAL",
                                    "value": { "stringValue": `${email}` }
                                }
                            },
                            {
                                "fieldFilter": {
                                    "field": { "fieldPath": "point" },
                                    "op": "EQUAL",
                                    "value": { "stringValue": `${location}` }
                                }
                            }
                        ]
                    }
                },
                "orderBy": [{
                        "field": { "fieldPath": "createTime" },
                        "direction": "DESCENDING" 
                }],
                "limit": 1,
            }
        })
    }

    const response = await fetch('https://firestore.googleapis.com/v1/projects/daedongyourmap-ad63d/databases/(default)/documents:runQuery', {
        method: 'POST',
        cache: 'no-cache',
        body: requestBody
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
  
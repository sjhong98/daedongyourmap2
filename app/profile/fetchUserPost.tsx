export const fetchUserPost = async (email?: string) => {
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
                    "field": { "fieldPath": "user" },
                    "op": "EQUAL",
                    "value": { "stringValue": `${email}` }
                }
            },
            "orderBy": [
                {
                  "field": { "fieldPath": "createTime" },
                  "direction": "DESCENDING" 
                }
              ]
        }
    })
    });

    const data = await response.json();

    let extract: any[] = [];
    data.map((elem: any) => {
        let item = elem.document;
        item !== undefined && extract.push({
            createTime: item.createTime,
            title: item.fields.title.stringValue,
            content: item.fields.content.stringValue,
            point: item.fields.point.stringValue,
            photo: item.fields.photo.arrayValue.values,
            user: item.fields.user.stringValue,
            comments: item.fields.comments.arrayValue.values,
            name: item.name,
            likes: item.fields.likes.arrayValue.values,
        });
    });
    return extract;
} 
  
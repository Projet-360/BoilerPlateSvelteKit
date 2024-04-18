// src/lib/graphql.js

async function fetchGraphQL(query, variables = {}) {
    const response = await fetch('https://localhost:2000/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query,
            variables,
        }),
    });

    if (!response.ok) {
        throw new Error('Network response was not ok.');
    }

    return response.json();
}

export default fetchGraphQL;

const BASE_URL = 'http://localhost:3001';

const solveNgram = ngramOptions =>
    fetch(BASE_URL + '/solve', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(ngramOptions),
    })
        .then(res => res.json())
        .catch(err => console.log(err));

export default solveNgram;

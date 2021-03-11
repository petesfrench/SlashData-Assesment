const solveNgram = (req, res) => {
    let { body, ngram = 1, case_sensitive = true, length = 100 } = req.body;
    let holder = {};
    let currNgram;
    let targetBody = body.slice();
    if (!case_sensitive) targetBody = targetBody.toUpperCase();
    targetBody = targetBody.replace(/\s/g, '').split('');

    for (let i = 0; i < targetBody.length - ngram; i++) {
        currNgram = targetBody.slice(i, ngram + i).join('');
        if (holder[currNgram]) holder[currNgram]++;
        else holder[currNgram] = 1;
    }
    const result = Object.keys(holder)
        .map(key => ({ ngram: key, count: holder[key] }))
        .sort((a, b) => b.count - a.count)
        .slice(0, length);

    res.status(200).send(result);
};

module.exports = solveNgram;

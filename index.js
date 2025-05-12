const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));

let yesVotes = 0;
let noVotes = 0;

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.send(`
    <html>
      <head>
        <meta property="og:title" content="Vote Now!" />
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://placehold.co/600x400?text=Vote+Now!" />
        <meta property="fc:frame:button:1" content="Yes (${yesVotes})" />
        <meta property="fc:frame:button:2" content="No (${noVotes})" />
        <meta property="fc:frame:post_url" content="https://voting-frame-lqblje6yb-naflans-projects.vercel.app/" />
      </head>
      <body></body>
    </html>
  `);
});

app.post('/vote', (req, res) => {
  const choice = req.body.untrustedData?.buttonIndex;

  if (choice === '1') yesVotes++;
  else if (choice === '2') noVotes++;

  res.redirect('/');
});

app.listen(3000, () => {
  console.log('Voting Frame is running at http://localhost:3000');
});
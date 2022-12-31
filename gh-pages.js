var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/elaiah-pshs/doh-revamped', // Update to point to your repository  
        user: {
            name: 'elaiah-pshs', // update to use your name
            email: 'b2025esasperin@pshs.edu.ph' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)
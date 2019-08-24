#!/usr/bin/env bash

set -e
function cleanup_at_exit {
 git checkout master
 git branch -D deploy
}
trap cleanup_at_exit EXIT
git checkout -b deploy
npm run build
git add build -f
git commit --allow-empty -m ‘Deploying’
git push --force https://git.heroku.com/mockup-frontend-capstone.git deploy:master
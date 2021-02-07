#!/usr/bin/env sh

set -e

npm run build

cd dist

git init

git add -A

git commit -m 'deploy'

git push -f https://github.com/gio-oig/hilltop-bakuriani.git  master:gh-pages

cd-

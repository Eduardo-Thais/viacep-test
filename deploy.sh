#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'Novo Deploy'
git push -f git@github.com:Eduardo-Thais/viacep-test.git main:viacep-test

cd -
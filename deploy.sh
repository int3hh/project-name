set -e

npm run build
cd dist
echo Deploying..
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:int3hh/project-name.git web
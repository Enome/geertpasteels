DEVISRUNNING=$(curl -Is http://0.0.0.0:3000 | head -n 1)

echo "===== Creating PDF ====="

if [[ $DEVISRUNNING == *"200"* ]]; then
    npm run pdf
else
    echo "~~~ FAILED - DEV not running ~~~"
fi

echo "===== BUILDING Next.js ====="

npm run build

echo "===== Creating docker image ====="

read -p "Enter version: " VERSION
docker build --platform=linux/amd64 -t enome/geertpasteelsbe:$VERSION .
docker push enome/geertpasteelsbe:$VERSION

git tag $VERSION 
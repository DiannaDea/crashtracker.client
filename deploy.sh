if [ -d "./dist" ] 
then
    echo "Removing directory dist..."
    rm -r dist
fi

echo "Building client..."
npm run build
echo "Running server..."
node server.js
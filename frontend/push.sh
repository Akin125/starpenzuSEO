#!/bin/bash

# Get the message from the console
read -p "Enter your commit message: " message

# Create a temporary file to store the message
tempfile=$(mktemp)

# Write the message to the temporary file
echo "$message" > "$tempfile"

# Add the temporary file to the staging area
git add .

# Commit the changes with the message
git commit -m "$message"

# Push the changes to the remote repository (assuming your branch is named 'master')
git push

# Clean up the temporary file
rm "$tempfile"

echo "Successfully pushed message to GitHub!"

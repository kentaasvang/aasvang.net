#!/bin/bash

function createFolderIfNotExist() {
	if ! [ -d $1 ]; 
	then
		echo "Creating folder: '$1'"
		mkdir $1
	fi
}

function cleanFolder() {
	if ! [ -d $1 ]; 
	then
		echo "Cleaning folder: '$1'"
		rm -rf $1/**
	fi
}

createFolderIfNotExist "./dist"
cleanDolder "./dist"

# html-files
echo "Copying html-files.."
cp -R web.archive.org/web/20190102063105/http\:/aasvang.net/** dist/

# CSS
createFolderIfNotExist "./dist/css"
echo "Copying CSS-files.."
cp web.archive.org/web/20190102063105cs_/http\:/aasvang.net/onewebstatic/* dist/css/



#!/bin/bash

args="$@"

args="$@ -p 3000"

file='/usr/src/app/seeder/db.json'
if [ -f $file ]; then
    echo "Found $file, trying to open"
    args="$args $file"
fi

file='/usr/src/app/seeder/file.js'
if [ -f $file ]; then
    echo "Found $file seed file, trying to open"
    args="$args $file"
fi
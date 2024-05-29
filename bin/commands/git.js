#!/usr/bin/env node

import fs from 'fs';
import os from 'os';
import process from 'process';
import {fork, spawn} from 'node:child_process';


// Part 1: Adding all git files
let filename = process.cwd();
const gitAddAll = spawn('git', ['add', '--all']);

gitAddAll.stdout.on('data', (data) => {
  console.log(`Adding files: \n${data}`);
});

gitAddAll.stderr.on('data', (data) => {
  console.log(`Error Occured:\n${data}`);
});

gitAddAll.on('close', (code) => {
  if (code === 0) {
    console.log("Files Added");
  } else {
  console.log(`Process Exited with Code: ${code}`);
  }
});


// Part 2: Committing all the files
let args = process.argv;
args.forEach((value, index, array) => {
  console.log(`${index}: ${value} , ${array}`);
});
let message = 'Finished Part 2';
const gitCommitAll = spawn('git', ['commit', '-m', `"${message}"`]);

gitCommitAll.stdout.on('data', (data) => {
  console.log(`Committing: \n${data}`);
});

gitCommitAll.stderr.on('data', (data) => {
  console.log(`Error Occured:\n${data}`);
});

gitCommitAll.on('close', (code) => {
  if (code == 0) {
  console.log('All Files Committed');
  } else {
    console.log(`Process Exited with Code: ${code}`);
  }
});

// Part 3: Pushing to Remote Repository
let repo = 'main';
const gitPushAll = spawn('git', ['push', 'origin', repo]);

gitPushAll.stdout.on('data', (data) => {
  console.log(`Pushing: \n${data}`);
});

gitPushAll.stderr.on('data', (data) => {
  console.log(`Error Occured:\n${data}`);
});

gitPushAll.on('close', (code) => {
  if (code == 0) {
  console.log('All Files Pushed');
  } else {
    console.log(`Process Exited with Code: ${code}`);
  }
});
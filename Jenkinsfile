#!/usr/bin/env groovy

pipeline {

    agent {
        docker {
            image 'node:carbon'
            echo 'checking docker'
            sh 'docker rm $(sudo docker ps -a -q)'
            args '-u root -p 3000:3000'
        }
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
                sh 'node server.js'
            }
        }
    }
}

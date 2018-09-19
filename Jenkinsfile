#!/usr/bin/env groovy

pipeline {

    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                sh 'docker build -t dockerimage115 .'
            }
        }

        stage('Run') {
            steps {
                echo 'Running...'
                sh 'docker run -p 3000:3000 --net host -d --name test_endpoints115 dockerimage115'
            }
        }

        stage('Test') {
            steps {
                echo 'Testing Success...'
                sh 'echo success'
            }
        }
    }
}

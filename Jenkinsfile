pipeline {
    agent { docker { image 'node:8.9.4' } }
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
            }
        }
    }
}

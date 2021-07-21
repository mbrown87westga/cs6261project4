pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'ng test'
            }
        }
        stage('e2e') {
            steps {
                sh 'docker build -t testimage .'
                sh 'docker run -dp 4200:4200 --name testcontainer -v $WORKSPACE:/project testimage'
                sh './node_modules/protractor/bin/webdriver-manager update'
                sh 'sleep 30s'
                sh 'ng e2e --devServerTarget='
            }
        }
        stage('Deploy') {
            steps {
                sh 'docker stop deployedcontainer || true'
                sh 'docker rm deployedcontainer || true'
                sh 'docker image rm deployedimage || true'
                sh 'docker build -t deployedimage .'
                sh 'docker run -dp 5000:4200 --name deployedcontainer -v $WORKSPACE:/project deployedimage'
            }
        }
    }
    post {
        always {
            sh 'docker stop testcontainer || true'
            sh 'docker rm testcontainer || true'
            sh 'docker image rm testimage || true'
        }
    }
}

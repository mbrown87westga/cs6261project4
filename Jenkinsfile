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
                sh '$WORKSPACE/node_modules/protractor/bin/webdriver-manager update'
                sh 'ng e2e --devServerTarget='
            }
        }
        stage('Deploy') {
            steps {
                echo 'Not yet implemented'
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

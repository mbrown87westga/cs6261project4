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
                docker build -t testimage .
                docker run -dp 4200:4200 --name testcontainer -v /home/mbrown87/project/cs6261project4/:/project -v $WORKSPACE:/project/src/app project4
                ./node_modules/protractor/bin/webdriver-manager update
                ng e2e --devServerTarget=
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
            docker stop testcontainer || true
            docker rm testcontainer || true
            docker image rm testimage || true
        }
    }
}

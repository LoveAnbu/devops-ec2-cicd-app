pipeline {
    agent any

    stages {

        stage('Clone Code') {
            steps {
                git 'https://github.com/LoveAnbu/devops-ec2-cicd-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t myapp:latest .'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh 'docker rm -f myapp || true'
            }
        }

        stage('Run New Container') {
            steps {
                sh 'docker run -d -p 3000:3000 --name myapp myapp:latest'
            }
        }
    }
}

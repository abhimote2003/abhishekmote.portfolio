pipeline {
    agent any

    stages {
        stage('Clone Code') {
            steps {
              git branch: 'main', url: 'https://github.com/abhimote2003/abhishekmote.portfolio.git'
            }
        }

        stage('Build') {
            steps {
                echo 'Building project...'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application...'
            }
        }
    }
}

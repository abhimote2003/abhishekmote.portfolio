pipeline {
    agent any

    stages {
        stage('Clone Code') {
            steps {
                git 'https://github.com/abhimote2003/abhishekmote.portfolio'
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

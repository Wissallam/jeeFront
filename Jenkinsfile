pipeline {
    agent any

    stages {

        stage('Build') {
            steps {
                echo 'Building..'
                bat 'npm install' // Install project dependencies
                bat 'npm run build' // Build the Angular project
            }
        }

        stage('Test') {
            steps {
                echo 'Testing..'
                bat 'npm run test' // Run tests for the Angular project
            }
        }

        stage('Archive') {
            steps {
                archiveArtifacts(artifacts: '**/dist/**') // Archive the built artifacts
            }
        }
    }
}

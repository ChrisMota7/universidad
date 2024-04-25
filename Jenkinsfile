pipeline {
    agent any

    stages {
        stage('Clonar Repositorio') {
            steps {
                git url: 'https://github.com/ChrisMota7/universidad.git'
            }
        }
        
        stage('Construir Docker Image') {
            steps {
                script {
                    dockerImage = docker.build('u-api/${BUILD_NUMBER}')
                }
            }
        }

        stage('Ejecutar Docker Compose') {
            steps {
                sh 'docker-compose -f docker-compose.yml up -d'
            }
        }

        stage('Limpiar') {
            steps {
                sh 'docker-compose down'
            }
        }
    }
}

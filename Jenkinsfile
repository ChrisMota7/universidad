pipeline {
    agent any

    stages {
        stage('Clonar Repositorio') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/ChrisMota7/universidad.git'
            }
        }
        
        stage('Construir Docker Image') {
            steps {
                script {
                    dockerImage = docker.build("u-api/${env.BUILD_NUMBER}")
                }
            }
        }

        stage('Ejecutar Docker Compose') {
            steps {
                bat "docker-compose up -d"
            }
        }


        stage('Limpiar') {
            steps {
                sh 'docker-compose down'
            }
        }
    }
}


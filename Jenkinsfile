pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                // Clonar el repositorio
                git 'https://github.com/tu-usuario/tu-repositorio.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                // Instalar dependencias con npm
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                // Ejecutar pruebas con npm test
                sh 'npm test'
            }
        }
        stage('Build') {
            steps {
                // Construir la aplicación con npm run build
                sh 'npm run build'
            }
        }
        stage('Deploy') {
            steps {
                // Desplegar la aplicación (puedes personalizar este paso según tus necesidades)
                // Ejemplo: copiar archivos al servidor de producción
                sh 'rsync -avz ./dist user@servidor:/ruta/destino'
            }
        }
    }
}
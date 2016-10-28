node('web') {
    docker.image('sebfere/node-softshake:v2').inside("-v /export/soft/buildcc/.ssh:/root/.ssh -u 0:0 -e DOCKER_FIX=' '") {
        stage('init') {
            echoStage 'init'

            checkout scm

            echoBuildContext()

            wrap([$class: 'AnsiColorBuildWrapper', 'colorMapName': 'XTerm']) {
                retry(2) {
                    sh 'npm install'
                }
                sh 'bower install --allow-root'
            }
        }

        stage('build') {
            echoStage 'build'

            wrap([$class: 'AnsiColorBuildWrapper', 'colorMapName': 'XTerm']) {
            sh 'grunt build'
            }
        }

        stage('unit-test') {
            echoStage 'unit-test'

            wrap([$class: 'AnsiColorBuildWrapper', 'colorMapName': 'XTerm']) {
            sh 'grunt test'
            }
        }
    }
}

stage('artifact') {

    timeout(time: 30, unit: 'SECONDS') {
        input 'Do you want to release AngularTodo ?'
    }
}

node('web') {
    echoStage 'artifact'

    sleep 2

    /*
    nexusArtifactUploader(
    artifactId: 'AngularTodo',
    file: 'release.zip',
    groupId: "com.tanou73",
    nexusUrl: 'nexus/',
    nexusUser: 'tanou73',
    nexusPassword: 'haha, you ll never know',
    nexusVersion: 'nexus3',
    packaging: 'zip',
    protocol: 'http',
    repository: 'release',
    type: 'zip',
    version: config.version
    )
    */
}

def echoStage(String stageName) {
echo """
*************************************************
************************************************* ${stageName.toUpperCase()}
*************************************************
"""
}

def echoBuildContext() {
echo """
jobName ${env.JOB_NAME}
buildNumber ${env.BUILD_NUMBER}
nodeName ${env.NODE_NAME}

branch ${env.BRANCH_NAME}
"""
}

# Docker images published in project container registry
#
# Used in the pipeline:
# - docker executors are faster to fetch images (compared to docker.io registry)
# - avoids to have before_script for setup which slower the jobs

# Install dependencies and build the project
FROM cypress/browsers:node14.17.0-chrome91-ff89 AS ci-node

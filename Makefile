APPLICATION_NAME=powermindz

VERSION=$(shell date +%Y%m%d_%H%M)
DOCKER_TAG_LATEST=$(APPLICATION_NAME):latest
DOCKER_TAG_VERSION=$(APPLICATION_NAME):$(VERSION)
DOCKER_PROGRESS=--progress=plain
COVERAGE_OUTPUT=coverage.txt
env:=$(or $(env),default)
DOCKER_FILE=conf/$(env)/Dockerfile

help: ## Display this help screen
	@grep -h -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

docker-build: ## Build docker image
	docker build --no-cache $(DOCKER_PROGRESS) -t $(DOCKER_TAG_LATEST) -f $(DOCKER_FILE) .
	docker tag $(DOCKER_TAG_LATEST) $(DOCKER_TAG_VERSION)

docker-run: docker-container-rm ## Run docker image
	docker run -p 8000:8000 \
		--name $(APPLICATION_NAME) \
 		$(APPLICATION_NAME):latest

docker-container-rm: ## Remove docker container
	docker container rm -f $(APPLICATION_NAME)

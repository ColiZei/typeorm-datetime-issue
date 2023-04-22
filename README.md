Test Repository for https://github.com/typeorm/typeorm/issues/9941

# Dependencies

Docker
Yarn

## Installation

```bash
$ yarn install
```

## Running the app

# Docker and Test DB

```bash
# Start
docker-compose up -d

# Stop
docker-compose down
```

```bash
# build
$ yarn build

# start test
$ yarn test:e2e

```

# Reproduce

1. `yarn install`
2. `docker-compose up -d`
3. `yarn test:e2e` (Should PASS)
4. `yarn add typeorm@0.3.13` (Or higher)
5. `yarn test:e2e` (Should FAIL!)
6. `yarn add typeorm@0.3.12`
7. `yarn test:e2e` (Should PASS!)

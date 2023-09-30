# express-ts-basic-template

Basic express template using typescript.

### Usage

Use this template to create a new repository by clicking on the "Use this template" button.
Clone your repository and run:

```
 npm install
 npm run build
 npm run dev
```

## Running with docker

To run this repository you can start it using the Dockerfile.dev file. This will start the development server on port 3000.

```bash
docker build . -f Dockerfile.dev -t <container-name>
docker run -p 3001:3001 <container-name>
```

This is NOT a Dockerfile production ready. It is only for development purposes.
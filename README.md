# Template

This template is a working example of a microservice providing CRUD API endpoints. It integrates with GCP Firestore & GCP PubSub.

## Running Local

To run a microservice locally but pointed at GCP backend services, you must assign the default credentials environment variable to the path of a local copy of a valid service account.

```
export GOOGLE_APPLICATION_CREDENTIALS=/path/to/credentials.json
```

## Requests

### Overview

All HTTP request follow the same code flow but executing the appropriate methods for the associated endpoint.

The Controller is responsible for validating the parameters and body of the requests. The validation uses JSON Schema definitions found in the `db-json-schemas` repository (via GitHub Pages).

After the Service completes the request to the Repository, it publishes the event details to the `LogEventTopic` in PubSub.

_Typical HTTP request_

```http
GET /tenants/:id HTTP/1.1
```

_Typical code flow_

```mermaid
flowchart TB
   start([start]) --> request[[HTTP Request]]
   request --> controller("TenantHttpController")
   controller -. validate request .- model("TenantModel")
   controller --> commands("TenantCommands")
   commands --> service("TenantService")
   service --> repository("TenantRepository")
   service -.-> pubsub>"PubSub"
   repository --> database[(Firestore)]
```

### Requests

#### Get Tenant

```http
GET /tenants/:id HTTP/1.1
```

#### Get Tenants

```http
GET /tenants HTTP/1.1
```

#### Create Tenant

[Schema Reference](https://yunibas.github.io/json-schemas/tenant.json)

```http
POST /tenants HTTP/1.1
content-type: application/json

{}
```

# ToDos

-  GET /tenants route returns 404
-  Add axios and use schema validation ms to perform payload validation
-  Document setup for GCP when running locally

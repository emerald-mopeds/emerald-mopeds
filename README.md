# Lance-a-lot

> A job management tool for freelancers.

## Team

  - __Product Owner__: Thomas Sorensen
  - __Scrum Master__: Rochelle Lee
  - __Development Team Members__: Ammar Mian, Cheyenne Kellis

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Team](#team)
1. [Contributing](#contributing)

## Usage

Deployed address:
http://lance-a-lot.herokuapp.com/

Start by adding a client.  Then add a job.  Put in the job information and now you can view your jobs and/or clients.  

## Requirements

- Backbone 1.2.3x
- Bcrypt-nodejs 0.0.3x
- Body-parser 1.14.1x
- Express 4.13.3x
- jQuery 2.1.4x
- Mongoose 4.2.5x
- Morgan 1.6.1x
- Underscore 1.8.
- Bower 2.1.4



## Development

### Installing Dependencies

From within the root directory:

```sh
sudo npm install -g bower
npm install
bower install
```

### Seeded Data and Grunt
During development testing, run 'grunt upload' to both start the server and to automatically seed the database with dummy data. Dummy data can be editted in the json files in the 'seeds' directory. The name of the json files must correspond to the collection name in the MongoDB database. 

### Integrating with Toggl API
Toggl is an online time tracking tool that is popular among freelancers, consultants and small companies. Toggl has great API documentation including a Node library to simplify the process of making requests to its API (https://github.com/7eggs/node-toggl-api). We envisioned using Toggl to implement our time tracking feature and so we need all our users to have a Toggl account. If users do not have a Toggl account, we can automatically create one for them from our Sign Up page. If a user does have a Toggl account, they should use their Toggl account details to sign up on our platform. Once a user is in our database, we store their Toggl user specific API token and will be using that to make requests to the Toggl API.

### Using Mongoose with relational data
It wouldn't be a completely unwise decision to refactor the database to a relational database. However, using MongoDB will still suffice as there are Mongoose methods and properties in place to work like foreign keys and join methods. For example, the client field in our Job model stores the ID of a client. When responding to a GET request for all the Jobs, our request handler populates the 'client' field with an object that contains the client's name before sending all the Job documents. 

### Roadmap

View the project roadmap [here](https://github.com/emerald-mopeds/emerald-mopeds/wiki)


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

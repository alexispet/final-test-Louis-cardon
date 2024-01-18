# Y Social network API

Production URL: __________  
Development URL: __________

## Description
This is the official API for the Y Social Network. 
It's built with Node.js, Express.js, MariaDB.

## Requirements
| Requirement | Version |
| ----------- |---------|
| Node.js     | 21.5.0  |
| MariaDB     | 11.2.2  |

## Installation
1. Clone the repository
2. Install the dependencies
3. Import database structure and default content with `npm run db:import`
4. Run the server with `npm run start`
5. API is now available at `http://localhost:3000`

## API Documentation
| Method | Endpoint | Description   |
| ------ |----------|---------------|
| GET    | /post    | Get all posts |

## Testing
Run `npm run test` to run the integration tests.
> Note: You need to have the database imported before running the tests.

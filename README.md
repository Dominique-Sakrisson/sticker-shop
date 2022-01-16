# Mock sticker shop
An express restful CRUD application connected to a postgres database for storage.

Libraries:
Jest -- testing framework used to test the api
Supertest -- used to mock the api calls within the test environment.
twilio SMS -- Upon a successful POST to `/api/v1/items` the `sendSms` function is called from the twilio library. This function sends a text to the twilio order handling phone number. Users do not have access to change that phone number. 
AWS SDK -- Utilizes s3 to upload orders recieved via `POST` to the `/api/v1/orders` endpoint

Twilio SMS will also sends out a notification of the order
(message is stuck to being sent to a number provided by the service, cannot set to have clients recieve to their numbers)

# jwa-demo-part-2
These are the project files for the "Securely Store User Passwords using Bcrypt Hashing" HtmlGoodies.com article. 

The user model defines the schema for the User collection and exports the model for other modules to use.

In the user.route.js file, the post() method takes the password field of the incoming request and hashes it. Then, a new user is created and added to the MongoDB database. If something should go wrong along the way, the function returns the error within a json formatted response.

The server.js file is unchanged from part 1.

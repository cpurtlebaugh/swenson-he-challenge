# Setup
1. CD into the base of the repo and run `npm install` or `yarn install`

2. Make sure you have [postgresql](https://medium.com/@Umesh_Kafle/postgresql-and-postgis-installation-in-mac-os-87fa98a6814d) and knex globally installed 
    ``` 
        npm install knex -g
    ```

3. Create a postgres database for the project (make sure your user has sufficient roles to create db's)
    ```
        psql postgres
        postgres=# CREATE DATABASE swenson;
    ``` 
    You can use check to see if the DB was created by typing.
    ```       
        postgres=# \list
    ````

    For the new databse if your user does not have privileges listed in the Access Privilege column you can apply the following:

    ```
        GRANT CONNECT ON DATABASE databse TO username;
    ```

4. If you'd like to change the name of the database be sure to change the name in the `knexfile.js` on line #4 
    ``` 
        connection: 'postgres://localhost/swenson',
    ```
    
4. Next migrate and seed the database in the project by running the following:
    ```
        knex migrate:latest
        knex seed:run
    ```
    

5. Run the server locally: 
    ```
        npm start
    ```

6. You can hit the following endpoint `localhost:8000/api/v1/recommendations` via postman with query params (machine, waterline, flavor, count, pod).

    ex: localhost:8000/api/v1/recommendations?machine=espresso&flavor=vanilla&count=1&pod=espresso&waterline=true

    ###### Note: 
    If you do not wish to filter a value the query params can be empty (flavor=) but the query params must be passed in or else the server will return an error.

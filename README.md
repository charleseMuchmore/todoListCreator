# todoListCreator
### TODO:
-add a settings.js file later 
-make a better addline function (in index.js)
-fix this issue with assignments and resources turning 


### SalesforceRestApi
Contains 1 method, called fetch.  
Fetch takes 1 parameter: a query string. See example below for the format.  
Uses a .env file with ACCESS_TOKEN for authorization and INSTANCE_URL for the domain.  
If the request is succesful, the method returns an object, with a records field that contains the records requested.  

##### Example Code:
let sfRestApi = new SalesforceRestApi(); //new instance of the class  
let data = await sfRestApi.fetch("query?q=SELECT+name,id+from+CourseInfo__c"); //asynchronous fetching of data  
console.log(data); //displaying in console  

##### NOTE:
When the ACCESS_TOKEN for this api expires, it must be manually replaced.  
An expired access token will yield an "INVALID_SESSION_ID" errorCode.


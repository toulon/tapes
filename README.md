Tape tracking system using node.js, mongodb, bootstrap, express and hopefully backbone

Created by Norman Coder

Currently stored in tapes/dump

Data backed up using
 mongodump -h localhost -d tapes

 Data restored using
 mongorestore -d tapes dump/tapes

I have two basic questions/problems

1. localhost:8082/tapes does not display sorting, pagination, and other features I supposedly added based on https://datatables.net. What I
	need are the basic features displayed on the first page of https://datatables.net to work. I don't care if it is bootstrap, can 
	only seem to get part of that working, or data tables.

2. This is a simple one. For some, hopefully simple, reason I can't get http://localhost:3002/users to display the username from the
   people collection. My plan is to add user authentication, but that will come later unless you have time to help me with that too.

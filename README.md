# Web Dev Project


## Aim
To create a catalogue of Video Games to be referenced to by everyone.

## Theory
## Request Response Cycle
1. Request
```mermaid
graph TB
Browser;

subgraph Node
	Express;
	Mongoose;
	EJS;
end

Browser -->|GET request| Node;
Express -->|Find Queries| Mongoose;
Express -->|Render Queries| EJS;

Mongoose --> Database;
EJS <--> Static-File-System;
```

2. Response
```mermaid
graph TB
Browser;

subgraph Node
 Express;
 Mongoose;
 EJS;
end

Node -->|Response|Browser;
Mongoose -->|JavaScript Objects|Express;
EJS -->|Static files|Express;

Database -->|BSON| Mongoose;
Static-File-System <--> EJS;
```

## Tech Stack
- HTML
- CSS
- JavaScript
- Node
- Express
- MongoDB
- Embedded JavaScript
## Future Scope
1. Addition of Account Systems
2. URL Validation for Game Websites
3. Search Bar
## References
1. [IGDB](https://www.igdb.com/)
2. [IMDB](https://www.imdb.com/)

## Conclusion
A website fit for basic queries and searches has been created.
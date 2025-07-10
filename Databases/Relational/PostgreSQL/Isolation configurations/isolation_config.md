# PostgreSQL - Isolation Configs

`Isolation levels` define how transactions interact with each other, specifically how concurrent transactions see the 
data changes made by others.

SQL standard defines 4 isolation levels:

- Read Uncommitted: sees uncommitted changes from other transactions
- Read Committed: Default for PostgreSQL, only sees committed data
- Repeatable Read: Sees a consistent snapshot for the entire transaction
- Serializable: Emulates running all transactions one after another (serially)
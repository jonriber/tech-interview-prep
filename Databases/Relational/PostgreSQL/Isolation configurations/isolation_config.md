# PostgreSQL - Isolation Configs

`Isolation levels` define how transactions interact with each other, specifically how concurrent transactions see the 
data changes made by others.

SQL standard defines 4 isolation levels:

- Read Uncommitted: sees uncommitted changes from other transactions
- Read Committed: Default for PostgreSQL, only sees committed data
- Repeatable Read: Sees a consistent snapshot for the entire transaction
- Serializable: Emulates running all transactions one after another (serially)

## Serializable

When Serializable isolation is on, basically you are telling postgreSQL:

I want to ensure full correctness even under heavy concurrency. If that means retrying transactions occasionally,
that's acceptable.

It protects against:

- Dirty reads: seeing uncommitted changes from another transaction
- Non-repeatable reads: data changing during the transaction
- Phantom reads: rows appearing or disappering in a repeated query
- write skew: when two concurrent transactions both pass checks and commit, but together violate business rules

In other words, PostgreSQL makes sure that the results of concurrent transactions could have happened if they were
run one at a time, in some serial order.
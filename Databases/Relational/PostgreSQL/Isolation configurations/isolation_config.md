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

## Why it is important 

- Data correctness first: Serializable isolation eliminates subtle data corruption bugs that are hard to test for and 
even harder to detect in production.
- Safer defaults: In complex apps, especially ones involving financials, scheduling, or health data, consistency is more
important than raw speed.
- Preventing concurrency anomalies: Even developers with good intentions may not understand all possible race conditions
that weaker isolation levels allows.

## Trade-offs

When serializing transactions, there are trade-offs to take into consideration:

- Performance: Serializable mode can result in more frequent transactions retries if there's a conflict. PostgreSQL 
does not lock everything pessimistically- it uses a method called `Serializable snapshot Isolation (SSI)`.
- Complexity: Code must handle retrying transactions when serialization failures occur (error code 40001)
# Class Dunder methods

Special methods that start and ends with double underscores.

They are used to define how objects behave with built-in python operations.

## Commonly used dunder methods

### Initialization and representation

- __init__(self, ...): Constructor, called when a new object is created.

- __repr__(self): Developer-friendly string representation.

- __str__(self): User-friendly string representation (used by print()).

- __del__(self): Destructor, called when the object is about to be destroyed.e

### Operator Overloading

- __add__(self, other): self + other

- __sub__(self, other): self - other

- __mul__(self, other): self * other

- __truediv__(self, other): self / other

- __eq__(self, other): self == other

- __lt__(self, other): self < other

- __gt__(self, other): self > other

### Container Methods

- __len__(self): Called by len()

- __getitem__(self, key): Called for obj[key]

- __setitem__(self, key, value): Called for obj[key] = value

- __delitem__(self, key): Called for del obj[key]

- __iter__(self): Returns an iterator object.

- __next__(self): For iteration, returns the next item.

### Context Managers

- __enter__(self): Called when entering a with block.

- __exit__(self, exc_type, exc_val, exc_tb): Called when exiting a with block.

### Callable and Boolean Evaluation

- __call__(self, ...): Makes an instance callable like a function.

- __bool__(self): Called by bool(obj) or in conditionals.
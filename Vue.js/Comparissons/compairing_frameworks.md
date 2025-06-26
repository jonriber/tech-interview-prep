# Vue.js vs other modern frameworks

## Data binding

Data binding is the mechanism that connects javascript data (state) with the DOM.

### One way data binding
```vue

<!-- One-way binding -->
<h1>{{ title }}</h1> <!-- title is rendered from script -->
```
From data to the view (interface)
### Two way data binding

```vue

<!-- Two-way binding (with v-model) -->
<input v-model="username" />
```
Syncing data changes both ways (view <---> model)

### Data binding on React

Everything in React is essentially one-way data binding. React updates the DOM using a virtual DOM diff when something
changes.

Vue:


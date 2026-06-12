# @n8n-dev/n8n-nodes-fulfillment

![fulfillment Banner](banner.svg)

[![npm version](https://img.shields.io/npm/v/@n8n-dev/n8n-nodes-fulfillment.svg)](https://www.npmjs.com/package/@n8n-dev/n8n-nodes-fulfillment)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

**Stop writing fulfillment API integrations by hand.**

Every time you connect n8n to fulfillment, you waste hours mapping endpoints, defining parameters, and debugging schemas. You copy-paste from docs, fix edge cases, and pray nothing breaks.

**What if connecting n8n to fulfillment took 5 minutes, not half a day?**

This node gives you **8+ resources** out of the box: **Auth**, **Orders**, **Inventory**, **Partners**, **Returns**, and 3 more: with full CRUD operations, typed parameters, and zero manual configuration.

---

## What You Get

- **Zero boilerplate**: Resources, operations, and fields are pre-configured and ready to use
- **Full CRUD**: Create, read, update, and delete support where the API allows it
- **Typed parameters**: No more guessing field types
- **Built-in auth**: API key authentication, ready to go
- **Declarative**: Native n8n performance, no custom execute() overhead

---

## Install

```bash
npm install @n8n-dev/n8n-nodes-fulfillment
```

**Or in n8n:**
1. **Settings → Community Nodes → Install**
2. Search: `@n8n-dev/n8n-nodes-fulfillment`
3. Click **Install**

---

## Quick Start

1. Install the node (above)
2. Add credentials: **fulfillment API** → paste your API key
3. Drag the **fulfillment** node into your workflow
4. Pick a resource → pick an operation → done.

That's it. No configuration files. No code. It just works.

---

## Resources

<details>
<summary><b>Auth</b> (1 operations)</summary>

- Post Generate an Access Token

</details>

<details>
<summary><b>Orders</b> (4 operations)</summary>

- Get List of Orders
- Post New Order
- Delete Cancel an Order
- Get Order Details

</details>

<details>
<summary><b>Inventory</b> (1 operations)</summary>

- Get List of Item Inventories

</details>

<details>
<summary><b>Partners</b> (2 operations)</summary>

- Put Ship an Order
- Put Update Order Status

</details>

<details>
<summary><b>Returns</b> (2 operations)</summary>

- Get List Returns
- Put Inform us of an RMA

</details>

<details>
<summary><b>Tracking</b> (1 operations)</summary>

- Get Tracking

</details>

<details>
<summary><b>Users</b> (1 operations)</summary>

- Get About Me

</details>

<details>
<summary><b>Accounting</b> (1 operations)</summary>

- Get List Order Accounting

</details>

---

## Why This Node?

**Without this node:**
- Hours of manual API integration
- Copy-pasting from fulfillment docs
- Debugging auth, pagination, error handling
- Maintaining your own client code

**With this node:**
- Install → configure → use. 5 minutes.
- Auto-generated from the official fulfillment OpenAPI spec
- Always up to date when the API changes
- Native n8n performance

---

## Auto-Generated
This node was auto-generated from the official **fulfillment** OpenAPI specification using
[@n8n-dev/n8n-openapi-node-ultimate](https://github.com/kelvinzer0/n8n-openapi-node-ultimate),
then validated against the live API so you get accurate types and real parameters, not guesswork.

When the fulfillment API updates, this node updates too.

---


## License

MIT © [kelvinzer0](https://github.com/n8n-code)

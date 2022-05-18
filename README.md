# Unofficial Nodejs Partnerstack API, by pyscriptbug
Fully typed Partnerstack API sdk

### Installing
Run the following command under your project
- `npm i partnerstack`

### Initializing
First you need to initialize the parnerstack instance as the following
```javascript
import { initializePartnerstack } from 'partnerstack';

intializeParnerstack({ apiKey: "Your_API_key", secretKey: "Your_Secret_key" });
```

### Usage
Then you can call any method from the `api`
```javascript
import { api } from 'partnerstack';

const deals = api.getAllDeals(); // will return an object with `hasMore` boolean and `items` containing every deal.
```

For further docs see [Partnerstack Reference](https://docs.partnerstack.com/reference/auth)
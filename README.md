<p id="start" align="center">
<br>

  <h1 align="center" color='7582EB'>PetSoft</h1>
  
</p>

## Table of Contents

1. <a href="#overview">Overview</a>
2. <a href="#appConfig">Application Configurations</a>
3. <a href="#envExample">Environment Variables</a>
4. <a href="#appShots">Screenshots</a>

<h2 id="overview">Overview</h2>

PetSoft is a web application designed for learning purposes, built with Next.js 13, featuring full CRUD functionality, an optimistic UI, server actions, authentication, test payment integration, and more.

### Key Features:

- protected routes available only to registered users
- dashboard with all available pets
- full CRUD and optimistic UI implemented with server actions
- JWT is stored in a cookie (Authentication)
- redirect rules via Next-Auth

### Built With:

- TypeScript
- Next.js
- Prisma
- PostgreSQL
- Tailwind CSS
- Shadcn UI
- NextAuth
- React-Hook-Form
- Zod
- Stripe
- Bcrypt js
- Sonner

<h2 id="appConfig">Application Configurations</h2>

### Node version

```javascript
Node version: v20.10.0
```

### Test Credentials

```javascript
User: example@gmail.com
Password: example
```

### Available Scripts

```javascript
# install dependencies
npm install

# start
npm run dev

# db seed
npx prisma db seed
```

### Application Nav

![Application Nav](/appScreens/petSoft_nextNav.png)

<h2 id="envExample">Environment Variables</h2>

To run this project, create a `.env` file in the root directory and include the following variables:

```
POSTGRES_URL=
POSTGRES_PRISMA_URL=
POSTGRES_URL_NO_SSL=
POSTGRES_URL_NON_POOLING=
POSTGRES_USER=
POSTGRES_HOST=
POSTGRES_PASSWORD=
POSTGRES_DATABASE=
AUTH_SECRET=
STRIPE_PRODUCT_API_ID=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
CANONICAL_URL=
```

<h2 id="appShots">Screenshots</h2>

### Home View

![Home View](/appScreens/petSoft_main.png)

### Registered user dashboard

![City Events](/appScreens/petSoft_dashboard.png)

### Pet CRUD

![Event View](/appScreens/petSoft_petForm.png)

### Stripe for payments

![Event View](/appScreens/petSoft_stripe.png)

### Payment completion and redirect

![Event View](/appScreens/petSoft_payments.png)

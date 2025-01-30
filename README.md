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

- Protected routes available only to registered users
- Dashboard with all available pets
- Full CRUD and optimistic UI implemented with server actions
- JWT is stored in a cookie (Authentication)
- Redirect rules via Next-Auth

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

### Node Version

```plaintext
Node.js version: v20.10.0
```

### **Test Credentials**

```plaintext
User: example@gmail.com
Password: example
```

### Available Commands

Below are the main scripts used to set up and run the application:

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Seed the database
npx prisma db seed
```

### Application Nav

![Application Nav](/appScreens/petSoft_nextNav.png)

<h2 id="envExample">Environment Variables</h2>

To run this project, create a `.env` file in the root directory and configure the following variables:

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

### Registered User Dashboard

![Dashboard](/appScreens/petSoft_dashboard.png)

### Pet CRUD

![Pet CRUD](/appScreens/petSoft_petForm.png)

### Stripe Payment Integration

![Stripe Payment](/appScreens/petSoft_stripe.png)

### Payment Completion and Redirect

![Payment Success](/appScreens/petSoft_payments.png)

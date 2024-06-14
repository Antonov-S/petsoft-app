<p id="start" align="center">
<br>

  <h1 align="center" color='7582EB'>PetSoft</h1>
  
</p>
Next.js 13 project with full CRUD, optimistic UI, server actions, auth, payments, and more!

## Table of Contents

1. <a href="#overview">Overview</a>
2. <a href="#appConfig">Application Configurations</a>
3. <a href="#builtWith">Built with</a>
4. <a href="#appShots">Screenshots</a>

<h2 id="overview">Overview</h2>
PetSoft is a web application intended for learning purposes. It has the following functionality:

- protected routes available only to registered users
- dashboard with all available pets
- full CRUD and optimistic UI implemented with server actions
- JWT is stored in a cookie (Authentication)
- redirect rules via Next-Auth

<h2 id="appConfig">Application Configurations</h2>

**Node.js version:** `v20.10.0`

**Test user:** example@gmail.com **Password:** example

### Available Scripts

```javascript
# install dependencies
npm install

# start
npm run dev

# db seed
npx prisma db seed
```

#### Application Nav

![Application Nav](/appScreens/petSoft_nextNav.png)

<h2 id="builtWith">Built With</h2>

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

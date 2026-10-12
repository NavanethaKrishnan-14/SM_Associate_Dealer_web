# SM Associate Cars — Marketplace Web Starter

This repository was empty when initialized. This is the first working web foundation for an original Cars24-inspired used-car marketplace for SM Associate Cars; it is not affiliated with Cars24 and does not copy proprietary source code or branding.

## Features
- Customer and dealer role selection during signup/sign-in.
- Buy used cars marketplace with search, filters, sorting and car-detail links.
- Sell/trade-in lead capture form.
- Role-specific sign-in and dealer registration foundations.
- Uses the existing SM Associate Cars API at `/api/v1`.
- Responsive styling and live marketplace inventory from the backend.
- Clear empty, loading and API-error states.

## Run
```bash
npm install
cp .env.example .env.local
npm run dev
```

Set `NEXT_PUBLIC_API_BASE_URL` to your deployed API origin including `/api/v1`.

## API expectation
- `GET /cars?limit=12&page=1` returns `{ success:true, data: Car[] }`
- `GET /cars/:id` returns `{ success:true, data: Car }`
- `POST /auth/register/customer`, `POST /auth/register/dealer`
- `POST /auth/login` returns `{ success:true, data:{ user, accessToken, refreshToken, ... } }`

Never commit production secrets. The backend's sell-enquiry schema should be verified before accepting production leads.

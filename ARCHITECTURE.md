```mermaid

flowchart TD

    A[User Browser - Next.js Frontend] --> B[Spend Input Form]
    B --> C[Express Backend - Audit Engine]
    C --> D[Pricing Data Service]
    C --> E[Lead Capture API]
    C --> F[AI Summary via Anthropic API]
    E --> G[Supabase/Postgres DB]
    F --> H[Results Page + Personalized Summary]
    G --> H
    H --> I[Shareable Public URL + Open Graph]
    E --> J[Transactional Email Service]



## Day 1 — 2026-05-07 
**Hours worked:** 3 

**What I did:** Setup Next.js project, created architecture.md for initial stage,created repo.

**What I learned:** Learned about the mermaid structure and its use 

**Blockers / what I'm stuck on:** none
 
**Plan for tomorrow:** Build spend input form.


## Day 2 - 2026-05-08
Hours worked: 4

**What I did:**  
- Designed and implemented the landing page (hero section, CTA, features, testimonials).  
- Completed PRICING_DATA.md with verified links for all the provided AIs.  

**What I learned:**  
- How to structure pricing data clearly in markdown for audit engine use.  
- Improved my TailwindCSS layout skills for responsive landing page design.  

**Blockers / what I'm stuck on:**  
- Need to finalize audit engine logic to read from PRICING_DATA.md.  
- Still deciding how to handle batch vs standard pricing.   

**Plan for tomorrow:**  
- Start coding the audit engine function skeleton.  
- Add initial test cases for pricing comparison logic.  


## Day 3 - 2026-05-09
Hours worked: 4

**What I did:**  
- Converted `PRICING_DATA.md` into a structured `pricing.json` for audit engine logic.  
- Designed and implemented dynamic field rendering in `AuditForm2` (tokens vs seats vs mixed).  
- Built a clean and effective Audit Form UI (desktop + responsive design).  
- Verified mapping of AI tools to correct input types (token-based vs seat-based).  
- Drafted audit form design with TailwindCSS layout and conditional rendering.  

**What I learned:**  
- How to map pricing models (tokens vs seats) into dynamic form logic.  
- Practical JSON conversion from markdown for data-driven audit checks.  
- UI design principles for recruiter-friendly forms (step-wise layout, clean CTA).  

**Blockers / what I'm stuck on:**  
- Need to finalize audit engine skeleton to calculate overspending vs savings using `pricing.json`.  
- Still deciding how to structure result card design for audit output.  

**Plan for tomorrow:**  
- Implement audit engine function to compare form data against `pricing.json`.  
- Build result card UI to display expected cost, overspending, and savings.  
- Connect form submission with audit engine output for end-to-end flow.

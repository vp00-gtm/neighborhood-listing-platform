# AI Decision Log



## Neighborhood Listing Platform



This document records how AI tools were used to help plan and build the application. AI suggestions were reviewed and tested before being used.



### AI Comparison



##### ChatGPT



Next.js = the overall framework, it is like the building system for websites.



TypeScript = helps make your code safer and easier to understand. A type tells the computer what kind of information something is. It doesn't prevent every mistake, but it can catch many problems before they become bigger.



Tailwind CSS = controls how the website looks. It is the website's styling toolbox.



App Router = organizes the pages and navigation inside Next.js. The App Router uses your project's folders and files to help organize these pages.



SRC = source. It is simply a folder. Your source code is the code you wrote to create your application.



App folder = inside `src` you can have `src → app`. The app directory is where you organize your application's routes/pages when using Next.js's App Router.



##### Gemini



Next.js: A popular framework built on top of React, Next.js gives you a complete structure. It handles complex tasks like routing, server-side rendering, and performance optimization out of the box.



TypeScript: An upgraded version of JavaScript. TypeScript adds "types," meaning it checks your code as you type and warns you immediately if you pass the wrong kind of data into a function.



Tailwind CSS: A tool for styling your website. Instead of writing traditional CSS files with custom class names, Tailwind gives you small, pre-made utility classes that you type directly into your HTML/React code.



The App Router: Next.js's built-in system for managing pages and navigation.



The src Directory: A dedicated folder (`src/`) used to house all the code you write (components, pages, styles), keeping it neatly separated from your project's configuration files.



### Two Differences Observed



**ChatGPT:** Uses beginner-friendly words and simple explanations to help someone brand new to web development understand the concepts. It also explains what each tool is used for and how it relates to the project.



**Gemini:** Provides more technical descriptions. It assumes that the user is comfortable with developer terminology and uses a more documentation-style tone to describe what each tool does and why it is useful in a professional context.



#### AI Collaboration Record



| Tool             | Prompt                                                                                                                                                                                               | Output Used                                                                                                                       | Output Rejected                                                                                        | Verification                                                                                                                                                                                          | Commit                                                          |

| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |

| ChatGPT          | Asked for a plain-language explanation of the proposed Next.js stack for a beginner.                                                                                                                 | Used the explanations of Next.js, TypeScript, Tailwind CSS, App Router, src, and the app folder to understand the proposed stack. | More technical wording was simplified so the explanation would be easier for a beginner to understand. | Compared the explanation with the actual Next.js project structure and successfully created the app shell.                                                                                            | `0ab9054`                                                       |

| Gemini           | Asked for the same plain-language explanation of the proposed stack.                                                                                                                                 | Used Gemini's explanations to compare its descriptions with ChatGPT's descriptions.                                               | Technical wording was not used directly in the beginner explanation.                                   | Compared Gemini's explanation with the actual project structure and ChatGPT's response.                                                                                                               | `0ab9054`                                                       |

| Google AI Studio | Asked the App Shell Architect prompt to propose a minimal Next.js App Router + TypeScript + Tailwind starter and provide a file plan, terminal commands, accessibility requirements, and a verification checklist. | Used the proposed Next.js App Router, TypeScript, Tailwind, and `src/` directory structure. The proposed commands included `--typescript`, `--tailwind`, `--app`, `--src-dir`, `--import-alias "@/\*"`, and `--use-npm`. Used the ideas for `src/app/page.tsx`, `src/app/layout.tsx`, semantic HTML, logical heading hierarchy, and accessibility. The verification checklist also helped identify linting, TypeScript checking, and production build as tests to perform. | The proposed separate `neighborhood-property-starter` folder was not used because the assignment required the application to be created inside the existing `neighborhood-listing-platform` repository. The proposed `src/types/index.ts` file was not needed for the current starter page. The proposed `tailwind.config.ts` structure was not copied manually because the actual Next.js project generated its configuration. | The Next.js application was successfully created in the existing repository. The local development server loaded the page. The starter page was replaced with the required neighborhood platform page containing Listings, Neighborhood Sponsors, and Voice Help. The browser console showed no errors. Linting, TypeScript checking, and the production build will be verified before the final commit. | f9ba7a5 — Build neighborhood app shell |



##### Verification



The AI-generated suggestions were not accepted without testing.



\* The Next.js application was successfully created.

\* The local development page loaded successfully.

\* The starter page was replaced with a neighborhood listing platform page.

\* The page contains a project heading and description.

\* The page contains three feature cards: Listings, Neighborhood Sponsors, and Voice Help.

\* The browser console showed no errors.

\* The development server successfully served the page.

\* `npm run lint` and `npm run build` will be run before the final app-shell commit.






---

## Lab 2 — Component and Accessibility Review

### Component Work

AI assistance was used to propose and review reusable TypeScript components for the neighborhood listing interface.

The components created were:

- `PropertyCard`
- `SponsorBanner`
- `SearchFilters`

Shared `Property` and `Sponsor` TypeScript interfaces were created in `src/types/index.ts`.

The page renders three sample properties using `.map()` with stable property IDs as React keys. The listing grid uses responsive Tailwind classes so that it displays one column on small screens, two columns on medium screens, and three columns on large screens.

### ChatGPT Accessibility Review

**Prompt:**  
Review the React components for semantic HTML, WCAG-oriented keyboard access, responsive behavior, and TypeScript safety. Identify issues, explain why they matter, recommend the smallest change, and provide a manual test. Do not claim compliance from code alone.

**Output used:**  
Used the review to check semantic HTML, heading structure, accessible labels, descriptive image alt text, visible focus styles, keyboard navigation, and responsive behavior.

**Output rejected:**  
No suggested change was accepted automatically. Recommendations were checked against the actual components and browser behavior before changes were made.

**Verification:**  
`PropertyCard` uses `<article>`, a heading, descriptive image `alt` text, a list of property facts, and a descriptive property link. `SponsorBanner` uses `<aside>`, a visible "Sponsored" label, a heading, and a descriptive link. `SearchFilters` uses a `<form>`, explicit `<label>` elements connected to native `<select>` controls, and a native submit button.

Manual keyboard testing confirmed visible focus, logical Tab navigation, keyboard operation of the filter controls, activation of the Apply filters button with Enter, and descriptive property and sponsor links.

### Gemini Accessibility Review

**Prompt:**  
Review the PropertyCard, SponsorBanner, SearchFilters, and page for semantic HTML, WCAG-oriented keyboard access, responsive behavior, and TypeScript safety. Return the issue, why it matters, the smallest recommended change, and a manual test. Do not claim compliance from code alone. Focus on issues that can be verified in the browser.

**Output used:**  
Used Gemini's review as a second accessibility check and compared its suggestions against the actual implementation and browser testing.

**Output rejected:**  
Gemini suggested checking for nested interactive controls in `PropertyCard`, but the component does not contain nested interactive elements. Gemini suggested adding an `<aside>` to `SponsorBanner`, but the component already uses `<aside>`. Gemini suggested replacing custom filter controls with native controls, but `SearchFilters` already uses native `<select>` elements and a native `<button>`. Gemini suggested adding a `<main>` landmark, but the page already uses `<main>`.

**Verification:**  
The suggested issues were inspected against the actual source code and tested in the browser rather than being accepted automatically.

### Accessibility and Responsive Testing

- Lighthouse accessibility score: **100**
- Keyboard navigation tested with Tab and Shift+Tab.
- Filter controls were opened and changed using the keyboard.
- Apply filters was activated using Enter.
- Property and sponsor links were keyboard reachable and had descriptive link text.
- Responsive layout tested at approximately 400px, 800px, and 1517px widths.
- 400px displayed one property column.
- 800px displayed two property columns.
- 1517px displayed three property columns.
- Property images loaded successfully after configuring the approved Unsplash image hostname in `next.config.ts`.
- `npm run lint` completed successfully with no errors or warnings.

A React hydration warning appeared in the development console because browser-extension attributes were added to the page. The warning did not affect the Lighthouse accessibility score or the manual keyboard and responsive tests.

### Human Verification

AI suggestions were treated as drafts and were verified against the actual code and browser behavior. Changes were made only after testing the result.

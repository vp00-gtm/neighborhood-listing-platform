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

| Google AI Studio | Asked the App Shell Architect prompt to propose a minimal Next.js App Router + TypeScript + Tailwind starter and provide a file plan, terminal commands, accessibility requirements, and a verification checklist. | Used the proposed Next.js App Router, TypeScript, Tailwind, and `src/` directory structure. The proposed commands included `--typescript`, `--tailwind`, `--app`, `--src-dir`, `--import-alias "@/\*"`, and `--use-npm`. Used the ideas for `src/app/page.tsx`, `src/app/layout.tsx`, semantic HTML, logical heading hierarchy, and accessibility. The verification checklist also helped identify linting, TypeScript checking, and production build as tests to perform. | The proposed separate `neighborhood-property-starter` folder was not used because the assignment required the application to be created inside the existing `neighborhood-listing-platform` repository. The proposed `src/types/index.ts` file was not needed for the current starter page. The proposed `tailwind.config.ts` structure was not copied manually because the actual Next.js project generated its configuration. | The Next.js application was successfully created in the existing repository. The local development server loaded the page. The starter page was replaced with the required neighborhood platform page containing Listings, Neighborhood Sponsors, and Voice Help. The browser console showed no errors. Linting, TypeScript checking, and the production build will be verified before the final commit. | Final commit hash will be added after verification passes. |



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




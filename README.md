This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


<!-- .... -->

```
npx create-next-app@latest
```
### main file
page.tsx may be changes

### layout file 
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css";


const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});


export const metadata: Metadata = {
  title: "CareMuslims",
  description: "A Health Care Systems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={inter.className}>{children}</body>

    </html>
  );
}

#### create a folder lib and file utils.ts
```
npm install clsx

npm install tailwind-merge
```

### tailwindcss animate 
npm install tailwindcss-animate

### intall next theme
npm install next-themes

### shadcn 
npx shadcn@latest init

### The command above will add the Button component to your project. You can then import it like this:
npx shadcn@latest add button

### theme provides 

https://ui.shadcn.com/docs/dark-mode/next

### create a form
https://ui.shadcn.com/docs/components/form

#### install of form
npx shadcn@latest add form

npx shadcn-ui@latest add input

##### installation of react phone number for Custom Form
https://www.npmjs.com/package/react-phone-number-input

npm install react-phone-number-input --legacy-peer-deps
npm install react@18 react-dom@18
npm install react-phone-number-input --force



npm install react-phone-number-input --save

### Create file in components/ui folder
SubmitButton.tsx

### Validation formSchema

```
const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
})
```
#### configration for appwrite 
NEXT_PUBLIC_ENDPOINT
https://cloud.appwrite.io/console/project-67530f10000491b2055a/storage/bucket-67531e85003b06af8469

#### member atrribute details 
https://cloud.appwrite.io/console/project-67530f10000491b2055a/databases/database-67531091002ca7a6265a/collection-67531108003a976d9532/attributes

###


<!-- ...... -->

https://github.com/adrianhajdin/healthcare/tree/main?tab=readme-ov-file#snippets

https://www.youtube.com/watch?v=lEflo_sc82g&t=977s
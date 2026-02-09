# Griffin Diagnostics

Expert Porsche remote diagnostics from a Level 3 Master Technician.

---

## Quick Start Guide (For Beginners)

Follow these steps to run the website on your computer.

### Step 1: Install Node.js

Before you can run this website, you need Node.js installed on your computer.

1. Go to https://nodejs.org
2. Download the **LTS** version (the big green button)
3. Run the installer and follow the prompts
4. Restart your computer after installation

**To verify it worked:** Open Terminal (Mac) or Command Prompt (Windows) and type:
```bash
node --version
```
You should see a version number like `v18.x.x` or higher.

### Step 2: Download the Project

If you received this as a ZIP file:
1. Unzip the folder
2. Remember where you saved it

### Step 3: Open Terminal in the Project Folder

**On Mac:**
1. Open the **Terminal** app (search for "Terminal" in Spotlight)
2. Type `cd ` (with a space after it)
3. Drag the project folder into the Terminal window
4. Press Enter

**On Windows:**
1. Open the project folder in File Explorer
2. Click in the address bar at the top
3. Type `cmd` and press Enter

### Step 4: Install the Website Files

In your terminal, type this command and press Enter:
```bash
npm install
```

Wait for it to finish (this may take a minute or two).

### Step 5: Set Up Your Settings File

Type this command and press Enter:
```bash
cp .env.example .env.local
```

This creates a settings file. You'll need to add your API keys to this file later (see "Environment Variables" section below).

### Step 6: Run the Website

Type this command and press Enter:
```bash
npm run dev
```

### Step 7: View the Website

Open your web browser and go to:

**http://localhost:3000**

You should see the Griffin Diagnostics website running locally on your computer.

### To Stop the Website

In the terminal, press `Ctrl + C` (hold Control and press C).

---

## Environment Variables (API Keys)

You'll need to set up these accounts and add their keys to your `.env.local` file:

| Service | What It's For | How to Get Keys |
|---------|---------------|-----------------|
| Supabase | User accounts & database | Create account at https://supabase.com |
| Stripe | Payment processing | Create account at https://stripe.com |

Open the `.env.local` file in a text editor and fill in your keys.

---

## Deploying to the Internet

When you're ready to make the website live:

1. Create a free account at https://vercel.com
2. Connect your GitHub account
3. Import this project
4. Vercel will automatically deploy it

---

## Common Problems & Solutions

**"npm: command not found"**
- Node.js isn't installed. Go back to Step 1.

**"EACCES permission denied"**
- On Mac, try: `sudo npm install`

**Website won't load in browser**
- Make sure `npm run dev` is still running in your terminal
- Make sure you're going to `http://localhost:3000` (not https)

**Changes not showing up**
- The website auto-refreshes, but try refreshing your browser with `Cmd+R` (Mac) or `Ctrl+R` (Windows)

---

## Technical Details

For developers who want more info:

### Tech Stack
- **Framework**: Next.js 16+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database & Auth**: Supabase
- **Payments**: Stripe
- **Animations**: Framer Motion

### Project Structure
```
src/
├── app/           # Website pages
├── components/    # Reusable parts of the website
├── lib/           # Helper code
└── content/       # Blog posts (coming soon)
```

### Available Commands
| Command | What It Does |
|---------|--------------|
| `npm run dev` | Runs the website locally |
| `npm run build` | Prepares the website for deployment |
| `npm run start` | Runs the built version |

### Design Colors
- **Background**: #0F1115 (Dark carbon)
- **Accent**: #3461D2 (Shark blue)
- **Text**: #EAEAEA (Light gray)

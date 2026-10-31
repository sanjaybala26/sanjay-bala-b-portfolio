# Sanjay Bala B — Portfolio

A high-performance single-page developer portfolio showcasing full-stack Java and React projects with fluid animations, interactive 3D splash effects, and responsive design.

Live site: https://YOUR-SITE-URL/

Built during the placement training program at [TAP Academy](https://thetapacademy.com/) (full-stack development, AI and augmented reality training).

---

## Tech Stack

- **Framework & Tooling**: [React 19](https://react.dev/), [Vite](https://vite.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations & Effects**: [Framer Motion](https://www.framer.com/motion/), [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/), WebGL fluid splash cursor
- **Email & Communications**: [@emailjs/browser](https://www.emailjs.com/)
- **Typography & Assets**: Inter font, SVG iconography, optimized media

---

## Getting Started Locally

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR-USERNAME/my-portfolio.git
   cd my-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
   ```
   *(If omitted, the contact form gracefully falls back to sending emails via the user's default email client).*

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Build for production:
   ```bash
   npm run build
   ```

---

## Environment Variables

| Variable | Description |
|---|---|
| `VITE_EMAILJS_SERVICE_ID` | EmailJS service ID for handling contact form submissions |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS template ID for formatting email notifications |
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS public key for authentication |

---

## License

This project is open source and available under the [MIT License](LICENSE).

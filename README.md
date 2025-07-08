# Professional Portfolio Website

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS, showcasing both mechanical engineering and software development skills.

## 🚀 Features

- **Responsive Design**: Works perfectly on all devices (desktop, tablet, mobile)
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Four Main Sections**: Home, Coding Skills, Mechanical Skills, and Hobbies
- **Interactive Navigation**: Smooth scrolling between sections
- **Animated Components**: Engaging animations using Framer Motion
- **SEO Optimized**: Built with Next.js for better search engine visibility
- **Fast Loading**: Optimized for performance

## 🛠️ Technologies Used

- **Next.js 14**: React framework for production
- **React 18**: Modern React with hooks
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Smooth animations and transitions
- **Lucide React**: Beautiful icons

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css          # Global styles and Tailwind directives
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── components/
│   ├── Navigation.tsx       # Navigation bar with smooth scrolling
│   ├── HeroSection.tsx      # Home section with personal info
│   ├── CodingSkills.tsx     # Programming skills and experience
│   ├── MechanicalSkills.tsx # Engineering skills and experience
│   └── Hobbies.tsx          # Personal interests and hobbies
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── README.md                # This file
```

## 🎨 Customization Guide

### 1. Personal Information (HeroSection.tsx)

Update the `personalInfo` array with your details:

```typescript
const personalInfo = [
  { icon: Calendar, label: 'Date of Birth', value: 'Your DOB' },
  { icon: MapPin, label: 'Current Location', value: 'Your current city' },
  { icon: MapPin, label: 'Permanent Address', value: 'Your permanent address' },
  // ... more fields
]
```

### 2. Coding Skills (CodingSkills.tsx)

Update your programming skills:

```typescript
const programmingLanguages = [
  'JavaScript', 'TypeScript', 'Python', // Add/remove languages
]

const frameworks = [
  'React.js', 'Next.js', 'Node.js', // Add/remove frameworks
]

const projects = [
  {
    title: 'Your Project Name',
    description: 'Project description',
    technologies: ['Tech1', 'Tech2'],
    status: 'Completed'
  }
]
```

### 3. Mechanical Skills (MechanicalSkills.tsx)

Update your engineering experience:

```typescript
const experiences = [
  {
    company: 'Your Company',
    period: 'Start-End Date',
    role: 'Your Role',
    responsibilities: ['Responsibility 1', 'Responsibility 2'],
    achievements: ['Achievement 1', 'Achievement 2']
  }
]
```

### 4. Hobbies (Hobbies.tsx)

Customize your interests and hobbies:

```typescript
const hobbies = [
  {
    title: 'Your Hobby',
    description: 'Description of your hobby',
    benefits: ['Benefit 1', 'Benefit 2']
  }
]
```

### 5. Adding Your Introduction Video

In `HeroSection.tsx`, replace the video placeholder with your actual video:

```typescript
// Replace this placeholder div with your video embed
<div className="aspect-video bg-secondary-100 rounded-lg flex items-center justify-center">
  <video controls className="w-full h-full rounded-lg">
    <source src="/your-intro-video.mp4" type="video/mp4" />
  </video>
</div>
```

## 🚀 Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Open in Browser**:
   Visit [http://localhost:3000](http://localhost:3000)

## 📦 Building for Production

1. **Build the application**:
   ```bash
   npm run build
   ```

2. **Start production server**:
   ```bash
   npm start
   ```

## 🎨 Color Scheme

The portfolio uses a professional blue and gray color scheme:

- **Primary**: Blue shades (#0ea5e9 and variants)
- **Secondary**: Gray shades (#64748b and variants)
- **Background**: Light gray (#f8fafc)

You can customize colors in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your primary color shades
  },
  secondary: {
    // Your secondary color shades
  }
}
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Additional Customizations

### Adding New Sections
1. Create a new component in `/components/`
2. Import and add it to `app/page.tsx`
3. Update navigation in `Navigation.tsx`

### Changing Animations
Modify Framer Motion animations in each component:

```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
```

### Adding Icons
Use Lucide React icons or add custom SVGs:

```typescript
import { YourIcon } from 'lucide-react'
```

## 🌟 Tips for Success

1. **Keep Content Updated**: Regularly update your skills and projects
2. **Add Real Projects**: Include links to your actual projects
3. **Professional Photos**: Use high-quality, professional photos
4. **Optimize Images**: Compress images for faster loading
5. **Test on Devices**: Check how it looks on different devices
6. **SEO Optimization**: Add meta tags and descriptions

## 🚀 Deployment

You can deploy this portfolio on:

- **Vercel** (recommended for Next.js): `npm i -g vercel && vercel`
- **Netlify**: Connect your GitHub repository
- **AWS Amplify**: For AWS integration
- **GitHub Pages**: For static hosting

## 💡 Next Steps

1. Add your real personal information
2. Record and embed your introduction video
3. Update all skills and experience sections
4. Add real project links and demos
5. Optimize for SEO with meta tags
6. Deploy to your preferred platform

## 🤝 Support

If you need help customizing your portfolio:
1. Check the component files for inline comments
2. Refer to the documentation for each technology used
3. Test changes in development mode before deploying

---

**Ready to showcase your skills to the world! 🚀** 
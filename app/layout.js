import './globals.css';

export const metadata = {
  title: 'Soham Bagal — Data Engineer & Full Stack Developer',
  description:
    'Portfolio of Soham Bagal — Data Engineering Intern at Bajaj Finserv. Full-stack development, AI/ML pipelines, PySpark, Databricks, LangChain.',
  keywords: ['Soham Bagal', 'Data Engineer', 'Full Stack Developer', 'Portfolio'],
  authors: [{ name: 'Soham Bagal' }],
  openGraph: {
    title: 'Soham Bagal — Data Engineer & Full Stack Developer',
    description: 'Portfolio of Soham Bagal',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#080c14" />
      </head>
      <body>{children}</body>
    </html>
  );
}

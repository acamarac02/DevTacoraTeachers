import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { BookOpen, ArrowRight } from 'lucide-react';

// ===== Tarjeta de curso =====
const CourseCard = ({ course }) => {
  const handleClick = () => { window.location.href = course.link; };

  return (
    <div
      onClick={handleClick}
      className="group relative bg-[var(--ifm-card-background-color)] rounded-2xl p-8 shadow-sm border border-[var(--ifm-color-emphasis-200)] hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col h-full cursor-pointer"
    >
      {/* Fondo hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

      {/* Icono */}
      <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${course.gradient} text-white w-fit mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
        {course.icon}
      </div>

      {/* Contenido */}
      <div className="flex-1">
        <h3 className="text-xl font-bold [color:var(--color-text-title)] mb-3 group-hover:[color:var(--color-text-hover)] transition-colors">
          {course.name}
        </h3>
        <p className="[color:var(--color-text-description)] text-sm leading-relaxed mb-6">
          {course.description}
        </p>
      </div>

      {/* Footer */}
      <div className="border-t border-[var(--ifm-color-emphasis-200)] pt-4 mt-auto">
        <div className="flex items-center text-sm font-medium [color:var(--color-text-secondary)] group-hover:[color:var(--color-text-hover)] transition-colors">
          <BookOpen className="w-4 h-4 mr-2" />
          Explorar contenido
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );
};

// ===== Sección principal =====
export default function HomepageFeatures() {
  const { siteConfig } = useDocusaurusContext();

  const courses = [
    {
      name: 'Apuntes con Docusaurus',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      gradient: 'from-green-500 to-emerald-600',
      description: 'Aprende a crear y publicar apuntes usando Docusaurus, Markdown y GitHub Pages.',
      link: `${siteConfig.baseUrl}docs/docusaurus/`,
    },
  ];

  return (
    <section className="bg-[var(--ifm-header-background-color)] py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Encabezado de sección */}
        <div className="mb-12 w-fit">
          <h2 className="text-3xl font-bold [color:var(--color-text-title)] mb-0">Cursos disponibles</h2>
          <div className="h-1 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full mt-1 w-full scale-x-110 origin-left"></div>
        </div>

        {/* Grid de cursos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <CourseCard key={idx} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
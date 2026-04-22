import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import { Terminal } from "lucide-react";
import { motion } from "framer-motion";

function HomepageHeader() {
  return (
    <header className="bg-[var(--ifm-header-background-color)] overflow-hidden relative">
      <section className="relative bg-[var(--ifm-card-background-color)]">
        {/* blobs decorativos */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-violet-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 -right-32 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-700"></div>

        {/* patrón grid sutil */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        {/* gradiente principal */}
        <div
          className="absolute inset-0 opacity-70"
          style={{
            background: `linear-gradient(to bottom right, 
              var(--color-hero-gradient-from), 
              var(--color-hero-gradient-via), 
              var(--color-hero-gradient-to))`,
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-6 py-28">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center justify-center w-20 h-20 
                         rounded-[22%] mb-8 shadow-xl overflow-hidden"
            >
              <img src="/DevTacoraTeachers/img/devtacora_teachers_logo_violet.png" alt="DevTacora Teachers logo" className="w-full h-full object-cover scale-[1.08]" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl md:text-6xl font-bold 
                         [color:var(--color-text-title)] mb-6"
            >
              Dev
              <span
                className="bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 
                           bg-clip-text text-transparent bg-[length:200%_200%] 
                           animate-gradient-x"
              >
                Tacora
              </span>
              <span>
                {" "}Teachers
              </span>
            </motion.h1>

            <p className="text-xl [color:var(--color-text-description)] leading-relaxed">
              Cursos de informática para los Centros de Profesores y Recursos (C.P.R.)
            </p>
          </div>
        </div>
      </section>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Inicio`}
      description="Apuntes de los ciclos de FP de Informática y Comunicaciones">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
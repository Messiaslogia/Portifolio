import React from 'react';


import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";

// countup
import CountUp from 'react-countup';

// Intersessão observação hook
import {useInView} from 'react-intersection-observer';

// movimento
import {motion} from 'framer-motion';

// variants
import {fadeIn} from '../variants'




const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5
  })
  return (
    
  <section className='section'  id='about' ref={ref}>
      
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
        {/* img */}
        <motion.div 
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className='flex-1  bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'>
            <Canvas className="custom-canvas">
              <Experience />
            </Canvas>
        </motion.div>

       
        {/* text */}
        <motion.div 
          variants={fadeIn('left', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1'
        >
          <h2 className='h2 text-accent'>Sobre mim</h2>
          <h3 className='h3 mb-4'>
            Eu sou um desenvolvedor web com 3 anos de experiência utilizando as linguagens Javascript e PHP.
          </h3>
          <p className='mb-6'>
            Tenho conhecimento em frameworks das linguagens em que trabalho como Jquery, Express e React. Tenho atuado em desenvolvimento de softwares para educação infantil e para empresas corporativas, provendo as melhores soluções de recursos para empresas e clientes. Tenho a capacidade de solucionar problemas mais complexos e de fazer negociações inteligentes.
          </p>
          {/* status */}
            <div className='flex gap-x-6 lg:gap-x-10 mb-8'>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ? <CountUp start={0} end={3} duration={3}/> :
                null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Anos de <br />
                Experiência
              </div>
            </div>

            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ? <CountUp start={0} end={200} duration={3} /> :
                  null}
                  +
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Projetos<br />
                Completos
              </div>
            </div>

            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ? <CountUp start={0} end={200} duration={3} /> :
                  null}
                  +
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Clientes <br />
                Satisfeitos
              </div>
            </div>
          </div>

          <div className='flex gap-x-8 items-center'>
            <button className='btn btn-lg'>Contate-me</button>
            <a href='/' className='text-gradient btn-link'>
              Meu portifólio
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>);
};

export default About;

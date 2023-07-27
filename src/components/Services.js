import React from 'react';

// icones
import { BsArrowUpRight } from 'react-icons/bs';

// movimentos
import { motion } from 'framer-motion';

// variantes
import {fadeIn} from '../variants'

// dados do serviço
const services = [
  {
    name: 'UI/UX Design',
    description:
      'Como desenvolvedor web, valorizo a importância do design de interface do usuário (UI) e da experiência do usuário (UX). Busco criar interfaces intuitivas e atrativas, garantindo que os usuários tenham uma experiência agradável e fluida ao navegar nos meus projetos.',
    link: 'Learn more'
  },
  {
    name: 'Desenvolvimento',
    description:
      'Com três anos de experiência em desenvolvimento web, tenho um sólido conhecimento das linguagens PHP e JavaScript, bem como das melhores práticas de codificação. Estou sempre atualizado com as últimas tendências e tecnologias para oferecer soluções eficientes e escaláveis aos meus clientes.',
    link: 'Learn more'
  },
  {
    name: 'Marketing digital',
    description:
      'Entendo que o desenvolvimento web e o marketing digital andam de mãos dadas. Incorporo estratégias de marketing digital nos meus projetos para otimizar a visibilidade e o alcance online. Isso inclui a implementação de técnicas de SEO, a integração de análise de dados e a criação de experiências personalizadas para o público-alvo.',
    link: 'Learn more'
  },
  
  
]

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row '>
          {/* {text & Image} */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>

              <h2 className='h2 text-accent mb-6'>O que eu faço.</h2>
              <h3 className='h3 max-w-[485px] mb-16'>
                Algumas habilidades que utilizo em minha rotina nos meus 3 anos como desenvolvedor web.
              </h3>
              <button className='btn btn-sm'>Meus Serviços</button>
          </motion.div>

          {/* {services} */}
          <motion.div 
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'>
            {/* Lista de Serviços */}
              <div>
                {services.map((service, index)=> {
                  // desestruturar serviços
                  const {name, description, link} = service;
                  return (
                    <div className='border-b border-white/20 mb-[40px] flex' key={index}>
                      <div className='max-w-[476px]'>
                        <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>
                          {name}
                        </h4>
                        <p className='font-secondary leading-tight'>
                          {description}
                        </p>
                      </div>
                      <div className='flex flex-col flex-1 items-end'>
                        <a href='/' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                          <BsArrowUpRight />
                        </a>
                        <a href='/' className='text-gradient text-sm'>
                          {link}
                        </a>
                      </div>
                    </div>
                  )
                })}
              </div>
          </motion.div>
        </div>
      </div>
    </section>
    );
};

export default Services;

import React from 'react';

// Imagens
import Image from '../assets/avatar.png';

// Icones
import {FaGithub,  FaLinkedin,  FaNetworkWired} from 'react-icons/fa';

// Tipo de Animações
import { TypeAnimation } from 'react-type-animation';

// movimento
import {motion} from 'framer-motion';

// variantes
import { fadeIn } from '../variants';

const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className='container mx-auto'>
       <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          {/* text */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 
              variants={fadeIn('up', 0.3)} 
              initial='hidden' 
              whileInView={'show'} 
              viewport={{once: false, amount: 0.7}} 
              className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
              MESSIAS <span>GALVAN</span>
            </motion.h1>

            <motion.div 
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-6 text-[36px] lg:text-[60px] font-secondary 
              font-semibold uppercase leading-[1]'>
              <span className='text-white mr-4'>
                Eu sou um
              </span>

              <TypeAnimation 
              sequence={[
                'Dev Web',
                2000,
                'Fullstack',
                2000

              ]}
              speed={50}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}
              />
            </motion.div>

            <motion.p
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-8 max-w-lg mx-auto lg:mx-0'>
              
                Sou um entusiasta do desenvolvimento web e trabalho como programador desde 2019. Tenho grande interesse em compreender diferentes culturas e sou apaixonado por criar estruturas de software e seus estilos visuais. Sempre busco incorporar essas combinações em meus projetos, aproveitando ao máximo todo o conhecimento que adquiri ao longo do tempo.   
            </motion.p>
            
            <motion.div
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <button className='btn btn-lg'>Contate-me</button>
              <a href='https://github.com/Messiaslogia/' className='text-gradient btn-link'>
                Meu Portfólio
 
              </a>
            </motion.div>

            {/* Sociais */}
            <motion.div
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
             
              <a href='https://github.com/Messiaslogia/'>
                <FaGithub />
              </a>
              <a href='https://www.linkedin.com/in/messias-galvan-pereira-b087261a6/'>
                <FaLinkedin />
              </a>
              <a href='https://www.workana.com/freelancer/5fdc788bee15956a3f217fa436718748'>
                <FaNetworkWired />
              </a>
            </motion.div>
          </div>
          
          {/* imagens */}
          <motion.div 
            variants={fadeIn('down', 0.5)}
            initial='hidden'
            whileInView={'show'}
            className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
            <img src={Image} alt=''></img>
          </motion.div>
       </div>
      </div>
    </section>
  );
};

export default Banner;
 
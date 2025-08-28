
import AboutMeMain from './Component/AboutMeSection/AboutMeMain'
import CertificatesSectionMain from './Component/CetificateSection/CertificatesSectionMain'
import ContactMeMain from './Component/ContactSection/ContactMeMain'
import ExperienceMain from './Component/ExperienceSection/ExperienceMain'
import FooterMain from './Component/FooterSection/FooterMain'
import HelpSection from './Component/HelpSection'
import HeroMain from './Component/HeroSection/HeroMain'
import SubHeroSection from './Component/HeroSection/SubHeroSection'
import NavbarMain from './Component/Navbar/NavbarMain'
import ProjectMain from './Component/ProjectSection/ProjectMain'
import SkillsMain from './Component/SkillsSection/SkillsMain'
import SubSkill from './Component/SkillsSection/SubSkill'

function App() {


  return (
   <>
    
     <div className='text-center'>
         <NavbarMain/>
         <HeroMain/>
         <SubHeroSection/>
         <AboutMeMain/>
         <SkillsMain/>
         <SubSkill/>
         {/* <ExperienceMain/> */}
         <ProjectMain/>
         <CertificatesSectionMain/>
         <ContactMeMain/>
         <FooterMain/>
        
         
     </div>
   </>
  )
}

export default App

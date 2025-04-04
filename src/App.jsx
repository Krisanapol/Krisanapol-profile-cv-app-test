import React from 'react';
import './App.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';





function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>KRISANAPOL JONGPONGKLANG</h1>
        <nav>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <div className="content">
        <div className='about'>
          <h1>HI, I AM <br />KRISANAPOL</h1>
          <p>นักพัฒนาเว็บไซต์ฝั่งฟรอนท์เอนด์จากประเทศไทย ที่มีความหลงใหลในการสร้าง เว็บไซต์ที่เข้าถึงได้และเป็นมิตรกับผู้ใช้</p>
          <div className='social'>
            <button>Contact Me</button>
            <LinkedInIcon />
            <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
              <GitHubIcon />
            </a>
          </div>
        </div>
        <div className='pic'>
          <img src="https://media.discordapp.net/attachments/1082990763866079303/1357650671645626408/486722779_1165642098685869_5751289822397168868_n.jpg?ex=67f0fa38&is=67efa8b8&hm=441a9833d834d1b6410a7278e4f78216918366bf244e43311fd32424d96b74b8&=&format=webp&width=960&height=960" alt="" />
        </div>
      </div>
      <hr />
      <div className="Aboutme">
        <div className='aboutme-title'>
          <h1>ABOUT ME</h1>
        </div>
        <div className='aboutme-content'>
          <h2>ผมเป็นนักพัฒนาเว็บไซต์ฝั่งฟรอนท์เอนด์ที่ทำงานอยู่ใน กรุงเทพฯ กำลังมองหาโอกาสที่น่าตื่นเต้นในการทำงาน มีพื้นฐานการศึกษาด้านวิศวกรรมซอฟต์แวร์</h2>
          <p>ชอบให้ความสำคัญกับการเข้าถึง (accessibility) เมื่อพัฒนาเว็บไซต์ มีความกระตือรือร้นและอยากรู้ อยากเห็นเกี่ยวกับการแก้ปัญหาต่างๆ ปัจจุบันกำลังศึกษาเรียนรู้เกี่ยวกับ React.js และการออกแบบ เว็บไซต์เล็กน้อยเมื่อไม่ได้เขียนโปรแกรม ดิฉัน/ผมชอบเล่นฟุตบอล ถ่ายภาพ และเล่นเกม FIFA, Diablo กำลังเรียนรู้เพิ่มเติมเพื่อพัฒนาทักษะอยู่เสมอ</p>
          <div className='social-about'>
            <button>Download Resume</button>
            <LinkedInIcon />
            <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
              <GitHubIcon />
            </a>
          </div>
        </div>
      </div>
      <div className='aboutme-pic'>
        <img src="https://media.discordapp.net/attachments/1167647960687972463/1168744425317486622/39e5f07ee440b0d57b6c1abc2560e00b.gif?ex=67f09b11&is=67ef4991&hm=fdadc344034807c5022c8a3a703f0dfe58ea80444d5c3f6f8d064cc1cb9e49b0" alt="GIF" />
      </div>
      <hr />
      <div className="Aboutme">
        <div className='aboutme-title'>
          <h1>My Capabilities</h1>
        </div>
        <div className='aboutme-content'>
          <h2>ผมมองหาโอกาสในการเพิ่มทักษะใหม่ๆ อยู่เสมอ ทั้งการพัฒนาฟรอนท์เอนด์ แบล็กเอนต์ การออกแบบ UX/UI ฐานข้อมูล </h2>
          <Box>
            <Stack spacing={2} direction="row" justifyContent="center" alignItems="center">
              <Button variant="outlined" size="large">
                HTML
              </Button>
              <Button variant="outlined" size="large">
                CSS
              </Button>
              <Button variant="outlined" size="large">
                Javascript
              </Button>
              <Button variant="outlined" size="large">
                FLUTTER
              </Button>
            </Stack>
            <Stack spacing={2} direction="row" justifyContent="center" alignItems="center" mt={2}>
              <Button variant="outlined" size="large">
                DART
              </Button>
              <Button variant="outlined" size="large">
                IoT
              </Button>
              <Button variant="outlined" size="large">
                React
              </Button>
              <Button variant="outlined" size="large">
                database
              </Button>
            </Stack>
          </Box>
        </div>
      </div>
      <hr />
      <div className="Experience">
        <div className='Experience-title'>
          <h1>My Experience</h1>
        </div>
        <div className='Experience-content'>
          <h2>Freelance Developer</h2><h3>Nov 2023 — Present </h3>
          <p>พัฒนาและปรับปรุงส่วนติดต่อผู้ใช้สำหรับเว็บแอปพลิเคชันโดยใช้ React.js
            ทำงานร่วมกับทีมออกแบบ UX/UI เพื่อสร้างประสบการณ์ผู้ใช้ที่น่าประทับใจ
            ปรับปรุงความเร็วในการโหลดเว็บไซต์ด้วยเทคนิคการเพิ่มประสิทธิภาพต่างๆ
            ร่วมพัฒนาและดูแลไลบรารีคอมโพเนนต์ภายในองค์กร</p>
          <h2>Freelance Developer</h2><h3>Nov 2023 — Present </h3>
          <p>พัฒนาเว็บไซต์ลูกค้าโดยใช้ HTML, CSS และ JavaScript
            ช่วยปรับปรุงการเข้าถึง (Accessibility) ของเว็บไซต์ให้สอดคล้องกับมาตรฐาน WCAG
            ทำงานร่วมกับทีมแบ็คเอนด์เพื่อเชื่อมต่อ API</p>
        </div>
      </div>
      <hr />
      <div className="inputtitle">
        <div className='input-title'>
          <h1>Let’s connect</h1>
          <p>Say hello at Krisanapol@sau.ac.th</p>
          <p>For more info, here’s my resume</p>
          <div>
            <LinkedInIcon />
            <GitHubIcon />
            <XIcon />
            <InstagramIcon />
          </div>
          <p className='licenes'>© 2025 Krisanapol Jongpongklang</p>
        </div>
        <div className="input-content">
          <p>Name</p>
          <input type="text" />
          <p>Email</p>
          <input type="text" />
          <p>Subject</p>
          <input type="text" />
          <p>Message</p>
          <textarea rows="4"></textarea> {/* ใช้ textarea สำหรับข้อความยาว */}
          <button>Submit</button>
        </div>
      </div>
    </div>

  );
}

export default App;

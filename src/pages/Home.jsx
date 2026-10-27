import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import data from '../data/profile.js';
import './home-experience.css';

const capabilities = [
  { code:'01', label:'INTELLIGENCE', title:'AI & Machine Learning', detail:'From models to decisions — applied intelligence designed for real workflows.', tags:['Generative AI','Predictive ML','Python'] },
  { code:'02', label:'SYSTEMS', title:'Full-stack engineering', detail:'Building dependable products across interfaces, APIs, and data platforms.', tags:['React','Java','PostgreSQL'] },
  { code:'03', label:'INDUSTRY', title:'Industrial data systems', detail:'Connecting manufacturing operations to clearer insights and smarter decisions.', tags:['Analytics','Automation','Data'] }
];

function SignalField() {
  const [pointer,setPointer]=useState({x:50,y:50});
  const dots=Array.from({length:63},(_,i)=>({x:8+(i%9)*10.5,y:10+Math.floor(i/9)*13}));
  return <div className="hx-signal" onPointerMove={e=>{const r=e.currentTarget.getBoundingClientRect();setPointer({x:(e.clientX-r.left)/r.width*100,y:(e.clientY-r.top)/r.height*100})}} aria-label="Decorative visualization of a neural network">
    <div className="hx-signal-glow" style={{'--mx':pointer.x+'%','--my':pointer.y+'%'}}/>
    <svg viewBox="0 0 600 600" role="img" aria-label="Abstract connected network" preserveAspectRatio="xMidYMid meet">
      <defs><linearGradient id="hxline"><stop stopColor="#8fe7ff"/><stop offset="1" stopColor="#8c7aff"/></linearGradient></defs>
      <circle cx="300" cy="300" r="204" fill="none" stroke="#5c7e9a" strokeOpacity=".2" strokeDasharray="3 9"/>
      <circle cx="300" cy="300" r="151" fill="none" stroke="#7ccaff" strokeOpacity=".24"/>
      <circle cx="300" cy="300" r="99" fill="none" stroke="#7ccaff" strokeOpacity=".25" strokeDasharray="6 8"/>
      {Array.from({length:12},(_,i)=>{const a=i*Math.PI/6;return <g key={i}><line x1={300+Math.cos(a)*99} y1={300+Math.sin(a)*99} x2={300+Math.cos(a)*204} y2={300+Math.sin(a)*204} stroke="url(#hxline)" strokeOpacity=".32"/><circle cx={300+Math.cos(a)*204} cy={300+Math.sin(a)*204} r="4" fill="#a1e6ff"/></g>})}
      <g className="hx-orbit"><ellipse cx="300" cy="300" rx="240" ry="78" fill="none" stroke="#a2b8ff" strokeOpacity=".5" transform="rotate(-35 300 300)"/><circle cx="491" cy="156" r="9" fill="#a4efff"/></g>
      <g className="hx-orbit-reverse"><ellipse cx="300" cy="300" rx="235" ry="95" fill="none" stroke="#7ac3f5" strokeOpacity=".35" transform="rotate(38 300 300)"/></g>
      <circle cx="300" cy="300" r="62" fill="#101d33" stroke="#9cddff" strokeWidth="1.5"/>
      <circle cx="300" cy="300" r="48" fill="#172c47"/>
      <path d="M265 307 L288 281 L310 319 L334 289" fill="none" stroke="#b7f5ff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="334" cy="289" r="5" fill="#d2f8ff"/>
    </svg>
    <div className="hx-float hx-float-top"><span className="hx-blink"/> SYSTEMS ONLINE</div>
    <div className="hx-float hx-float-bottom">AI / DATA / SOFTWARE <span>↗</span></div>
    <div className="hx-grid-dots">{dots.map((d,i)=><i key={i} style={{left:d.x+'%',top:d.y+'%'}}/>)}</div>
  </div>;
}

export default function Home() {
  const [active,setActive]=useState(0);
  const [visible,setVisible]=useState(false);
  useEffect(()=>{const t=requestAnimationFrame(()=>setVisible(true));return()=>cancelAnimationFrame(t)},[]);
  const featured=data.projects.slice(0,4);
  return <div className={'hx '+(visible?'hx-ready':'')}>
    <section className="hx-hero" aria-labelledby="hx-title">
      <div className="hx-hero-copy">
        <div className="hx-eyebrow"><span className="hx-blink"/> OPEN TO BUILDING WHAT'S NEXT <span className="hx-eyebrow-line"/></div>
        <p className="hx-index">PORTFOLIO / 2026 <span>001 — 004</span></p>
        <h1 id="hx-title">Engineering<br/><span className="hx-outline">what's</span> <em>next.</em></h1>
        <p className="hx-intro">I'm <strong>{data.name}</strong> — a software engineer working at the intersection of <span>artificial intelligence, product engineering, and real-world systems.</span></p>
        <div className="hx-actions"><Link to="/projects" className="hx-primary">Explore my work <span>↗</span></Link><a href="#hx-about" className="hx-secondary">Discover more <span>↓</span></a></div>
        <div className="hx-hero-bottom"><span>SCROLL TO EXPLORE</span><span className="hx-scroll-line"/></div>
      </div>
      <div className="hx-hero-visual"><SignalField/><div className="hx-visual-label"><span>FIG. 01</span> INTELLIGENCE IN MOTION</div></div>
    </section>

    <div className="hx-ticker" aria-label="Areas of expertise"><div>AI ENGINEERING <b>✳</b> FULL-STACK DEVELOPMENT <b>✳</b> MACHINE LEARNING <b>✳</b> INDUSTRIAL INTELLIGENCE <b>✳</b> HUMAN-CENTERED SOFTWARE <b>✳</b></div></div>

    <section className="hx-section hx-about" id="hx-about"><div className="hx-section-kicker"><span>01 / THE APPROACH</span><span>BEYOND THE CODE</span></div>
      <div className="hx-about-layout"><h2>Curious by nature.<br/><em>Engineer</em> by craft.</h2><div><p>Great technology isn't just about what it can do. It's about what it makes possible.</p><p>My work spans production software, data-driven systems, and applied AI. I care about the details: reliable architecture, intuitive experiences, and technology that makes complex things feel simple.</p><Link to="/experience" className="hx-text-link">My journey <span>↗</span></Link></div></div>
      <div className="hx-stats"><div><strong>AI + SWE</strong><span>THE INTERSECTION</span></div><div><strong>3</strong><span>FOCUS AREAS</span></div><div><strong>∞</strong><span>THINGS TO LEARN</span></div></div>
    </section>

    <section className="hx-section hx-capabilities"><div className="hx-section-kicker"><span>02 / WHAT I DO</span><span>EXPLORE MY PRACTICE</span></div><div className="hx-section-heading"><h2>Where ideas<br/><em>become systems.</em></h2><p>Three disciplines, one approach: design thoughtfully, build rigorously, and keep experimenting.</p></div>
      <div className="hx-cap-layout"><div className="hx-cap-tabs" role="tablist" aria-label="Engineering disciplines">{capabilities.map((c,i)=><button role="tab" aria-selected={active===i} key={c.code} onClick={()=>setActive(i)} className={active===i?'is-active':''}><span>{c.code}</span><strong>{c.title}</strong><span>↗</span></button>)}</div><div className="hx-cap-detail" role="tabpanel"><div className="hx-cap-symbol">✳</div><span>{capabilities[active].label} / {capabilities[active].code}</span><h3>{capabilities[active].title}</h3><p>{capabilities[active].detail}</p><div className="hx-tag-row">{capabilities[active].tags.map(t=><span key={t}>{t}</span>)}</div></div></div>
    </section>

    <section className="hx-section hx-work"><div className="hx-section-kicker"><span>03 / SELECTED WORK</span><span>BUILT WITH PURPOSE</span></div><div className="hx-section-heading"><h2>Selected <em>projects.</em></h2><Link className="hx-text-link" to="/projects">All projects <span>↗</span></Link></div>
      <div className="hx-projects">{featured.map((pr,i)=><article className="hx-project" key={pr.title}><div className={'hx-project-art hx-art-'+i}>{pr.image?<img src={import.meta.env.BASE_URL+'assets/projects/'+pr.image} alt="" loading="lazy"/>:<span>0{i+1}</span>}<span className="hx-project-count">PROJECT / 0{i+1}</span></div><div className="hx-project-info"><div className="hx-project-meta"><span>{pr.period}</span><span>{pr.stack?.slice(0,2).join(' / ')}</span></div><h3>{pr.title}</h3><p>{pr.summary}</p><div className="hx-project-foot"><div className="hx-tag-row">{pr.stack?.slice(0,3).map(s=><span key={s}>{s}</span>)}</div>{pr.links?.github?<a href={pr.links.github} target="_blank" rel="noopener noreferrer" aria-label={'View '+pr.title+' on GitHub'}>↗</a>:<Link to="/projects" aria-label="View projects">↗</Link>}</div></div></article>)}</div>
    </section>

    <section className="hx-section hx-experience"><div className="hx-section-kicker"><span>04 / EXPERIENCE</span><span>THE PATH SO FAR</span></div><div className="hx-section-heading"><h2>Built through <em>experience.</em></h2><Link className="hx-text-link" to="/experience">Full timeline <span>↗</span></Link></div><div className="hx-exp-list">{data.experience.slice(0,3).map((ex,i)=><div key={ex.company+ex.role} className="hx-exp-row"><span>0{i+1}</span><div><h3>{ex.company}</h3><p>{ex.role}</p></div><span>{ex.period}</span><span>↗</span></div>)}</div></section>

    <section className="hx-contact"><span>HAVE SOMETHING IN MIND?</span><h2>Let's build something<br/><em>remarkable.</em></h2><a href={'mailto:'+data.contact.email}>Start a conversation <span>↗</span></a><div className="hx-contact-foot"><span>{data.name.toUpperCase()} / 2026</span><div><a href={data.contact.links.github} target="_blank" rel="noopener noreferrer">GITHUB ↗</a><a href={data.contact.links.linkedin} target="_blank" rel="noopener noreferrer">LINKEDIN ↗</a></div></div></section>
  </div>;
}

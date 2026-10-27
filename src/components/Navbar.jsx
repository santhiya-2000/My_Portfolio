import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const links=[['/','Home'],['/projects','Work'],['/experience','Experience'],['/skills','Expertise'],['/contact','Contact']];
export default function Navbar(){
 const [open,setOpen]=useState(false);
 const [theme,setTheme]=useState('dark');
 useEffect(()=>{const stored=localStorage.getItem('theme');const initial=stored||'dark';document.documentElement.setAttribute('data-theme',initial);setTheme(initial)},[]);
 const toggle=()=>{const next=theme==='dark'?'light':'dark';setTheme(next);localStorage.setItem('theme',next);document.documentElement.setAttribute('data-theme',next)};
 return <header className="nav nav-next"><Link to="/" className="nav__brand" onClick={()=>setOpen(false)}>SV<span className="nav-next-dot">.</span><small> / ENGINEER & CREATOR</small></Link>
 <button className="nav-next-menu" aria-expanded={open} aria-controls="portfolio-navigation" aria-label={open?'Close navigation':'Open navigation'} onClick={()=>setOpen(v=>!v)}>{open?'CLOSE ✕':'MENU ☰'}</button>
 <nav id="portfolio-navigation" className={'nav__menu nav-next-links '+(open?'nav-next-open':'')} aria-label="Main navigation">{links.map(([path,label])=><NavLink key={path} to={path} end={path==='/'} onClick={()=>setOpen(false)}>{label}</NavLink>)}<button type="button" className="theme-toggle" onClick={toggle} aria-label={'Switch to '+(theme==='dark'?'light':'dark')+' theme'}>{theme==='dark'?'☼':'☾'}</button><Link className="nav-next-more" to="/education" onClick={()=>setOpen(false)}>More ↗</Link></nav></header>;
}

/* ═══════════════════════════════════════════════════════════════════════
   theme.js  —  JiniMaestro Portal Theme Engine
   • 4 themes × 2 modes (dark / light) = 8 combinations
   • Source of truth: Supabase  config table  key = "portalTheme"
   • Applies CSS vars to :root  — zero flash, works on every page
   • index.html  : fetches once on load via REST (no ES module needed)
   • teacher.html: uses the listenTheme realtime channel
═══════════════════════════════════════════════════════════════════════ */
(function(){

var PALETTES={
  midnight:{
    dark:{
      '--bg':'#080c14','--bg2':'#090d1a','--surface':'#0e1623','--surface2':'#111d2e',
      '--glass':'rgba(255,255,255,.04)','--glass2':'rgba(255,255,255,.06)',
      '--gb':'rgba(255,255,255,.09)','--glass-border':'rgba(255,255,255,.08)','--glass-border2':'rgba(255,255,255,.13)',
      '--blue':'#3b8bff','--blue2':'#6ba3ff','--cyan':'#00d4ff','--accent':'#3b8bff',
      '--grad1':'#3b8bff','--grad2':'#a78bfa','--purple':'#a78bfa',
      '--green':'#22c55e','--orange':'#f97316','--red':'#ef4444','--gold':'#f59e0b',
      '--text':'#e8edf5','--text2':'#94a3c0','--muted':'#7a8aa0',
      '--blue-glow':'rgba(59,139,255,.3)','--blue-glow-full':'rgba(59,139,255,.3)',
      '--header-bg':'rgba(8,12,20,.92)',
      '--grad-title':'linear-gradient(135deg,#60a5fa 0%,#a78bfa 50%,#f472b6 100%)',
    },
    light:{
      '--bg':'#f0f4ff','--bg2':'#e8eeff','--surface':'#ffffff','--surface2':'#f8faff',
      '--glass':'rgba(59,139,255,.05)','--glass2':'rgba(59,139,255,.09)',
      '--gb':'rgba(59,139,255,.15)','--glass-border':'rgba(59,139,255,.15)','--glass-border2':'rgba(59,139,255,.22)',
      '--blue':'#2563eb','--blue2':'#3b82f6','--cyan':'#0891b2','--accent':'#2563eb',
      '--grad1':'#2563eb','--grad2':'#7c3aed','--purple':'#7c3aed',
      '--green':'#16a34a','--orange':'#ea580c','--red':'#dc2626','--gold':'#d97706',
      '--text':'#0f172a','--text2':'#334155','--muted':'#64748b',
      '--blue-glow':'rgba(37,99,235,.2)','--blue-glow-full':'rgba(37,99,235,.2)',
      '--header-bg':'rgba(240,244,255,.94)',
      '--grad-title':'linear-gradient(135deg,#2563eb 0%,#7c3aed 50%,#db2777 100%)',
    },
  },
  emerald:{
    dark:{
      '--bg':'#061210','--bg2':'#081a16','--surface':'#0b1e1a','--surface2':'#0f2420',
      '--glass':'rgba(16,185,129,.04)','--glass2':'rgba(16,185,129,.07)',
      '--gb':'rgba(34,197,94,.12)','--glass-border':'rgba(16,185,129,.1)','--glass-border2':'rgba(16,185,129,.18)',
      '--blue':'#10b981','--blue2':'#34d399','--cyan':'#34d399','--accent':'#10b981',
      '--grad1':'#10b981','--grad2':'#06b6d4','--purple':'#34d399',
      '--green':'#10b981','--orange':'#f97316','--red':'#f87171','--gold':'#fbbf24',
      '--text':'#e2faf3','--text2':'#a7d9c8','--muted':'#6b9e8a',
      '--blue-glow':'rgba(16,185,129,.3)','--blue-glow-full':'rgba(16,185,129,.3)',
      '--header-bg':'rgba(6,18,16,.92)',
      '--grad-title':'linear-gradient(135deg,#10b981 0%,#06b6d4 50%,#34d399 100%)',
    },
    light:{
      '--bg':'#ecfdf5','--bg2':'#d1fae5','--surface':'#ffffff','--surface2':'#f0fdf9',
      '--glass':'rgba(16,185,129,.05)','--glass2':'rgba(16,185,129,.09)',
      '--gb':'rgba(16,185,129,.15)','--glass-border':'rgba(16,185,129,.15)','--glass-border2':'rgba(16,185,129,.24)',
      '--blue':'#059669','--blue2':'#10b981','--cyan':'#0891b2','--accent':'#059669',
      '--grad1':'#059669','--grad2':'#0284c7','--purple':'#10b981',
      '--green':'#059669','--orange':'#ea580c','--red':'#dc2626','--gold':'#d97706',
      '--text':'#022c22','--text2':'#134e4a','--muted':'#4d7c6f',
      '--blue-glow':'rgba(5,150,105,.2)','--blue-glow-full':'rgba(5,150,105,.2)',
      '--header-bg':'rgba(236,253,245,.94)',
      '--grad-title':'linear-gradient(135deg,#059669 0%,#0284c7 50%,#10b981 100%)',
    },
  },
  crimson:{
    dark:{
      '--bg':'#0f0608','--bg2':'#150809','--surface':'#1a0b0d','--surface2':'#200d10',
      '--glass':'rgba(244,63,94,.04)','--glass2':'rgba(244,63,94,.07)',
      '--gb':'rgba(239,68,68,.12)','--glass-border':'rgba(244,63,94,.1)','--glass-border2':'rgba(244,63,94,.18)',
      '--blue':'#f43f5e','--blue2':'#fb7185','--cyan':'#fb7185','--accent':'#f43f5e',
      '--grad1':'#f43f5e','--grad2':'#f97316','--purple':'#fb7185',
      '--green':'#34d399','--orange':'#f97316','--red':'#f43f5e','--gold':'#fbbf24',
      '--text':'#fdf2f4','--text2':'#dba8b0','--muted':'#9e6e74',
      '--blue-glow':'rgba(244,63,94,.3)','--blue-glow-full':'rgba(244,63,94,.3)',
      '--header-bg':'rgba(15,6,8,.92)',
      '--grad-title':'linear-gradient(135deg,#f43f5e 0%,#f97316 50%,#fb7185 100%)',
    },
    light:{
      '--bg':'#fff1f2','--bg2':'#ffe4e6','--surface':'#ffffff','--surface2':'#fff5f6',
      '--glass':'rgba(244,63,94,.05)','--glass2':'rgba(244,63,94,.09)',
      '--gb':'rgba(244,63,94,.15)','--glass-border':'rgba(244,63,94,.15)','--glass-border2':'rgba(244,63,94,.24)',
      '--blue':'#e11d48','--blue2':'#f43f5e','--cyan':'#db2777','--accent':'#e11d48',
      '--grad1':'#e11d48','--grad2':'#ea580c','--purple':'#f43f5e',
      '--green':'#16a34a','--orange':'#ea580c','--red':'#e11d48','--gold':'#d97706',
      '--text':'#1c0208','--text2':'#4c0519','--muted':'#9f3a52',
      '--blue-glow':'rgba(225,29,72,.2)','--blue-glow-full':'rgba(225,29,72,.2)',
      '--header-bg':'rgba(255,241,242,.94)',
      '--grad-title':'linear-gradient(135deg,#e11d48 0%,#ea580c 50%,#f43f5e 100%)',
    },
  },
  solar:{
    dark:{
      '--bg':'#0d0a02','--bg2':'#120d02','--surface':'#1a1505','--surface2':'#221b06',
      '--glass':'rgba(245,158,11,.04)','--glass2':'rgba(245,158,11,.07)',
      '--gb':'rgba(245,158,11,.12)','--glass-border':'rgba(245,158,11,.1)','--glass-border2':'rgba(245,158,11,.18)',
      '--blue':'#f59e0b','--blue2':'#fbbf24','--cyan':'#fbbf24','--accent':'#f59e0b',
      '--grad1':'#f59e0b','--grad2':'#ef4444','--purple':'#fbbf24',
      '--green':'#22c55e','--orange':'#f97316','--red':'#ef4444','--gold':'#f59e0b',
      '--text':'#fefce8','--text2':'#d4b96a','--muted':'#a08c4a',
      '--blue-glow':'rgba(245,158,11,.3)','--blue-glow-full':'rgba(245,158,11,.3)',
      '--header-bg':'rgba(13,10,2,.92)',
      '--grad-title':'linear-gradient(135deg,#f59e0b 0%,#ef4444 50%,#fbbf24 100%)',
    },
    light:{
      '--bg':'#fffbeb','--bg2':'#fef3c7','--surface':'#ffffff','--surface2':'#fffdf0',
      '--glass':'rgba(245,158,11,.05)','--glass2':'rgba(245,158,11,.09)',
      '--gb':'rgba(245,158,11,.15)','--glass-border':'rgba(245,158,11,.15)','--glass-border2':'rgba(245,158,11,.24)',
      '--blue':'#d97706','--blue2':'#f59e0b','--cyan':'#b45309','--accent':'#d97706',
      '--grad1':'#d97706','--grad2':'#dc2626','--purple':'#f59e0b',
      '--green':'#16a34a','--orange':'#ea580c','--red':'#dc2626','--gold':'#d97706',
      '--text':'#1c0a00','--text2':'#451a03','--muted':'#92400e',
      '--blue-glow':'rgba(217,119,6,.2)','--blue-glow-full':'rgba(217,119,6,.2)',
      '--header-bg':'rgba(255,251,235,.94)',
      '--grad-title':'linear-gradient(135deg,#d97706 0%,#dc2626 50%,#f59e0b 100%)',
    },
  },
};

var DEFAULT={name:'midnight',mode:'dark'};

var SUPABASE_URL ='https://uqhbxmlimbyvavutrriw.supabase.co';
var SUPABASE_ANON='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxaGJ4bWxpbWJ5dmF2dXRycml3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU2MTkzOTEsImV4cCI6MjA5MTE5NTM5MX0.mFUFtDtskP9kJIvaMk5fdGSiQ3kiSZxOmId7cFyLU1E';

function applyVars(themeObj){
  var name=(themeObj&&themeObj.name)?themeObj.name:DEFAULT.name;
  var mode=(themeObj&&themeObj.mode)?themeObj.mode:DEFAULT.mode;
  var p=PALETTES[name]&&PALETTES[name][mode];
  if(!p){name=DEFAULT.name;mode=DEFAULT.mode;p=PALETTES.midnight.dark;}
  var root=document.documentElement;
  Object.keys(p).forEach(function(k){root.style.setProperty(k,p[k]);});
  root.setAttribute('data-theme',name);
  root.setAttribute('data-mode',mode);
}

function fetchTheme(cb){
  fetch(SUPABASE_URL+'/rest/v1/config?key=eq.portalTheme&select=value&limit=1',{
    headers:{'apikey':SUPABASE_ANON,'Authorization':'Bearer '+SUPABASE_ANON}
  }).then(function(r){return r.json();})
    .then(function(rows){cb((rows&&rows[0])?rows[0].value:null);})
    .catch(function(){cb(null);});
}

function listenSupabase(listenFn){
  listenFn(function(val){
    applyVars(val);
    if(window.syncThemeUI)window.syncThemeUI(val);
  });
}

window.JMTheme={palettes:PALETTES,apply:applyVars,listenSupabase:listenSupabase,fetch:fetchTheme};

/* Boot — paint default immediately, then overwrite with live DB value */
applyVars(DEFAULT);
fetchTheme(function(val){
  if(val)applyVars(val);
  if(window.syncThemeUI)window.syncThemeUI(val||DEFAULT);
});

})();

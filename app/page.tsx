const hubs = [
  ['Planning Hub','Portfolio plans, roadmaps and delivery alignment'],
  ['Requirements Mgmt','AI-assisted requirements and traceability'],
  ['Scrum Master','Sprint health, blockers and ceremonies'],
  ['Product/Program','Portfolio outcomes and program governance'],
  ['Communication','AI-assisted team communications'],
  ['Business Stakeholder','Executive and stakeholder visibility'],
  ['Executive/Sponsor','Outcome, risk and value intelligence'],
  ['Cross-Functional Teams','Collaboration across delivery teams'],
  ['Identity Access','SSO, RBAC and access governance'],
  ['UI/UX Designer','Experience design and product workflows'],
  ['Storage & Security','Secure artifacts and enterprise data'],
  ['Monitoring/Observability','Operational health and telemetry'],
  ['Technical Team','Engineering execution and dependencies'],
  ['Test Mgmt','Quality, coverage and release readiness'],
  ['CI/CD','Build, deployment and delivery automation'],
  ['Service Mgmt','Incidents, changes and service operations']
];

export default function Home(){
 return <main className="shell">
  <aside><div className="brand">ADAPT<span>AI Delivery Platform</span></div><nav>{['Command Center','My Work','AI Intelligence','Hubs','Integrations','Analytics','Administration'].map((x,i)=><a className={i===0?'active':''} key={x}>{x}</a>)}</nav><div className="user">Fifth AI Solutions<br/><small>Enterprise Workspace</small></div></aside>
  <section className="content">
   <header><div><p className="eyebrow">CENTRAL AI HUB</p><h1>Good morning. Here’s your delivery intelligence.</h1><p className="muted">ADAPT connects planning, people, engineering and operations through autonomous AI coordination.</p></div><button>Ask ADAPT AI</button></header>
   <div className="metrics">{[['16','Specialized Hubs'],['94%','Delivery Health'],['7','AI Actions Today'],['3','Risks Need Attention']].map(x=><article><b>{x[0]}</b><span>{x[1]}</span></article>)}</div>
   <div className="grid2"><article className="panel"><div className="title"><h2>AI Intelligence</h2><span>LIVE</span></div><div className="insight"><b>Predictive delivery signal</b><p>Sprint trajectory is healthy. Two dependency risks may affect the next release window.</p><button className="link">Review recommendations →</button></div><div className="airow"><span>ML Models</span><span>Autonomous Agents</span><span>Continuous Learning</span><span>Predictive Analytics</span></div></article><article className="panel"><h2>Event Stream</h2>{['Requirement priority changed','CI/CD deployment completed','Service incident correlated'].map((x,i)=><div className="event"><i></i><div><b>{x}</b><small>{[ 'Planning → Product','Engineering → Operations','Monitoring → Service Mgmt'][i]}</small></div><time>{[ '2m','8m','14m'][i]}</time></div>)}</article></div>
   <div className="sectiontitle"><div><h2>Specialized Hubs</h2><p className="muted">16 coordinated workspaces connected through the ADAPT event bus.</p></div><a>View architecture →</a></div>
   <div className="hubs">{hubs.map((h,i)=><article><div className="hubtop"><span>{String(i+1).padStart(2,'0')}</span><em>{i<4?'PLANNING':i<8?'COMMUNICATION':'DEVELOPMENT'}</em></div><h3>{h[0]}</h3><p>{h[1]}</p><a>Open hub →</a></article>)}</div>
  </section>
 </main>
}
